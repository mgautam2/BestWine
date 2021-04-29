import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";

import WineTiles from './WineTiles';
import {incrementPage, nextRecc, setWineData, setRatingData, setSenario } from '../redux/action';
import constants from '../constants';


const URL = `${constants.BASE_URL}/api/recommendations`;

function RecPage() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.preferenceData);
  const recData = useSelector(state => state.userRating);
  const [gotData, setGotData] = useState(false);
  const [ques1, setQues1] = useState("");
  const [ques2, setQues2] = useState("");
  
  useEffect(() => { // fetch data from server with reccomndations
    axios.post(URL, formData)
    .then(({data}) => {
      console.log(data.reccNum)
      dispatch(setSenario(data.reccNum));
      dispatch(setWineData(data.data[0]));
      setGotData(true);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  function handleClick({target}) {
    if (target.name === 'ques1') {
      setQues1(target.value);
    }
    else if (target.name === 'ques2') {
      setQues2(target.value);
    }
  }
  
  function handleNext() {
    dispatch(setRatingData(recData.reccNum, {ques1, ques2}));
    
    if (recData.reccNum < 3) {
        dispatch(nextRecc());
    }
    else {
      dispatch(incrementPage());
    }
    setQues1("");
    setQues2("");
  }
  
  function createWineTiles(winesInfo) {
    return <WineTiles info={winesInfo} num={recData.reccNum + 1}/>;
  } 

  if (gotData) { // conditional render based on data
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
              We have four recommendations for you
            </Typography>
            <Typography variant="h5" gutterBottom>
              {constants.welcomeText[recData.senarioType]} 
            </Typography>
            <div className="wine-tile-gp">
              {createWineTiles(recData.wineData[recData.reccNum])}
            </div>
            
            <Typography variant="h5" gutterBottom>
              Do you trust this recommendation?
            </Typography>
            
            <RadioGroup row name="ques1" onClick={handleClick} value={ques1}>
              <FormControlLabel
                control={<div></div>}
                label="Strongly Distrust"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="1"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="2"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="3"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="4"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="5"
                labelPlacement="bottom"
              />
              <FormControlLabel
                control={<div></div>}
                label="Strongly Trust"
              />
            </RadioGroup>
            <br />
            <br />
            <Typography variant="h5" gutterBottom>
              How likely are you to purchase this wine?
            </Typography>
            <RadioGroup row name="ques2" onClick={handleClick} value={ques2}>
              <FormControlLabel
                control={<div></div>}
                label="Very Unlikely"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="1"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="2"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="3"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="4"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="5"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="6"
                control={<Radio color="primary" />}
                label="6"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="7"
                control={<Radio color="primary" />}
                label="7"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="8"
                control={<Radio color="primary" />}
                label="8"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="9"
                control={<Radio color="primary" />}
                label="9"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="10"
                control={<Radio color="primary" />}
                label="10"
                labelPlacement="bottom"
              />
              <FormControlLabel
                control={<div></div>}
                label="Very Likely"
              />
            </RadioGroup>
            
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
   else {
     return (
       <div> Bhag Bosdike</div>
     );
   }
}

export default RecPage;