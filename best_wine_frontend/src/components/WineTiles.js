import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '200px',
    textAlign: 'center'
  },
  content: {
    padding: '10px',
    fontSize:'10px'
  }
});

function WineTiles({info, num}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      { (num) ? (<CardHeader
          className={classes.content}
          subheader={`${num} of 4`}
        />) : ""
      }
      <div className='img-warpper'>
        <img src={info[1]} alt='' style={{paddingTop: '10px'}}/>
      </div>
      <CardContent>
        <Typography gutterBottom variant='h6' style={{fontSize: '15px',  marginBottom: '0px', paddingBottom: '0px'}}>
          {info[0]}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WineTiles;
