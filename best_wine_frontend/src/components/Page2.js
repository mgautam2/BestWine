import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import WineTiles from './WineTiles';
import data from './info.json'

import {incrementPage, decrementPage } from '../redux/action';

function Page2() {
  let dispatch = useDispatch();
  
  function handleNext() {
    dispatch(incrementPage());
  }
  function handleBack() {
    dispatch(decrementPage());
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
            Our Recommendations for you 
          </Typography>
          <Typography variant="h5" gutterBottom>
            Based on your responses, here are the best wines for the occasion! 
            Some wines are recommended by our AI algorithm and others are recommendations from our in-house wine experts
          </Typography>
          <div className="wine-tile-gp">
            {createWineTiles(data)}
          </div>
          <Typography variant="h4" gutterBottom>
            How likely are you to try these recommended wines? Rate from 1-4.
          </Typography>
          <Typography variant="h5" gutterBottom>
            1: Most likely, 4: Least likely
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
      </div>
      </div>
    </div>
   )
}

function createWineTiles(winesInfo) {
  console.log(winesInfo)
  let tiles = winesInfo.map(wine => {
    return (<WineTiles info={wine}/>);
  })
  return tiles
}



export default Page2;