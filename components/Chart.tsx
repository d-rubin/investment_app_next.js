import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  LineController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

function CoinChart(props) {
  const { data, xTicksLimit, yTicksLimit } = props;
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    locale: "de",
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false,
        mode: "nearest",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          source: "auto",
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit: xTicksLimit || undefined,
        },
      },
      y: {
        position: "right",
        ticks: {
          maxTicksLimit: yTicksLimit || undefined,
          autoSkip: true,
          source: "auto",
        },
      },
    },
  };
  return <Line className="h-full w-full" data={data} options={options} />;
}

export { CoinChart };
