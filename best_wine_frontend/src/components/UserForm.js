import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import StartPage from './StartPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Submit from './Submit';


function renderSwitch(page) {
   switch(page) {
    case 0:
      return (<StartPage/>);
    case 1:
      return (<Page1/>);
    case 2:
      return (<Page2/>);
    case 3:
      return (<Submit/>);
  }
} 

function UserForm() {
  let currPage = useSelector(state => state.currPage);
  
  return renderSwitch(currPage);
}
    

export default UserForm;