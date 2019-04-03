import { h } from "preact"
import { useInterval } from "../libraries/hooks"
import useStoreon from "storeon/preact"

import Dashboard from "./dashboard"
import NavBar from "./nav-bar"
import Router from "preact-router"
import Settings from "./settings"
import SideBar from "./side-bar"

export default () => {
  // This should be polled from websocket for example
  const { dispatch } = useStoreon()

  useInterval(() => {
    const tempKeys = ["T1", "B"]
    tempKeys.forEach(key => dispatch("temperatures/update", { key, value: Math.floor(Math.random() * 215) }))
  }, 1000)

  return (
    <div className="d-flex" id="wrapper">
      <SideBar />
      <div id="page-content-wrapper">
        <NavBar />
        <div className="container-fluid">
          <Router>
            <Dashboard path="/" />
            <Settings path="/settings" />
          </Router>
        </div>
      </div>
    </div>
  )
}
