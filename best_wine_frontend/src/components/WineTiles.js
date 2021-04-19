import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '300px',
    textAlign: 'center'
  },
  content: {
    padding: '10px'
  }
});

function WineTiles({info, num}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      { (num) ? (<CardHeader
          className={classes.content}
          title={`Recommendation ${num} of 4`}
        />) : ""
      }
      <div className='img-warpper'>
        <img src={info[1]} alt=''/>
      </div>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant='h6'>
          {info[0]}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WineTiles;
