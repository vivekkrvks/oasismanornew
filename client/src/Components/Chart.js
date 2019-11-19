import React, { useEffect, useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { makeStyles, Container } from "@material-ui/core/";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles(theme => ({
  graphBg: {
    backgroundColor: "#cbf0f2",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export function AdminChart() {
  const [userCount, setUserCount] = useState({});
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("/api/report/chart/userchart/get/")
      .then(res => setUserCount(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Container maxWidth="lg">
      <Carousel showThumbs={false}>
        <div className={classes.graphBg}>
          <AssetLib />
        </div>
        <div className={classes.graphBg}>
          <Doughnut data={userCount} options={{ maintainAspectRatio: true }} />
        </div>
        <div className={classes.graphBg}>
          <RentFig />
        </div>
        <div className={classes.graphBg}>
          <Enquiry />
        </div>
      </Carousel>
    </Container>
  );
}

function AssetLib() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Income",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.4)", "rgba(54, 162, 235, 0.4)", "rgba(255, 206, 86, 0.4)", "rgba(75, 192, 192, 0.4)", "rgba(153, 102, 255, 0.4)", "rgba(255, 159, 64, 0.4)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1
      },
      {
        label: "Expanse",
        data: [8, 15, 5, 12, 14, 8],
        backgroundColor: ["rgba(65, 130, 234, 0.2)", "rgba(45, 110, 135, 0.2)", "rgba(105, 206, 76, 0.2)", "rgba(15, 122, 292, 0.2)", "rgba(123, 122, 225, 0.2)", "rgba(205, 109, 64, 0.2)"],
        borderColor: ["rgba(65, 130, 234, 1)", "rgba(5, 110, 135, 1)", "rgba(105, 206, 76, 1)", "rgba(15, 122, 292, 1)", "rgba(123, 122, 225, 1)", "rgba(205, 109, 64, 1)"],
        borderWidth: 1
      }
    ]
  };
  return (
    <div>
      <Line data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
}

// function UserCount() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     axios
//       .get("/api/report/chart/userchart/get/")
//       .then(res => setData(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <Doughnut data={data} options={{ maintainAspectRatio: true }} />
//     </div>
//   );
// }

function RentFig() {
  const data = {
    labels: ["Dues Rent", "Paid Rent"],
    datasets: [
      {
        data: [2, 4],
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1
      }
    ]
  };
  return (
    <div>
      <Doughnut data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
}

function Enquiry() {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   axios
  //     .get("/api/report/chart/enqgraph/get")
  //     .then(res => setData(res.data))
  //     .catch(err => console.log(err));
  // }, []);
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    datasets: [
      {
        label: "Booking Request",
        data: [12, 19, 3, 5, 2, 3, 4, 5, 6, 8, 1, 2, 3, 5, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.4)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      },
      {
        label: "No. of Enquiry",
        data: [8, 15, 5, 12, 14, 8, 2, 6, 7, 4, 9, 1, 0, 5, 6],
        backgroundColor: [
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)",
          "rgba(65, 130, 234, 0.2)"
        ],
        borderColor: [
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)",
          "rgba(65, 130, 234, 1)"
        ],
        borderWidth: 1
      }
    ]
  };
  return (
    <div>
      <Bar data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
}
