const thunk = ({ dispatch, getState}) => (next) => (action) => {
  if (typeof action === "function"){
    return action(dispatch, getStates);
  } else {
    return next(action);
  }
};

export default thunk;
