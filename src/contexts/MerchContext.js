import React, { useReducer } from 'react';
import axios from 'axios';
import { APImerch } from '../helpers/config'

export const merchContext = React.createContext()
const INIT_STATE = {
    products: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_ALL_MERCH":
            return { ...state, merch: action.payload }
        case "EDIT_SPECIFIC_MERCH":
            return { ...state, merch: action.payload }



        default:
            return state;
    }
}


const MerchContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const createMerch = async (merch) => {
        try {
            const response = await axios.post(APImerch, merch)
            let action = {
                type: "CREATE_MERCH",
                payload: response.data,
            }
            dispatch(action)
            getAllMerch();
        } catch (e) {
            console.log(e)
        }

    }
    const getAllMerch = async () => {
        try {
            const response = await axios(APImerch)
            let action = {
                type: "GET_MERCH",
                payload: response.data,
            };
            dispatch(action)

        } catch (e) {
            console.log(e)
        }
    }

    const editSpecificMerch = async (id, merch) => {
        try {
            const response = await axios(APImerch + id, merch)
            let action = {
                type: "EDIT_SPECIFIC_MERCH",
                payload: response.data,
            };
            dispatch(action)
        } catch (e) {
            console.log(e)
        }
    }
    const deleteMerch = async (id) => {
        try {
            const response = await axios.delete(APImerch + id)
            let action = {
                type: "DELETE_MERCH",
                payload: response.data
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <merchContext.Provider
            value={{
                createMerch: createMerch,
                getAllMerch: getAllMerch,
                editSpecificMerch: editSpecificMerch,
                deleteMerch: deleteMerch,
            }}
        >
            {props.children}
        </merchContext.Provider>
    );
};

export default MerchContextProvider;