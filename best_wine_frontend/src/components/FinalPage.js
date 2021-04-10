import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';

import WineTiles from './WineTiles';
import data from './info.json'

import { reset } from '../redux/action';

const useStyles = makeStyles({
  mainDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  retake: {
    minHeight: '100%'
  }
});


function RecPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  function handleShare() {
    // Send send results back to server
  }
  
  function handleRetake() {
    dispatch(reset());
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
          <div className={classes.mainDiv}>
            <div>
              <Typography variant="h3" gutterBottom>
                Our Recommendations for you 
              </Typography>
              <Typography variant="h5" gutterBottom>
                Based on your responses, here are the best wines for the occasion!
              </Typography>
            </div>
            <div className='retake'>
              Retake Quiz
              <RefreshIcon 
                fontSize="large"
                onClick={handleRetake} 
              />
            </div>
          </div>
          <div className="wine-tile-gp">
            {createWineTiles(data)}
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={handleShare}
          >
            Share Results
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



export default RecPage;