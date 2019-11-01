const reducer = (state = [], action = {}) => {
  console.log("state???????????????????????????????", state);
  switch (action.type) {
    case "REMOVE_FROM_CART":
      console.log("action being called?", action.payload);

    case "ADD_TO_CART":
      const product = { ...action.payload, quantity: 1 };
      // if the product is already in the array
      const already = state.find(product => product.id === action.payload.id);
      // then do not repeat the product but instead increase the quantity
      if (already) {
        return state.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...state, product];
    case "REMOVE_FROM_CART":
      console.log("action being called?", action.payload);

      return state.filter(product => product.id !== action.payload);
    case "INCREMENT":
      const newArr1 = state.map(product => {
        if (product.id === action.payload.id) {
          console.log("found the product!", product);
          product.quantity++;
        }
        return product;
      });
      return newArr1;
    case "DECREMENT":
      const newArr2 = state.map(product => {
        if (product.id === action.payload.id) {
          console.log("found the product!", product);
          product.quantity--;
        }
        return product;
      });
      return newArr2;
    case "TOTAL":
      return this.products.reduce((acc, value) => {
        return acc + value.quantity * value.price;
      }, 0);

    default:
      return state;
  }
};

export default reducer;
