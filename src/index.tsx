import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store";



let rerender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={store} /></Provider>,
        document.getElementById('root')
    );
}


rerender()

export default rerender