import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loadBookAsync = createAsyncThunk(
    'products/loadProducts',
    async () => {
        const res = await fetch('https://lit-reaches-74338.herokuapp.com/items')
        const data = await res.json();

        return data;
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        ShopList: [],
        ProductsList: [],
        finishedList: [],
    },
    reducers: {
        // loadProducts: (state, {payload}) => {
        //     state.ProductsList = payload
        // },
        addShopList: (state, {payload}) => {
            state.ShopList.push(payload) 
        },
        removeFromShopList: (state, { payload }) => {
            state.ShopList = state.ShopList.filter((r) => r.id !== payload)
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(loadBookAsync.fulfilled, (state, {payload}) => {
            state.ProductsList = payload;
          })
      },
})

export const { 
    // loadproducts, 
    addShopList,
    removeFromShopList 
} = productSlice.actions;

// export const getproducts = (payload) => (dispatch) => {
//     fetch('https://redux-book-shelf.herokuapp.com/products')
//     .then(res=> res.json())
//     .then(({data}) =>  dispatch(loadproducts(data)))
// }
export default productSlice.reducer