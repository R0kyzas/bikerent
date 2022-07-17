import React, { useContext } from "react";
import GlobalStateProvider from "../providers/GlobalStateProvider";
import {MyGlobalStateProvider, MyGlobalStateProviderChanger} from ".../providers/GlobalStateProvider"
import {actionTypes} from '../providers/reducers';
import axios from "axios";

const catComponent = () =>{
    const globalState = useContext(MyGlobalStateProvider);
    const dispatch = useContext(MyGlobalStateProviderChanger);

    const isCatDataLoaded = !!globalState.catData.data;

    const getCatData = () => {
        dispatch({type: actionTypes.GET_CAT_DATA_STARTED});
        axios.get('https://catfact.ninja/fact').then(res => {
            dispatch({type: actionTypes.GET_CAT_DATA_DONE, payload: res.data.fact});
        }).catch(err => {
            dispatch({type: actionTypes.GET_CAT_DATA_FAILED});
        })
    }

    return (
        <GlobalStateProvider>
            <div>
                <button onClick={getCatData}>Get Cat data</button>
                <div>Cat data State: {globalState.catData.isLoading ? 'Laukiama' : 'Brigita'}</div>
                <div>{isCatDataLoaded && globalState.catData.data}</div>
            </div>
        </GlobalStateProvider>
    )
}

export default catComponent;