import {createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer";

export let store = createStore(rootReducer);