import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Wallet Watcher",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "WMT",
  "Hosky",
  "Min",
  "Charli3",
  "Wing",
  "Sundae",
  "MELD",
  "VYFI",
  "XRAY",
  "DRIP",
  "EMP",
  "MILK",
  "AGIX",
  "DANA",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Subscriptions",
      data: [4, 1, 3, 2, 3, 3, 4, 2, 1, 3, 3, 3, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function VerticalChart() {
  return (
    <div className="m-20">
      <Bar options={options} data={data} />
    </div>
  );
}

export default VerticalChart;
