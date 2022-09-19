import { styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectSelectedOption, updateSelectedOption } from '../features/dataSlice'


export default function Sidebar() {
    const dispatch = useDispatch()
    const selectedOption = useSelector(selectSelectedOption)
    const navigate = useNavigate()

    const SidebarDiv = styled("div")({
        width: "250px",
        minWidth: "250px",
        boxSizing: "border-box",
        position: "relative",
        borderRight: "2px solid whitesmoke",
    })

    const SidebarContent = styled("div")({
        position: "absolute",
        height: "100%",
        paddingTop: "10px",
        paddingLeft: "10px"
    })

    const SidebarOption = styled("div")({
        // width: "100%",
        paddingLeft: "20px",
        height: "40px",
        cursor: "pointer",
        fontWeight: 600,
        marginBottom: "10px",
    })

    return (
        <SidebarDiv>
            <SidebarContent>
                <Typography variant='h2' fontSize={30} marginBottom="50px" color="#3182ce" fontWeight={700}>
                    DevDynamics
                </Typography>
                <SidebarOption onClick={() => {dispatch(updateSelectedOption("Overview")); navigate('/')}}>
                    <Typography variant='h6' fontWeight={`${selectedOption === "Overview" && 800}`}>
                        Overview
                    </Typography>
                </SidebarOption>
                <SidebarOption onClick={() => {dispatch(updateSelectedOption("Metrics")); navigate('/nopage')}}>
                    <Typography variant='h6' fontWeight={`${selectedOption === "Metrics" && 800}`}>
                        Metrics
                    </Typography>
                </SidebarOption>
                <SidebarOption onClick={() => {dispatch(updateSelectedOption("Projects")); navigate('/nopage')}}>
                    <Typography variant='h6' fontWeight={`${selectedOption === "Projects" && 800}`}>
                        Projects
                    </Typography>
                </SidebarOption>
                <SidebarOption onClick={() => {dispatch(updateSelectedOption("Alerts")); navigate('/nopage')}}>
                    <Typography variant='h6' fontWeight={`${selectedOption === "Alerts" && 800}`}>
                        Alerts
                    </Typography>
                </SidebarOption>
            </SidebarContent>
        </SidebarDiv>
    );
}
