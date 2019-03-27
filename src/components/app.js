import NavBar from "./nav-bar"
import Temeratures from "./temperatures"
import MachineStatus from "./machine-status"
import HeadMovement from "./head-movement"

import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import { useInterval } from "../libraries/hooks"
import connect from "storeon/preact"

const App = (store) => {
  // This should be polled from websocket for example
  useInterval(() => {
    const positions = ["X", "Y", "Z"]
    const tempKeys = ["T1", "B"]

    store.dispatch("positions/update" + positions[Math.floor(Math.random() * positions.length)], Math.floor(Math.random() * 225))
    tempKeys.forEach(key => store.dispatch("temperatures/update", { key, value: Math.floor(Math.random() * 215) }))
  }, 1000)

  return(
    <div>
      <NavBar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6"><Temeratures /></div>
          <div className="col-md-6"><MachineStatus /></div>
        </div>
        <div className="row">
          <div class="col-md-12 mt-2"><HeadMovement /></div>
        </div>
      </div>
    </div>
  )
}

export default connect("temperatures", "x", "y", "z", App)