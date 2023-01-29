import * as actions from './actions';
export default (state, action) => {
    if (action.type === actions.CLEAR_CART) {
        return { ...state, cart: [] }
    }
    if (action.type === actions.DECREASE) {
        let tempCart = []
        if (action.payload.amount === 1) {
            tempCart = state.cart.filter(item => item.id !== action.payload.id)
        } else {
            tempCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item = { ...item, amount: item.amount - 1 }
                }
                return item
            })
        }
        return { ...state, cart: tempCart }
    }
    if (action.type === actions.INCREASE) {
        let tempCart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                item = { ...item, amount: item.amount + 1 }
            }
            return item
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === actions.REMOVE) {
        return { ...state, cart: state.cart.filter(e => e.id !== action.payload.id) }
    }
    if (action.type === actions.TOGGLE_AMOUNT) {

    }
    if (action.type === actions.GET_TOTALS) {
        let { total, amount } = state.cart.reduce((prevTotal, currItem) => {
            const { price, amount } = currItem;
            prevTotal.amount += amount
            prevTotal.total += (price * amount)
            return prevTotal
        },
            {
                total: 0,
                amount: 0
            }
        )
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }
    return state
}