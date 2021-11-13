import React, { useReducer } from 'react';
import axios from 'axios';
import { API } from '../helpers/config'

export const merchContext = React.createContext()
const INIT_STATE = {}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case "GET_MERCH":
            return { ...state, merch: action.payload }

        default:
            return state;
    }
}


const MerchContextProvider = (props) => {
    const [sate, dispatch] = useReducer(reducer, INIT_STATE)

    const createMerch = async (merch) => {
        try {
            const response = await axios.post(`${API}`, merch)
            let action = {
                type: "CREATE_MERCH",
                payload: response.data,
            }
        } catch (e) {
            console.log(e)
        }
    }

    const getMerch = async () => {
        try {
            const response = await axios(API)
            let action = {
                type: "GET_MERCH",
                payload: response.data,
            };
            dispatch(action)

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <merchContext.Provider
            value={{
                createMerch: createMerch,
                getMerch: getMerch,
            }}
        >

        </merchContext.Provider>
    );
};

export default MerchContextProvider;