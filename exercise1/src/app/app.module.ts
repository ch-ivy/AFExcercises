import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavComponent } from "./nav/nav.component";
import { HeaderComponent } from "./header/header.component";
import { NgChartsModule } from "ng2-charts";
import {
  Chart,
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  TimeScale,
  TimeSeriesScale,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  TimeScale,
  TimeSeriesScale,

  Tooltip
);

function getCSSVariableValue(variable: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

const colors = {
  gray: {
    300: getCSSVariableValue("--bs-chart-gray-300"),
    600: getCSSVariableValue("--bs-chart-gray-600"),
    700: getCSSVariableValue("--bs-chart-gray-700"),
    800: getCSSVariableValue("--bs-chart-gray-800"),
    900: getCSSVariableValue("--bs-chart-gray-900"),
  },
  primary: {
    100: getCSSVariableValue("--bs-chart-primary-100"),
    300: getCSSVariableValue("--bs-chart-primary-300"),
    700: getCSSVariableValue("--bs-chart-primary-700"),
  },
  black: getCSSVariableValue("--bs-dark"),
  white: getCSSVariableValue("--bs-white"),
  transparent: "transparent",
};

const fonts = {
  base: "Cerebri Sans",
};
console.log(1);
console.log(getCSSVariableValue("--bs-chart-primary-700"));

Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;

// Default
Chart.defaults.color = getCSSVariableValue("--bs-chart-default-color");
Chart.defaults.font.family = fonts.base;
Chart.defaults.font.size = 13;

// Layout
Chart.defaults.layout.padding = 0;

// Legend
Chart.defaults.plugins.legend.display = false;

// Point
Chart.defaults.elements.point.radius = 0;
Chart.defaults.elements.point.backgroundColor = colors.primary[700];

// Line
Chart.defaults.elements.line.tension = 0.4;
Chart.defaults.elements.line.borderWidth = 3;
Chart.defaults.elements.line.borderColor = colors.primary[700];
Chart.defaults.elements.line.backgroundColor = colors.transparent;
Chart.defaults.elements.line.borderCapStyle = "round";

// Bar
Chart.defaults.elements.bar.backgroundColor = colors.primary[700];
Chart.defaults.elements.bar.borderWidth = 0;
Chart.defaults.elements.bar.borderRadius = 10;
Chart.defaults.elements.bar.borderSkipped = false;
Chart.defaults.datasets.bar.maxBarThickness = 10;

// Arc
Chart.defaults.elements.arc.backgroundColor = colors.primary[700];
Chart.defaults.elements.arc.borderColor = getCSSVariableValue(
  "--bs-chart-arc-border-color"
);
Chart.defaults.elements.arc.borderWidth = 4;
Chart.defaults.elements.arc.hoverBorderColor = getCSSVariableValue(
  "--bs-chart-arc-hover-border-color"
);
Chart.overrides.doughnut.cutout = "83%";
Chart.overrides.doughnut.plugins.tooltip.callbacks.title = function (ctx) {
  return ctx[0].label;
};

Chart.defaults.scales.linear.grid = {
  ...Chart.defaults.scales.linear.grid,
  borderDash: [2],
  borderDashOffset: 2,
  color: getCSSVariableValue("--bs-chart-grid-line-color"),
  drawBorder: false,
  drawTicks: false,
};

//  Chart.defaults.scales.linear.ticks.beginAtZero = true;
Chart.defaults.scales.linear.ticks.padding = 10;
Chart.defaults.scales.linear.ticks.stepSize = 10;

Chart.defaults.scales.category.ticks.padding = 20;

@NgModule({
  declarations: [AppComponent, NavComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
