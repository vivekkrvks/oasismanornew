const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentVoucherSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "myPerson"
  },

  amount: {
    type: String,
    required: true
  },

  // payment voucher
  paymentVoucherNumber: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  ledger: {
    label: {
      type: String
    },

    value: {
      type: String
    }
  },

  modeOfPayment: {
    label: {
      type: String,
      default: "Cash"
    },
    value: {
      type: String,
      default: "Cash"
    }
  },
  discount: {
    type: String,
    default: "0"
  },

  remarks: {
    type: String
  },
  reminderDate: {
    type: String
  },
  currentdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = PaymentVoucher = mongoose.model(
  "mypayment",
  PaymentVoucherSchema
);
