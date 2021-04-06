import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { incrementPage, decrementPage, submitQues1 } from '../../redux/action';

function Question1() {
  const formData = useSelector(state => state);
  const [color, setColor] = useState(formData.color);
  const [cost, setCost] = useState(formData.cost);
  const [rating, setRating] = useState(formData.rating);
  const dispatch = useDispatch();
    
  function handleNext() {
    dispatch(submitQues1(color, cost, rating));
    dispatch(incrementPage());
  }
  
  function handleBack() {
    dispatch(submitQues1(color, cost, rating));
    dispatch(decrementPage());
  }
  
  function handleChange({target}) {
    if (target.name === 'color') {
      setColor(target.value)
    }
    else if (target.name === 'cost') {
      setCost(target.value)
    }
    else if (target.name === 'rating') {
      setRating(target.value)
    }
  } 

  return (
    <div >
      <AppBar position='static' >
        <Typography variant='h4' color='inherit'>
          Wine Recommendation System
        </Typography>
      </AppBar>
      <div className='formPage'>
        
        <div className='formDiv'>
          <Typography variant='h4' gutterBottom>
            What type of wine are you looking for? Select One.
          </Typography>
          <RadioGroup name='color' value={color} onChange={handleChange}>
            <FormControlLabel value='red' control={<Radio />} label='Red' />
            <FormControlLabel value='white' control={<Radio />} label='White' />
            <FormControlLabel value='rose' control={<Radio />} label='Rosé' />
            <FormControlLabel value='na' control={<Radio />} label='I Don’t Know/No Preference' />
          </RadioGroup>
          
          <Typography variant='h4' gutterBottom>
            How much are you willing to spend on wine today? Select One.
          </Typography>
          <RadioGroup name='cost' value={cost} onChange={handleChange}>
            <FormControlLabel value='1' control={<Radio />} label='< $10' />
            <FormControlLabel value='2' control={<Radio />} label='$10-15' />
            <FormControlLabel value='3' control={<Radio />} label='$15-20' />
            <FormControlLabel value='4' control={<Radio />} label='> $20' />
          </RadioGroup>
          
          <Typography variant='h4' gutterBottom>
            What quality of wine are you looking for?
          </Typography>
          <RadioGroup name='rating' value={rating} onChange={handleChange}>
          <FormControlLabel value='1' control={<Radio />} label='Soundly made' />
          <FormControlLabel value='2' control={<Radio />} label='Very good' />
          <FormControlLabel value='3' control={<Radio />} label='Outstanding' />
          <FormControlLabel value='4' control={<Radio />} label='Beyond Outstanding' />
          <FormControlLabel value='5' control={<Radio />} label='I Don’t Know/No Preference' />
          </RadioGroup>
          
          <Button
            color='primary'
            variant='contained'
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
   )
}

export default Question1;
