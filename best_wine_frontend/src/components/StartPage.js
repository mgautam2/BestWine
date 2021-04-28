import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { incrementPage, reset } from '../redux/action';
import constants from '../constants';
import wine from '../drinks.png'


function StartPage() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  
  function handleClick() {
    dispatch(reset());
    dispatch(incrementPage());
  }
  
  return (
    <div >
      <AppBar position='static' style={{background: '#f8f1ed'}} >
        <Typography variant='h5'
          style={{
            margin: '5px',
            marginLeft: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000000'
          }}
        >
          BestWine
        </Typography>
      </AppBar>
      <div style={{background: '#f8f1ed', height: 'calc(100vh - 42px)'}}>
      <div className='formPage'>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' gutterBottom 
            style={{marginTop: '20%'}}>
            Need some wine recommendations?
          </Typography>
          <Typography variant='h7' gutterBottom
          style={{marginBottom: '5%'}}>
            Take our quiz and get a curated set of recommendations!
          </Typography>
          <div style={{marginBottom: '50px'}}>
            <Button
            variant='contained'
            onClick={handleClick}
            style={{background: '#bed596', color: '#000000'}}
            >
              Start Quiz
            </Button>
          </div>
          <img src={wine} style={{justifyContent: 'center'}}/>
      </div>
      </div>
    </div>
    </div>
   )
}
//style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
export default StartPage;
