import {
  GET_FILTERDATA_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  LOW_TO_HIGH,
  HIGH_TO_LOW
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_FILTERDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: payload,
      };
    case LOW_TO_HIGH:
      state.products.sort((a,b)=>{return a.price-b.price})
      return{
        ...state,
        products: [...state.products]
      }
    case HIGH_TO_LOW:
      state.products.sort((a,b)=>{return b.price-a.price})
      return{
        ...state,
        products: [...state.products]
      }
    default:
      return state;
  }
};
export { reducer };
