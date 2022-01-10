import React from "react";
import {connect} from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const mapStateToProps = ({location}) => ({location});

function LocationComponent(props) {

    const latitude = props.location.currentLatitude;
    const longitude = props.location.currentLongitude;

    return (
        <Grid sx={{justifyContent: 'center'}} container direction="row" spacing={2}>
            <Grid item> <Typography style={{marginBottom: '20px', textAlign: 'center', color: ' #a1a1c2'}}
                                    variant='h5'>Latitude: {latitude}

            </Typography></Grid>
            <Grid item> <Typography style={{marginBottom: '20px', textAlign: 'center', color: ' #a1a1c2'}}
                                    variant='h5'>Longitude: {longitude}

            </Typography></Grid>

        </Grid>

    );
}


export default connect(mapStateToProps)(LocationComponent);
