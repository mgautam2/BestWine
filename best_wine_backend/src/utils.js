
const cases = {
  "0": "ctp0",
  "1": "ctp1",
  "2": "ctp2",
  "3": "ctp3",
  "4": "ctp4",
  "5": "ctp5"  
};

function getSenario(count) {
  count = count % 6;
  return cases[`${count}`];
}

module.exports = {
  getSenario
};
