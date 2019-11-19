const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

//Load Person Model
const Person = require("../../../../models/Person");

//Load Transaction model
const Room = require("../../../../models/Other/Room");

let finData;

// @type    get
// @route    /api/report/chart/enqgraph/get
router.get(
    "/get/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      let resultArray = [];
      let resultArray1 = [];
      var des = req.user.designation;
      var des1 = "Admin";
      var des2 = "Manager";
  
     
  if (des == des1 || des == des2){

    var i = 29;
    while (i >=0 ) {
      var today = new Date()
      var priorDate = new Date().setDate(today.getDate()-i)
     var lastDate = new Date(priorDate)
     var pyear = lastDate.getFullYear()

     var pmonth = lastDate.getMonth() + 1
     var pdate = lastDate.getDate()
    //  console.log( " a " + lastDate + "  b" + pmonth+ "  c " + pdate + "  d" + pyear)
     
     await Room.find({
      formType: "contact",
      monthC: pmonth ,
      yearC:pyear,
      dateC: pdate
    }).then(Room => {
      ContactNo = Room.length
      // console.log(Room)
   }).catch(err => console.log(err));

      
     
      resultArray[29 -i] = ContactNo
     
    //nn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
    
    await Room.find({
      formType: "Seat enquiry",
      monthC: pmonth ,
      yearC:pyear,
      dateC: pdate
    }).then(Room => {
      ContactNo = Room.length
      // console.log(Room)
   }).catch(err => console.log(err));

      
     
      resultArray1[29-i] = ContactNo
  // //nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
      
  
  //     let Room2 = await Room.find({
  //       formType: "Seat enquiry"
      
  //     }).catch(err => console.log(err));
  
  //     Room2.forEach(one => {
       
  //       let obj = { };
  //       var str = one.currentdate;
  //       var res = str.toLocaleDateString();
  //       console.log(str 
  //           + "split " + res)
  //       obj.k = res.split("/").reverse().join("-");
  //       obj.date = res;
  //       obj.name = one.name;
  //       obj.email = one.email;
  //       obj.phoneNo = one.mobile;
     
  //       obj.subject = "Seat Enquiry;"
  //       obj.message = one.address;

      
       
  //       resultArray.push(obj);
        
  //     });
  
  //     resultArray1 = bubbleSort(res, resultArray);
  //     res.json(resultArray1);
  i--;
    }
    finData = {
      labels: ["Booking Quote", "Contact Request"],
        datasets: [
          {
            label: ["Booking Quote"],
            data: resultArray1,
            backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8)","rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)",],
            borderWidth: 1
          },
          {
            label: ["Contact Request"],
            data: resultArray,
            backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8)","rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8),rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(153, 102, 255, 0.8)", "rgba(255, 159, 64, 0.8)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)",],
            borderWidth: 1
          }
        ]
    }
    res.json(

finData

      
    )
    // console.log(resultArray)
    }else {
      res.json({
        message: "You are not authorised ",
        variant: "error"
      });
    }
    }
  );
  
  // function bubbleSort(res, a) {
  //   var swapped;
  //   do {
  //     swapped = false;
  //     for (var i = 0; i < a.length - 1; i++) {
  //       if (new Date(a[i].k) > new Date(a[i + 1].k)) {
  //         var temp = a[i];
  //         a[i] = a[i + 1];
  //         a[i + 1] = temp;
  //         swapped = true;
  //       }
  //     }
  //   } while (swapped);
  //   return a;
  // }
   
  module.exports = router;