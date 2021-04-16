const { spawn } = require('child_process');
const express = require('express');
const path = require('path');
const fs = require('fs');

const router = new express.Router();


const wineData = require('./info.json');
const { getSenario } = require('../utils');

let count = 0;

router.post("/recommendations", function(req, res, next) {
    
    const { 
      Color,
      Cost,
      Activities,
      Rating,
      ABV,
      Tannicity
    } = req.body;
    
    const data = {
      Color,
      Cost,
      Activities,
      Rating,
      ABV,
      Tannicity
    }
    
  try {
    fs.writeFileSync('./input.json', JSON.stringify(data));
    console.log("Written to file");
    //file written successfully
  } catch (err) {
    console.error(err)
  }
    
    
    console.log(data)
    res.status(200).json(wineData);
    
    // create a file for input for recommender
    
    const filePath = path.join(__dirname, "p.py");
    
    // later on pass in the input and output file for recommender
    const child = spawn('python3' , [filePath]); 
    
    child.on('exit', async function (code, signal) {
      // send back the results
      
      // Delete the input file for recommender
      // Delete the output file for recommender
    });
    
    child.stdout.on('data', (data) => {
      console.error(`${data}`);
    });
    
    child.on('error', (error) => {
     console.error(`error: ${error.message}`);
     // send back 400 status code
   });
   
});


router.post("/userRatings", function(req, res, next) {
    console.log(req.body)
    res.send("Yes")
});



module.exports = router;