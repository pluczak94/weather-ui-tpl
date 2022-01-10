import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {connect} from "react-redux";


const mapStateToProps = ({location, settings}) => ({location, settings});

function ForecastDetailsComponent(props) {
    const activeTempDay = props.settings.activeTempDay;
    const activeDay = props.settings.activeDay;
    const activeTempNight = props.settings.activeTempNight;
    const activeHumidity = props.settings.activeHumidity;

    return (
        <Grid sx={{justifyContent: 'center', marginTop: '10px', marginBottom: '15px'}} container spacing={1}>
            <Grid item xs={12} lg={6}>
                <Card sx={{borderRadius: "30px", border: "#d9dee9", borderStyle: 'solid'}}>
                    <CardHeader titleTypographyProps={{align: "center", variant: 'h6'}} title={activeDay}/>
                    <CardContent>
                        <Typography style={{textAlign: 'center'}} variant='h6'>Temp Day: {activeTempDay}</Typography>
                        {activeTempNight != null && <Typography style={{textAlign: 'center'}} variant='h6'>Temp
                            Night: {activeTempNight}</Typography>}
                        <Typography style={{textAlign: 'center'}} variant='h6'>Humidity: {activeHumidity}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}


export default connect(mapStateToProps)(ForecastDetailsComponent);

