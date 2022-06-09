import React from 'react';
import {Bar} from 'react-chartjs-2';

export const Barchart =()=> {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8];
    const data = {
    labels: labels,
    datasets: [
    {
    label: "Weather Barchart",
    data: [65, 59, 80, 81],
    backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    
    ],
    borderColor: [
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",

    ],
    borderWidth: 1,
    },
    ],
    }
    return(
        <div>
            <h1>Barchart</h1>
        <Bar data={data} />
        </div>
    ) 
    }