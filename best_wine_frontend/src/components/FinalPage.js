import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import logo from '../bestwine_logo.png'
import WineTiles from './WineTiles';
import constants from '../constants';
import { reset } from '../redux/action';


const URL = `${constants.BASE_URL}/api/userRatings`;
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
  const recData = useSelector(state => state.userRating);
  
  function handleShare() {
    axios.post(URL, recData)
    .then( data => console.log("Sucessful"))
    .catch(err => console.log(err))
  }
  
  function handleRetake() {
    dispatch(reset());
  }
  
  return (
    <div >
      <AppBar position='static' style={{background: '#f8f1ed'}} >
        <img src={logo} style={{justifyContent: 'center', maxWidth: '150px'}}/>
      </AppBar>
      
      <div style={{background: '#f8f1ed', justifyContent: 'center', display: 'flex', height: 'calc(100vh - 42px)'}}>
        <div className="formDiv" style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
          <div className={classes.mainDiv}>
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <Typography variant="h5" gutterBottom>
                Our Recommendations for you 
              </Typography>
              <Typography variant="h7" gutterBottom>
                Based on your responses, here are the best wines for the occasion!
              </Typography>
            </div>
          </div>
          <br/>

          <div className="wine-tile-gp">
            {createWineTiles(recData.wineData)}
          </div>

          <br/><br/>
          <Button
            style={{background: '#bed596', color: '#000000', margin: '5px',  paddingLeft: '35px', paddingRight: '35px'}}
            variant="contained"
            onClick={handleShare}
          >
            Share Results
          </Button>
          <div className='retake' style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
            Retake Quiz 
            <div style={{paddingTop: '5px', paddingLeft: '5px'}}>
              <RefreshIcon 
                fontSize="small"
                onClick={handleRetake} 
              />
          </div>
        </div>
      </div>
      </div>
    </div>
   )
}

function createWineTiles(winesInfo) {
  let tiles = winesInfo.map(wine => {
    return (<WineTiles info={wine}/>);
  })
  return tiles
}

export default RecPage;
