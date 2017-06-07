export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELCTED':
      return action.payload
  }
      return state
}
