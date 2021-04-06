
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
