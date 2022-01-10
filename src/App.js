import './App.css';
import React from "react";
import ForecastComponent from "./components/Forecast/ForecastComponent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LocationComponent from "./components/Location/LocationComponent";
import ForecastDetailsComponent from "./components/ForecastDetails/ForecastDetailsComponent";


function App() {

    return (
        < Container maxWidth={"xl"} >
            <Typography style={{marginBottom: '20px', textAlign: 'center', color:' #a1a1c2'}} variant='h4'>Weather App
            </Typography>
            <LocationComponent/>
            <ForecastDetailsComponent/>
            <ForecastComponent/>
        </Container>);
}

export default App;
