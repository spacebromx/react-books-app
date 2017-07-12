/*
    As a rule of thumb, when there are actions involved in the workflow
    we always have to check for the action type and return the action
    payload. A reducer always returns a small piece of the store (state)
*/
export default function(state = {}, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}