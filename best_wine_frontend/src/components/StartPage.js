import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {incrementPage} from '../redux/action';


const useStyles = makeStyles(() => ({
  formDiv: {
    height: '50vh'
  },
}));

function StartPage() {
  const classes = useStyles();
  let dispatch = useDispatch();
  
  function handleClick() {
    dispatch(incrementPage());
  }
  
  return (
    <div >
      <AppBar position='static' >
        <Typography variant='h4' color='inherit'>
          Wine Recommendation System
        </Typography>
      </AppBar>
      <div className='formPage'>
        <div className={`formDiv ${classes.formDiv}`}>
          <Typography variant='h4' gutterBottom>
            Need some Wine Recommendations?
          </Typography>
          <Button
            color='primary'
            variant='contained'
            onClick={handleClick}
          >
            Start Quiz
          </Button>
          <Typography variant='h4' gutterBottom>
            Image
          </Typography>
      </div>
      </div>
    </div>
   )
}

export default StartPage;
