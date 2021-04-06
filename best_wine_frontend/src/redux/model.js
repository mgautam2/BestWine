const PrefDataInitState = {
  currPage : 0,
  color : '',
  cost : '',
  rating : '',
  ocassion : '',
  mealPref : '',
  dryVsSweet: "",
  tannicity : '',
}

export default function preferenceData (state = PrefDataInitState, action) {
  switch (action.type) {
    case 'changePage':
      return { ...state, currPage: state.currPage + action.payload }
    case 'question1':
      return { ...state, ...action.payload }
    case 'question2':
      return { ...state, ...action.payload }
    case 'question3':
      return { ...state, ...action.payload }
    case 'reset':
      return PrefDataInitState;
    default:
      return state
    }
}
