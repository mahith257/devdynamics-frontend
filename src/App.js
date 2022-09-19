import './App.css';
import { styled } from "@mui/material"
import Overview from './components/Overview';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Metrics from './components/Metrics';

function App() {

  const StyledApp = styled("div")({
    display: "flex",
    height: "100vh"
  })

  return (
    <BrowserRouter>
      <StyledApp>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Overview />} />
          <Route path='/nopage' element={<Metrics />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
