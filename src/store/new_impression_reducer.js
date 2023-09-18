const initialState = {
    id: '',
    store_id: '',
    sector_id: 120,
    paper_id: 99,
    store_number: '1',
    product_id: 266775947
  };
  
  const newImpressionReducer = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
      case 'SET_STORE_ID':
        return {
          ...state,
          store_id: action.value
        }
      case 'SET_PAPER_ID':
        return {
          ...state,
          paper_id: action.value
        }
      case 'SET_PRODUCT_ID':
        return {
          ...state,
          product_id: action.value
        }
      default:
        return state;
    }
  };
  
  export default newImpressionReducer;
  