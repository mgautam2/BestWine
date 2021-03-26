import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {incrementPage, decrementPage } from '../redux/action';

function Page1() {
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
            Do you like Wine?
          </Typography>
          <RadioGroup name="ques1" value={"wine"} >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            <FormControlLabel value="N/A" control={<Radio />} label="N/A" />
          </RadioGroup>
          <Typography variant="h3" gutterBottom>
            How much are you Willing to Spend on Wine
          </Typography>
          <RadioGroup name="ques2" value={"price"} >
            <FormControlLabel value="" control={<Radio />} label="< $10" />
            <FormControlLabel value="" control={<Radio />} label="$10-15" />
            <FormControlLabel value="" control={<Radio />} label="$15-20" />
            <FormControlLabel value="" control={<Radio />} label="> $20" />
          </RadioGroup>
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


export default Page1;