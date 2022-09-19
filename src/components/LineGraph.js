import { useQuery } from 'react-query'
import axios from 'axios'
import { styled } from "@mui/material"
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { ChartData } from '../config/api';
Chart.register(...registerables);

export default function LineGraph({ name }) {

    const fetchData = async () => {
        const { data } = await axios.get(ChartData(name,7,"INR"))
        return data.prices
    }

    const { data : prices, error, isError, isLoading } = useQuery(name, fetchData)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    const priceArray = prices && prices.map((p) => p[1])
    const minPrice = Math.min.apply(this, priceArray)
    const maxPrice = Math.max.apply(this, priceArray)

    const StyledDiv = styled("div")({
        width: "100%",
        height: "100%"
    })

    return (
        <StyledDiv>
        {prices && (
            <Line 
                data={{
                    labels: prices.map((c) => {
                        let date = new Date(c[0])
                        return date.toLocaleDateString()
                    }).filter((p, i, arr) => {
                        return i === arr.indexOf(p)
                    }),
                    datasets: [{data: prices.map(c => c[1]),label: `Price ( Past 7 Days ) in INR`,
                                            borderColor: "#3182ce",}]
                }}
                options={{
                    elements: {
                    point: {
                        radius: 1 ,
                    },
                    },
                    scales: {
                        y : {
                            min: minPrice,
                            max: maxPrice
                        }
                    },
                    maintainAspectRatio: false
                }}
                width={"100%"}
                height={"100%"}
            />
        )}
        </StyledDiv>
    );
}
