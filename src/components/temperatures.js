import { h } from "preact"
import useStoreon from "storeon/preact"

export default () => {
  const { temperatures } = useStoreon("temperatures")

  const items = temperatures.map(temperature => {
    return(
      <tr key={temperature.key}>
        <td>{temperature.key}</td>
        <td>{temperature.value}</td>
        <td>
          <form className="form-inline">
            <select className="custom-select">
              <option value=""></option>
              <option value="1">100</option>
              <option value="2">150</option>
              <option value="3">200</option>
            </select>
          </form>
        </td>
      </tr>
    )
  })

  return (
    <div className="card">
      <div className="card-header">Heater Temperatures</div>
      <table className="table">
        <thead>
          <th></th>
          <th>Current</th>
          <th>Active</th>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    </div>
  )
}