import {createStore} from "redux";
import reducer from "./reducer"

let globalStore = createStore(reducer);

export default globalStore;