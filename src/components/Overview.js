import { styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedGraph, updateSelectedGraph } from '../features/dataSlice'
import BarGraph from './BarGraph'
import LineGraph from './LineGraph'


export default function Overview() {
    const dispatch = useDispatch()
    const selectedGraph = useSelector(selectSelectedGraph)

    const StyledOverview = styled("div")({
        backgroundColor:"whitesmoke",
        width: "100%",
        height: "100%",
        paddingTop: "10px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        gap: "10px"
    })

    const StyledDiv = styled("div")({
        display: "flex",
        justifyContent: "flex-end"
    })

    const ButtonTypography = styled(Typography)({
        padding: "5px 10px",
        borderRadius: "5px",
        marginRight: "20px",
        cursor: "pointer",
        fontWeight: "bold"
    })

    const GraphRow = styled("div")({
        width: "100%",
        height: "45%",
        display: 'flex',
        justifyContent: "space-around",
    })

    const SmallGraph = styled("div")({
        width: "40%",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "5px",
        boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.24)",
    })

    const LargeGraph = styled("div")({
        width: "70%",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "5px",
        boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.24)",
    })

    return (
        <StyledOverview>
            <StyledDiv>
                <ButtonTypography sx={{ backgroundColor: selectedGraph === "LINE" && "skyblue" }} onClick={() => dispatch(updateSelectedGraph("LINE"))}>
                    LINE
                </ButtonTypography>
                <ButtonTypography sx={{ backgroundColor: selectedGraph === "BAR" && "skyblue" }} onClick={() => dispatch(updateSelectedGraph("BAR"))}>
                    BAR
                </ButtonTypography>
            </StyledDiv>
            <GraphRow>
                <SmallGraph>
                    {selectedGraph === "LINE" ? <LineGraph name="bitcoin" /> : <BarGraph name="bitcoin" />}
                </SmallGraph>
                <SmallGraph>
                    {selectedGraph === "LINE" ? <LineGraph name="solana" /> : <BarGraph name="solana" />}
                </SmallGraph>
            </GraphRow>
            <GraphRow>
            <LargeGraph>
                {selectedGraph === "LINE" ? <LineGraph name="tether" /> : <BarGraph name="tether" />}
            </LargeGraph>
            </GraphRow>
        </StyledOverview>
    );
}
