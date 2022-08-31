import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Subscriptions",
      data: [4, 1, 3, 2, 3, 3, 4, 2, 1, 3, 3, 3, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(25, 399, 13, 0.2)",
        "rgba(254, 62, 35, 0.2)",
        "rgba(25, 106, 86, 0.2)",
        "rgba(75, 19, 12, 0.2)",
        "rgba(153, 102, 55, 0.2)",
        "rgba(30, 19, 64, 0.2)",
        "rgba(155, 159, 64, 0.2)",
        "rgba(25, 152, 24, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(25, 399, 13, 0.5)",
        "rgba(254, 62, 35, 0.5)",
        "rgba(25, 106, 86, 0.5)",
        "rgba(75, 19, 12, 0.5)",
        "rgba(153, 102, 55, 0.5)",
        "rgba(30, 19, 64, 0.5)",
        "rgba(155, 159, 64, 0.5)",
        "rgba(25, 152, 24, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

function PieChart() {
  return (
    <div className="w-[50vw] h-auto m-auto">
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
