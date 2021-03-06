import ActionType from '../constants';

const initialstate = {
  counter: 0,
};

export function incrementCounter(state = initialstate, action) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {...state, counter: action.payload};
    case ActionType.SUCCESS:
      return {...state, counter: action.payload};

    default:
      return state;
  }
}
