import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';


// let props = {
//   from: 'AI',
//   name: 'Jax Vineyards Y3 "Taureau" 2017',
//   index: '1',
//   imgUrl: 'https://imagecdn.clips4sale.com/accounts99/8506/clip_images/clubtug-Monica%20and%20Sara%20sept%2013.gif'
// }

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
        <img src={info.imgUrl}/>
      </div>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant='h6'>
          {info.name}
        </Typography>
      </CardContent>
      <div className='tile-checkbox'>
        <TextField
          className='tile-input'
          variant="outlined"
        />
      </div>
    </Card>
  );
}





export default WineTiles;