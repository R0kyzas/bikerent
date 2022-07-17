import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import reducer from './reducers';

const MyGlobalState = createContext();
const MyGlobalStateChanger = createContext();

const GlobalStateProvider = ({children}) => {
    const [globalState, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <MyGlobalState.Provider value={globalState}>
                <MyGlobalStateChanger.Provider value={dispatch}>
                    {children}
                </MyGlobalStateChanger.Provider>
            </MyGlobalState.Provider>
        </div>
    )
}