import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import logo from '../../bestwine_logo.png'

import { incrementPage, decrementPage, submitQues2 } from '../../redux/action';

function Question1() {
  const formData = useSelector(state => state.preferenceData);
  const [ocassion, setOcassion] = useState(formData.Activities);
  const [mealPref, setMealPref] = useState(formData.MealPref);
  const dispatch = useDispatch();
  
  function handleNext() {
    dispatch(submitQues2([ocassion], mealPref));
    dispatch(incrementPage());
  }
  
  function handleBack() {
    dispatch(submitQues2(ocassion, mealPref));
    dispatch(decrementPage(ocassion, mealPref));
  }
  
  function handleChange({target}) {
    if (target.name === 'ocassion') {
      setOcassion(target.value)
    }
    else if (target.name === 'mealPref') {
      setMealPref(target.value)
    }
  }
  
  return (
    <div >
      <AppBar position='static' style={{background: '#f8f1ed'}} >
        <img src={logo} style={{justifyContent: 'center', maxWidth: '150px'}}/>
      </AppBar>
      <div style={{background: '#f8f1ed', height: 'calc(100vh - 42px)'}}>
      <div className='formPage'>
        
        <div className='formDiv'>
          <Typography variant='h6' gutterBottom>
            What is the occasion you want this wine for? Check all that apply.
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '5px'}}>
            <RadioGroup name='ocassion' value={ocassion} onChange={handleChange}>
              <FormControlLabel value='Party' control={<Radio size='small' color='default' />} label='Party' />
              <FormControlLabel value='Gift' control={<Radio size='small' color='default' />} label='Gift' />
              <FormControlLabel value='Drink Throughout the Day' control={<Radio size='small' color='default' />} label='Drink Throughout the Day' />
              <FormControlLabel value='Enjoy By Yourself' control={<Radio size='small' color='default' />} label='Enjoy By Yourself' />
              <FormControlLabel value='Enjoy With Friends' control={<Radio size='small' color='default' />} label='Enjoy With Friends' />
              <FormControlLabel value='Dinner Setting' control={<Radio size='small' color='default' />} label='Dinner Setting' />
              <FormControlLabel value='Pair with a Meal' control={<Radio size='small' color='default' />} label='Pair with a Meal' />
              <FormControlLabel value='Specific Craving' control={<Radio size='small' color='default' />} label='Specific Craving' />
              <FormControlLabel value='No Pref' control={<Radio />} label='I Don’t Know/ No Preference' />
            </RadioGroup>
          </div> 

          <Typography variant='h6' gutterBottom>
            If you were drinking wine with a meal, what types of food would you eat?
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '5px'}}>
            <RadioGroup name='mealPref' value={mealPref} onChange={handleChange}>
              <FormControlLabel value='Steak, Lamb, Beef, Pork' control={<Radio size='small' color='default' />} label='Steak, Lamb, Beef, Pork' />
              <FormControlLabel value='Chicken, poultry' control={<Radio size='small' color='default' />} label='Chicken, poultry' />
              <FormControlLabel value='Seafood or Shellfish' control={<Radio size='small' color='default' />} label='Seafood or Shellfish' />
              <FormControlLabel value='Greasy' control={<Radio size='small' color='default' />} label='Greasy' />
              <FormControlLabel value='Other' control={<Radio size='small' color='default' />} label='Other' />
            </RadioGroup>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <Button
              style={{background: '#bed596', color: '#000000', margin: '5px', paddingLeft: '35px', paddingRight: '35px'}}
              variant='contained'
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              style={{background: '#bed596', color: '#000000', margin: '5px',  paddingLeft: '35px', paddingRight: '35px'}}
              variant='contained'
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
      </div>
      </div>
    </div>
    </div>
   )
}

export default Question1;
