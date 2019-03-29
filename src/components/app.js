import NavBar from "./nav-bar"
import Temeratures from "./temperatures"
import MachineStatus from "./machine-status"
import HeadMovement from "./head-movement"

import { h } from "preact"
import { useInterval } from "../libraries/hooks"
import useStoreon from "storeon/preact"

export default () => {
  // This should be polled from websocket for example
  const { dispatch } = useStoreon()

  useInterval(() => {
    const tempKeys = ["T1", "B"]
    tempKeys.forEach(key => dispatch("temperatures/update", { key, value: Math.floor(Math.random() * 215) }))
  }, 1000)

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <Temeratures />
          </div>
          <div className="col-md-6">
            <MachineStatus />
          </div>
        </div>
        <div className="row">
          <div class="col-md-12 mt-2">
            <HeadMovement />
          </div>
        </div>
      </div>
    </div>
  )
}
