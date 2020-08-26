import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: "200px",
    maxWidth: "350px",
    backgroundColor: "rgba(204, 204, 204, 0.9)",
    boxShadow: "0 5px 15px 0 hsla(0,0%,100%,.4)",
    textShadow: "0.5px 0 0 #ea36af, -1px 0 0 #75fa69",
    padding: "15px",
    margin: "4% auto"
  },
  media: {
    height: "300px",
    width: "300px",
  },
  cardActionArea: {
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    padding: "2px",
  },
  cardContent: {
    borderRadius: "6px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    width: "100%",
    textAlign: "center",
    borderLeft: "2px solid #EA36AF",
    borderRight: "2px solid #75FA69"
  }
});

const CharacterDescriptionCard = ({ characterInfo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.media}
          image={`${characterInfo[0].image}`}
          title={`${characterInfo[0].name}`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2" className={classes.name}>
            {`${characterInfo[0].name}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
            {`Species: ${characterInfo[0].species}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
            {`Origin: ${characterInfo[0].origin.name}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
            {`Number of episodes: ${characterInfo[0].episode.length}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
            {`Status: ${characterInfo[0].status}`}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

export default CharacterDescriptionCard;