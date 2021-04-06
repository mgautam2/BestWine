import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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
          variant='outlined'
        />
      </div>
    </Card>
  );
}

export default WineTiles;
