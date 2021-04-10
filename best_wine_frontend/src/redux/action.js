
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

export function submitQues1(color, cost, rating) {
  return ({
    type : 'question1',
    payload : {
      color,
      cost,
      rating
    }
  })
}

export function submitQues2(ocassion, mealPref) {
  return ({
    type : 'question2',
    payload : {
      ocassion,
      mealPref
    }
  })
}

export function submitQues3(dryVsSweet, tannicity) {
  return ({
    type : 'question3',
    payload : {
      dryVsSweet,
      tannicity
    }
  })
}

export function submitQues4(age, freq) {
  return ({
    type : 'question4',
    payload : {
      age,
      freq
    }
  })
}

export function reset() {
  return ({
    type : 'reset',
    payload : {}
  })
}


