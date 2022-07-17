export const actionTypes = {
    GET_CAT_DATA_STARTED: 'GET_CAT_DATA_STARTED',
    GET_CAT_DATA_DONE: 'GET_CAT_DATA_DONE',
    GET_CAT_DATA_FAILED: 'GET_CAT_DATA_FAILED',
}

export const initState = {
    catData: {
        isLoading: false,
        data: '',
    },
    dogsData: {
        isLoading: false,
        data: '',
    }
}

const getCatDataStarted = (data) => {
    dispatch({type: actionTypes.GET_CAT_DATA_STARTED, payload: data.fact});
}

const reducer = (state,action) => {
    switch (action.type) {
        case actionTypes.GET_CAT_DATA_STARTED:
            return {...state, catData: {...state.catData, isLoading: true }};
        case actionTypes.GET_CAT_DATA_DONE:
            return {...state, catData: {...state.catData, isLoading: false, data: action.payload }};
        case actionTypes.GET_CAT_DATA_FAIL:
            return {...state, catData: {...state.catData, isLoading: false }};
        default:
            return state;
    }
}

export default reducer;