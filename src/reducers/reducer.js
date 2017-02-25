import {combineReducers} from "redux";
import NavigationStateReducer from '../modules/navigation/NavigationState';
import CounterStateReducer from '../modules/counter/CounterState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';
import testReducer from "./test";

const reducers = {
    // Counter sample app state. This can be removed in a live application
    counter: CounterStateReducer,

    // @NOTE: By convention, the navigation state must live in a subtree called
     //`navigationState`
    navigationState: NavigationStateReducer,

    session: SessionStateReducer,

    test: testReducer
};


const rootReducer = combineReducers(reducers);

export default rootReducer;
