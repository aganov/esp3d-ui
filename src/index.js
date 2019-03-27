import { h, render } from "preact"
import App from "./components/app"
import { store } from "./store/index"
import { StoreContext } from "storeon/preact"
import "./stylesheets/application.scss"

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
document.body);
