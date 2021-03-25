
const initState = {
  currPage : 3,
  winePreference : "",
  budget : ""
}


export default function githubData (state = initState, action) {
    
  switch (action.type) {
    case 'changePage':
      return { ...state, currPage: state.currPage + action.payload }
  //   case 'decrement':
  //     return { ...state, value: state.value - 1 }
  //   case 'incrementByAmount':
  //     return { ...state, value: state.value + action.payload }
    default:
      return state
    }
}