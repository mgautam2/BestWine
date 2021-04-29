import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import logo from '../../bestwine_logo.png'
import { incrementPage, decrementPage, submitQues3 } from '../../redux/action';


function Question3() {
 const formData = useSelector(state => state.preferenceData); 
  const [dryVsSweet, setDryVsSweet] = useState(formData.ABV);
  const [tannicity, setTannicity] = useState(formData.Tannicity);
  const dispatch = useDispatch();
  
  function handleNext() {
    dispatch(submitQues3(dryVsSweet, tannicity));
    dispatch(incrementPage());
  }
  
  function handleBack() {
    dispatch(submitQues3(dryVsSweet, tannicity));
    dispatch(decrementPage());
  }
  
  function handleChange({target}) {
    if (target.name === 'dryVsSweet') {
      setDryVsSweet(target.value)
    }
    else if (target.name === 'tannicity') {
      setTannicity(target.value)
    }
  } 
  
  return (
    <div>
      <AppBar position='static' style={{background: '#f8f1ed'}} >
        <img src={logo} style={{justifyContent: 'center', maxWidth: '150px'}}/>
      </AppBar>

      <div style={{background: '#f8f1ed', height: 'calc(100vh - 42px)'}}>
      <div className='formPage'>
        <div className='formDiv'>
          <Typography variant='h6' gutterBottom>
            On a scale of 1 to 10, how much do you like drinking sweet beverages?
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '15px'}}>
          <ToggleButtonGroup
            size='large'
            value={dryVsSweet}
            exclusive
            onClick={handleChange}
          >
            <ToggleButton name='dryVsSweet' value='1'>
              1
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='2'>
              2
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='3'>
              3
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='4'>
              4
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='5'>
              5
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='6'>
              6
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='7'>
              7
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='8'>
              8
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='9'>
              9
            </ToggleButton>
            <ToggleButton name='dryVsSweet' value='10'>
              10
            </ToggleButton>
          </ToggleButtonGroup>
          </div>

          <Typography variant='h6' gutterBottom>
            How tannic would you prefer your wine? “Tannic” refers to the amount of tannins in a wine which causes a drying sensation in your mouth.  
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '5px'}}>
            <RadioGroup name='tannicity' value={tannicity} onChange={handleChange}>
              <FormControlLabel value='Low in Tannins' control={<Radio size='small' color='default' />} label='Low in Tannins' />
              <FormControlLabel value='Medium in Tannins' control={<Radio size='small' color='default' />} label='Medium in Tannins' />
              <FormControlLabel value='High in Tannins' control={<Radio size='small' color='default' />} label='High in Tannins' />
              <FormControlLabel value='I Don’t Know/ No Preference' control={<Radio size='small' color='default' />} label='I Don’t Know/ No Preference' />
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

export default Question3;
