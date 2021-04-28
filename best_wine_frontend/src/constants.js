const BASE_URL = 'http://localhost:4000';
const welcomeText = {
  0: "Based on your responses, we have selected the best wines for the occasion!",  //Control
  1: "",
  2: "Based on your responses, our in-house experts have selected the best wines for the occasion!", //Expert Recommendation
  3: "",
  4: "Based on your responses, our advanced wine algorithm has selected the best wines for the occasion!", //AI 
  5: ""
}
const imgScr = 'https://www.thefoodlens.com/uploads/2017/03/Drink_Illustration_Background-FINAL.jpg';

module.exports = {
  BASE_URL,
  welcomeText,
  imgScr
};
