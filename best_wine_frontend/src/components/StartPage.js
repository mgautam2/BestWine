import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {incrementPage} from '../redux/action';

function StartPage() {
  let dispatch = useDispatch();
  
  function handleClick() {
    dispatch(incrementPage());
  }
  
  return (
    <div >
      <AppBar position="static" >
        <Typography variant="h6" color="inherit">
          Wine Recommendation System
        </Typography>
      </AppBar>
      <div className="formPage">
        <div className="formDiv">
          <Typography variant="h3" gutterBottom>
            Need some Wine Recommendations?
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Start Quiz
          </Button>
          <Typography variant="h3" gutterBottom>
            Image
          </Typography>
      </div>
      </div>
    </div>
   )
}


export default StartPage;