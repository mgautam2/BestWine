import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import StartPage from './StartPage';
import { Question1, Question2, Question3 } from './Questions/';
import RecPage from './RecPage';
import Submit from './Submit';
import './index.css';


function renderSwitch(page) {
   switch(page) {
    case 0:
      return (<StartPage />);
    case 1: 
      return (<Question1 />);
    case 2:
      return (<Question2 />);
    case 3:
      return (<Question3 />);
    case 4:
      return (<RecPage />);
  }
} 

function UserForm() {
  let currPage = useSelector(state => state.currPage);
  return renderSwitch(currPage);
}
    
export default UserForm;
