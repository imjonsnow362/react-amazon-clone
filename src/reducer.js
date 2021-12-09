export const initialState = {
    basket: [],
}; 

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,   //return to the state where it originally was
                basket: [...state.basket , action.item] //but we will change the basket value from original to whatever it currently was + the item which you have passed inside the item
            };

            default:
                return state;
    }
};

export default reducer;
/* what is the use of reducer
when we click add to cart it goes into the data layer and gets pulled to cart 
once we set it 
pulling to cart part is easy 
but pushing/dispatching it to the data layer is a little difficult so 



basic definition - how are we able to dispatch the item to the data layer - 
this is where reducer comes in*/

 