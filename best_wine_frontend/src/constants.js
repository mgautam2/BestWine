
const BASE_URL = 'http://localhost:4000';
const welcomeText = {
  0: "Based on your responses, we have selected the best wines for the occasion!",  //Control
  1: "",
  2: "Based on your responses, our in-house experts have selected the best wines for the occasion!", //Expert Recommendation
  3: "",
  4: "Based on your responses, our advanced wine algorithm has selected the best wines for the occasion!", //AI 
  5: ""
}
const imgScr = 'https://images.contentstack.io/v3/assets/blt73c0d20f99e8dcff/blt8c25cebfce036954/5e2617db5e49b909a7eb9265/illustrations-serving-wine-1280px.jpg';

module.exports = {
  BASE_URL,
  welcomeText,
  imgScr
};
