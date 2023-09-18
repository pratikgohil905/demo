import React, { useState } from 'react'
import Chart from "react-apexcharts";
import Mainlayout from '../Components/Layouts/Mainlayout';

export default function Dashboard() {
    const [sale_options, setSale_Options] = useState({
        chart: { type: "area", height: 350, toolbar: { show: false } },
        colors: ["#219653", "#4318FF", "#FF7A00"],
        xaxis: {
            categories: ["03 August", "04 August", "05 August", "06 August", "07 August", "08 August", "09 August"],
            labels: { style: { colors: "#A3AED0", fontSize: "12px", fontWeight: 500 } },
        },
        yaxis: {
            labels: {
                show: true,
                style: { colors: "#A3AED0", fontSize: "12px", fontWeight: 400 },
                formatter: (val) => {
                    return val + "k";
                },
            },
        },
        dataLabels: { enabled: false },
        stroke: { show: true, curve: "smooth", lineCap: "butt", colors: undefined, width: 2, dashArray: 0 },
        legend: { show: false },
        fill: { type: "solid", colors: ["transparent"] },
        grid: { show: true, borderColor: "#F1F1F5", strokeDashArray: 0, position: "back", xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
    });

    const [sales_series, setSales_Series] = useState([
        { name: "series-1", data: [0, 0, 0, 0, 0, 0, 0] },
        { name: "series-2", data: [0, 0, 0, 0, 0, 0, 0] },
    ]);
    return (
        <Mainlayout>
            <div>
                <Chart options={sale_options} series={sales_series} type="area" height={350} />
            </div>
        </Mainlayout>
    )
}
