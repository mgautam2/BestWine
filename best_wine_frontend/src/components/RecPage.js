import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import WineTiles from './WineTiles';
import data from './info.json'
import {incrementPage } from '../redux/action';

const useStyles = makeStyles(() => ({
  input: {
    fontSize: '20px',
    maxWidth: '100px'
  },
}));


function RecPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formData = useSelector(state => state);
  
  function handleNext() {
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
            Our Recommendations for you 
          </Typography>
          <Typography variant="h5" gutterBottom>
            Based on your responses, here are the best wines for the occasion! 
            Some wines are recommended by our AI algorithm and others are recommendations from our in-house wine experts
          </Typography>
          <div className="wine-tile-gp">
            {createWineTiles(data)}
          </div>
          <div className="wine-tile-gp">
            <TextField 
              className={classes.inout}
              name='i1'
              autoComplete='off'
              variant="outlined" 
              error={true}
              InputProps={{
                className: classes.input,
              }}
              />
            <TextField 
              name='i2'
              autoComplete='off'
              variant="outlined" 
              error={true}
              InputProps={{
                className: classes.input,
              }}
            />
            <TextField 
              name='i3'
              autoComplete='off'
              variant="outlined" 
              error={true}
              InputProps={{
                className: classes.input,
              }}
            />
            <TextField 
              name='i4'
              autoComplete='off'
              variant="outlined" 
              error={true}
              InputProps={{
                className: classes.input,
              }}
            />
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
            onClick={handleNext}
          >
            Continue
          </Button>
      </div>
      </div>
    </div>
   )
}

// have an error element in the bottom for error with ranking


function createWineTiles(winesInfo) {
  let tiles = winesInfo.map(wine => {
    return (<WineTiles info={wine}/>);
  })
  return tiles
}



export default RecPage;