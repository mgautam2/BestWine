import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { incrementPage, decrementPage, submitQues1 } from '../../redux/action';
import logo from '../../bestwine_logo.png'

function Question1() {
  const formData = useSelector(state => state.preferenceData);
  const [color, setColor] = useState(formData.Color);
  const [cost, setCost] = useState(formData.Cost);
  const [rating, setRating] = useState(formData.Rating);
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
      <AppBar position='static' style={{background: '#f8f1ed'}} >
        <img src={logo} style={{justifyContent: 'center', maxWidth: '150px'}}/>
      </AppBar>
      <div style={{background: '#f8f1ed', height: 'calc(100vh - 42px)'}}>
      <div className='formPage'>
        
        <div className='formDiv'>
          <Typography variant='h6' gutterBottom>
            What type of wine are you looking for? Select One.
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '5px'}}>
            <RadioGroup name='color' value={color} onChange={handleChange}>
              <FormControlLabel value='Red' control={<Radio size='small' color='default' />} label='Red'/>
              <FormControlLabel value='White' control={<Radio size='small' color='default'/>} label='White' />
              <FormControlLabel value='Rose' control={<Radio size='small' color='default'/>} label='Rosé' />
              <FormControlLabel value='No Pref' control={<Radio size='small' color='default'/>} label='I Don’t Know/No Preference' />
            </RadioGroup>
          </div>
          
          
          <Typography variant='h6' gutterBottom>
            How much are you willing to spend on wine today? Select One.
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '5px'}}>
            <RadioGroup name='cost' value={cost} onChange={handleChange}>
              <FormControlLabel value='Under $10' control={<Radio size='small' color='default'/>} label='< $10'/>
              <FormControlLabel value='$10-$15' control={<Radio size='small' color='default'/>} label='$10-15' />
              <FormControlLabel value='$15-$20' control={<Radio size='small' color='default'/>} label='$15-20' />
              <FormControlLabel value='Above $20' control={<Radio size='small' color='default'/>} label='> $20' />
            </RadioGroup>
          </div>

          <Typography variant='h6' gutterBottom>
            What quality of wine are you looking for?
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '5px'}}>
            <RadioGroup name='rating' value={rating} onChange={handleChange}>
            <FormControlLabel value='Soundly Made' control={<Radio size='small' color='default'/>} label='Soundly made' />
            <FormControlLabel value='Very Good' control={<Radio size='small' color='default'/>} label='Very good' />
            <FormControlLabel value='Outstanding' control={<Radio size='small' color='default'/>} label='Outstanding' />
            <FormControlLabel value='Beyond Outstanding' control={<Radio size='small' color='default'/>} label='Beyond Outstanding' />
            <FormControlLabel value='No Pref' control={<Radio size='small' color='default'/>} label='I Don’t Know/No Preference' />
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
//dcb39a