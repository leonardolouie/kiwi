import React from "react";
import {Provider} from "react-redux";
import store from "./src/reducers/store";

export default({element}) => {
    return <Provider store = {store}> {element} </Provider>;
}