const reducer = (state = [], action = {}) => {
  console.log(action, "WAAAA?");
  switch (action.type) {
    case "ADD_WISH":
      console.log("new state", [...state, action.payload.product]);
      return [...state, action.payload.product];
    default:
      return state;
  }
};

export default reducer;
