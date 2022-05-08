import { AfterViewInit, Component } from "@angular/core";
import { ChartConfiguration } from "chart.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  cs_chart: ChartConfiguration = {
    type: "bar",
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    data: {
      labels: [
        "Oct 1",
        "Oct 2",
        "Oct 3",
        "Oct 4",
        "Oct 5",
        "Oct 6",
        "Oct 7",
        "Oct 8",
        "Oct 9",
        "Oct 10",
        "Oct 11",
        "Oct 12",
      ],
      datasets: [
        {
          label: "2020",
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
        },
        {
          label: "2019",
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: "#d2ddec",
          hidden: true,
        },
      ],
    },
  };
  tf_chart: ChartConfiguration = {
    type: "doughnut",
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            afterLabel: function () {
              return "%";
            },
          },
        },
      },
    },
    data: {
      labels: ["Direct", "Organic", "Referral"],
      datasets: [
        {
          data: [60, 25, 15],
          backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
        },
        {
          data: [15, 45, 20],
          backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
          hidden: true,
        },
      ],
    },
  };
  spark_chart: ChartConfiguration = {
    type: "line",
    options: {
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false,
        },
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          hoverRadius: 0,
        },
      },
      plugins: {
        tooltip: {
          external: () => false,
        },
      },
    },
    data: {
      labels: new Array(12).fill("Label"),
      datasets: [
        {
          data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65],
        },
      ],
    },
  };
  constructor() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
