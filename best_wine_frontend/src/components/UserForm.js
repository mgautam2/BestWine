import React from 'react';
import { useSelector } from 'react-redux';

import StartPage from './StartPage';
import { Question1, Question2, Question3, Question4 } from './Questions/';
import RecPage from './RecPage';
import FinalPage from './FinalPage';
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
      return (<Question4 />);
    case 5:
      return (<RecPage />);
    case 6:
      return (<FinalPage />);
  }
} 

function UserForm() {
  let currPage = useSelector(state => state.currPage);
  return renderSwitch(currPage);
}
    
export default UserForm;
