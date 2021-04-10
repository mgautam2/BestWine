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

function WineTiles({info}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.content}
        title={info.from}
      />
      <div className='img-warpper'>
        <img src={info.imgUrl} alt=''/>
      </div>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant='h6'>
          {info.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WineTiles;

// Make this Input box in Rec Page rather than in the individual tiles

// <div className='tile-checkbox'>
//   <TextField
//     className='tile-input'
//     variant='outlined'
//   />
// </div>
  
