import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import imageNotFound from "../images/notfound.png"

const useStyles = makeStyles({
    fontColor: {
        color: "white"
    }
})

const NotFound =  () => {
    const classes = useStyles();
    
    return (
        <Grid item container xs={10} sm={10} lg={10} justify="center">
            <Typography variant="h3" className={classes.fontColor} gutterBottom>
                There's nothing here.
            </Typography>

            <Typography variant="h4" className={classes.fontColor} gutterBottom>
                Searching is pain, you better go back and search again.
            </Typography>      
            
            <div>
                <img src={imageNotFound}/>
            </div>
            
        </Grid>
    )
}

export default NotFound;