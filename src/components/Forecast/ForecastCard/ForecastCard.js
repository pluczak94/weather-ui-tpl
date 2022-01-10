import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import {connect} from "react-redux";

const mapStateToProps = ({dispatch}) => ({dispatch});

function ForecastCard(props) {

    const {tempDay, tempNight, date, humidity} = props;

    const setActiveCard = (tempDay, day, humidity, tempNight) => {
        props.dispatch({
            type: 'settings/GET_DATA',
            payload: {
                tempDay: tempDay,
                date: day,
                humidity: humidity,
                tempNight: tempNight,
            },
        })
    };


    return (<Grid item xs={12} lg={1}>
        <Card sx={{borderRadius: "30px", border: "#d9dee9", borderStyle: 'solid'}}>
            <CardActionArea onClick={() => setActiveCard(tempDay, date, humidity, tempNight)}>

                <CardHeader titleTypographyProps={{align: "center", variant: 'body2'}} title={date}/>
                <CardContent>
                    <Typography style={{textAlign: 'center'}} variant='h6'>{tempDay}

                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>)

}


export default connect(mapStateToProps)(ForecastCard);
