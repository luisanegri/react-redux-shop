export const SEARCH = "SEARCH";

export default function Search(products, id) {
  return {
    type: SEARCH,
    payload: { products, id }
  };
}
