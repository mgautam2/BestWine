const { spawn } = require('child_process');
const express = require('express');
const path = require('path');
const fs = require('fs');


const router = new express.Router();
const wineData = require('./info.json');
const { getSenario } = require('../utils');
let count = 0;

router.post("/recommendations", function(req, res, next) {
  
    const inputFilePath = path.join(__dirname, '../recommender/input.json');
    const outputFilePath = path.join(__dirname, '../recommender/output.json');
    const AIRecFilePath = path.join(__dirname, "../recommender/AiRecommender.py");
    const ExpertRecFilePath = path.join(__dirname, "../recommender/ExpertRecommender.py");
    const { Color, Cost, Activities, Rating, ABV, Tannicity } = req.body;
    const data = { Color, Cost, Activities, Rating, ABV, Tannicity };
    const input = [data]

    try {
      fs.writeFileSync(inputFilePath , JSON.stringify(input));
      console.log("Written to file");
    } catch (err) {
      console.log(err)
      res.status(500).send("Could not extract data");
    }
  
    const child = spawn('python3' , [AIRecFilePath, inputFilePath, outputFilePath]); 
   
    child.on('exit', async function (code, signal) {
      let recData;
      try {
        recData = fs.readFileSync(outputFilePath);
        recData = JSON.parse(recData)
        fs.unlinkSync(inputFilePath);
        fs.unlinkSync(outputFilePath);
      } catch (err) {
        console.log(err)
        res.status(500).send(err); //err
         return;
      }
      res.send({data:recData, reccNum: count});
      count++;
    });
   
    child.stdout.on('data', (data) => {
      console.error(`${data}`);
    });
   
    child.stderr.on('data', (data) => {
      console.error(`${data}`);
    });
   
    child.on('error', (error) => {
     console.error(`error: ${error.message}`);
     res.status(500).send("Error while running the recommender");
   });
  
});


router.post("/userRatings", function(req, res, next) {
    console.log(req.body)
    res.send("Yes")
});



module.exports = router;