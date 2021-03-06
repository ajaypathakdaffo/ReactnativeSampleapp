import ActionType from '../constants';

export const increment = (currentnumber) => ({
    type: ActionType.INCREMENT,
    payload:currentnumber
});
