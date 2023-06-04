import Chart from "react-apexcharts";
import { Card } from "../card/Card";

interface ViewsProps {
  views?: number[];
}

export const Views: React.FC<ViewsProps> = ({
  views = [1000, 520, 133, 20, 12, 1],
}) => {
  let discrete = [
    {
      seriesIndex: 0,
      dataPointIndex: 2,
      fillColor: "#0346F2",
      strokeColor: "#fff",
      size: 5,
      shape: "circle",
    },
  ];

  const info = {
    series: [
      {
        name: "Visualizações",
        data: views,
      },
    ],
    options: {
      colors: ["#0346F2"],
      chart: {
        id: "apexchart-views",
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
      },
      markers: {
        discrete,
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };
  return (
    <Card title="Visualizações" info>
      <Chart options={info.options as any} series={info.series} />
    </Card>
  );
};
