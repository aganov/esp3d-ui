import { h, render } from "preact"
import App from "./components/app"
import store  from "./store"
import StoreContext from "storeon/preact/context"

import "./stylesheets/application.scss"

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
document.body);
