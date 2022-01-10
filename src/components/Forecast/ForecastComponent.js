import React from "react";
import Grid from "@mui/material/Grid";
import {connect} from "react-redux";
import ForecastCard from "./ForecastCard/ForecastCard";
import {getDate, getTempDay} from "../../utils/Utils";


const mapStateToProps = ({forecast, dispatch}) => ({forecast, dispatch});

function ForecastComponent(props) {

    const currentTemp = getTempDay(props.forecast.currentTemp);
    const forecastDays = props.forecast.forecastDays;
    const currentHumidity = props.forecast.currentHumidity;


    return (
        <Grid sx={{justifyContent: 'center'}} container spacing={1}>
            <ForecastCard tempDay={currentTemp} tempNight={null} humidity={currentHumidity} date="Current"/>
            {forecastDays.map((item, index) => {
                return <ForecastCard key={index} tempDay={getTempDay(item.tempDay)}
                                     tempNight={getTempDay(item.tempNight)} humidity={item.humidity}
                                     date={getDate(item)}/>
            })}

        </Grid>
    );
}


export default connect(mapStateToProps)(ForecastComponent);
