import { h } from "preact"
import useStoreon from "storeon/preact"

export default () => {
  const { x, y, z, dispatch } = useStoreon("x", "y", "z")

  return (
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
            <td>{Number((x).toFixed(2))}</td>
            <td>{Number((y).toFixed(2))}</td>
            <td>{Number((z).toFixed(2))}</td>
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
  )
}