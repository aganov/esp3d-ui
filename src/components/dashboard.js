import { h, Fragment } from "preact"

import Temeratures from "./temperatures"
import MachineStatus from "./machine-status"
import HeadMovement from "./head-movement"

export default () => (
  <>
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
  </>
)