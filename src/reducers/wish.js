const reducer = (state = [], action = {}) => {
  console.log(action, "WAAAA?");
  switch (action.type) {
    case "ADD_WISH":
      console.log("new state", [...state, action.payload.product]);
      return [...state, action.payload.product];
    case "REMOVE_FROM_WISH_LIST":
      console.log("action being called?", action.payload);
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
