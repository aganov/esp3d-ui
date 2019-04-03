import { h } from "preact"
import { Link } from "preact-router/match"
import { Printer, Circle, File, Clock } from "preact-feather"

export default () => (
  <div id="sidebar-wrapper">
    <div className="sidebar-heading"><Printer /><span class="ml-2">ESP3D</span></div>
    <ul className="list-group list-group-flush mt-2">
      <li class="list-group-item list-group-title">Status</li>
      <li class="list-group-item"><Circle size={14} /> <span>Printing</span></li>
      <li class="list-group-item"><File size={14} /> <span>CuteOcto.gcode</span></li>
      <li class="list-group-item"><Clock size={14} /> <span>00:11:12</span></li>
    </ul>
  </div>
)