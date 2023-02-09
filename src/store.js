import {configureStore} from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";
import toggleReducer from "./reducers/toggleReducer";

const store = configureStore({
    reducer:{
        number: numberReducer,
        toggle:toggleReducer
    }
})

export default store;