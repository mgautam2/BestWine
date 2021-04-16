const PrefDataInitState = {
  currPage : 0,
  Color : '',
  Cost : '',
  Rating : '',
  Activities : '',
  MealPref : '',
  ABV: "",
  Tannicity : '',
  Age: 0,
  Freq: ''
}

export function preferenceData (state = PrefDataInitState, action) {
  switch (action.type) {
    case 'changePage':
      return { ...state, currPage: state.currPage + action.payload }
    case 'question1':
      return { ...state, ...action.payload }
    case 'question2':
      return { ...state, ...action.payload }
    case 'question3':
      return { ...state, ...action.payload }
    case 'question4':
      return { ...state, ...action.payload }
    case 'reset':
      return PrefDataInitState;
    default:
      return state
    }
}

const userRatingInitState = {
  reccNum : 0,
  senarioType: 0,
  wineData: [],
  wineRatingData: ["", "", "", ""]
}

export function userRating (state = userRatingInitState, action) {
  switch (action.type) {
    case 'setSenario':
      return { ...state, senarioType: action.payload }
    case 'nextRecc':
      return { ...state, reccNum: state.reccNum + 1}
    case 'setWineData':
      return { ...state, wineData: action.payload}
    case 'setRatingData':
      const {num, data} = action.payload;
      state.wineRatingData[num] = data;
      return { ...state, wineRatingData: state.wineRatingData}
    default:
      return state
    }
}


