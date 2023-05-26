import rootRducer from "../redux/reducers/rootReducer";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { legacy_createStore as createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
    // middleware.push(logger);
}
// const store = createStore(
//     rootRducer,
//     applyMiddleware(...middleware),
//     // composeWithDevTools(),
// );
// export default store;
export const store = createStore(rootRducer, applyMiddleware(...middleware));