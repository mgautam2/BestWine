// preferenceData Action Creators

export function incrementPage() {
  return ({
    type : 'changePage',
    payload : 1
  })
}

export function decrementPage() {
  return ({
    type : 'changePage',
    payload : -1
  })
}

export function submitQues1(Color, Cost, Rating) {
  return ({
    type : 'question1',
    payload : {
      Color,
      Cost,
      Rating
    }
  })
}

export function submitQues2(Activities, MealPref) {
  return ({
    type : 'question2',
    payload : {
      Activities,
      MealPref
    }
  })
}

export function submitQues3(ABV, Tannicity) {
  return ({
    type : 'question3',
    payload : {
      ABV,
      Tannicity
    }
  })
}

export function submitQues4(Age, Freq) {
  return ({
    type : 'question4',
    payload : {
      Age,
      Freq
    }
  })
}

export function reset() {
  return ({
    type : 'reset',
    payload : {}
  })
}


// UserRating Action Creators

export function setSenario(senario) {
  return ({
    type : 'setSenario',
    payload : senario // watch this
  })
}

export function nextRecc() {
  return ({
    type : 'nextRecc'
  })
}

export function setWineData(data) {
  return ({
    type : 'setWineData',
    payload: data
  })
}

export function setRatingData( num, data) {
  const {ques1: trust, ques2: purchaseProb} = data;
  return ({
    type: 'setRatingData',
    payload: {
      num,
      data: {
        trust,
        purchaseProb
      }
    }
  })
}
