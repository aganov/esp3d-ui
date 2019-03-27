import { h } from "preact"
import connect from "storeon/preact"

const MachineStatus = ({ x, y, z, dispatch }) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">Machine Status</div>
        <table className="table">
          <tbody>
            <tr>
              <th rowspan="2" className="align-middle">Head Position</th>
              <th>X</th>
              <th>Y</th>
              <th>Z</th>
            </tr>
            <tr>
              <td>{x}</td>
              <td>{y}</td>
              <td>{z}</td>
            </tr>
            <tr>
              <th rowspan="2" className="align-middle">Extruder Drives</th>
              <th className="text-center" colspan="3">Drive 1</th>
            </tr>
            <tr>
              <td className="text-center" colspan="3">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default connect("x", "y", "z", MachineStatus)