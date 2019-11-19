const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

//Load Person Model
const Person = require("../../../../models/Person");

//Load Transaction model
const ReceiptVoucher = require("../../../../models/Transaction/ReceiptVoucher");
const PaymentVoucher = require("../../../../models/Transaction/PaymentVoucher");
let fCurrentBal;
async function getCurrentBal(res, value) {
  let totalReciptAmount = 0;
  let totalReciptDiscount = 0;
  let totalPaymentAmount = 0;
  let totalPaymentDiscount = 0;
  await ReceiptVoucher.find({
    "ledger.value": value
  }).then(ReceiptVoucher => {
    ReceiptVoucher.forEach(one => {
      totalReciptAmount += parseFloat((one.amount = one.amount || 0));
      totalReciptDiscount += parseFloat((one.discount = one.discount || 0));
    });
  });

  await PaymentVoucher.find({
    "ledger.value": value
  })
    .then(PaymentVoucher => {
      PaymentVoucher.forEach(one => {
        totalPaymentAmount += parseFloat((one.amount = one.amount || 0));
        totalPaymentDiscount += parseFloat((one.discount = one.discount || 0));
      });

      //json responce
      const credit = (totalReciptAmount + totalReciptDiscount).toFixed(2);
      const debit = (totalPaymentAmount + totalPaymentDiscount).toFixed(2);
      let currentBalance = credit - debit;

      //cr -dr
      currentBalance <= 0
        ? (fCurrentBal = -currentBalance + " DR")
        : (fCurrentBal = currentBalance + " CR");
    })
    .catch(err =>
      res.status(404).json({
        message: "No Receipt Voucher Found" + err
      })
    );
}

// @type    get
//@route    /api/report/transactionreport/cb/get/:id
// @desc    route for personnal user receiptvoucher
// @access  PRIVATE

router.get(
  "/get/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.params.id;
    Person.findOne({ _id: id }).then(personResult => {
      if (personResult) {
        getCurrentBal(res, id).then(() => {
          res.json("Current balance : " + fCurrentBal);
        });
      } else {
        console.log("Given id is not associated with any profile");
      }
    });
  }
);

module.exports = router;
