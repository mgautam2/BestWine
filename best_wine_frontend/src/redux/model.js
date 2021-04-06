const initState = {
  currPage : 0,
  winePreference : '',
  budget : ''
}

export default function githubData (state = initState, action) {
    
  switch (action.type) {
    case 'changePage':
      return { ...state, currPage: state.currPage + action.payload }
    default:
      return state
    }
}
