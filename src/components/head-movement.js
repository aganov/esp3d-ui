import { h } from "preact"
import { ChevronLeft, ChevronRight, AlertTriangle } from "preact-feather"

const HeadMovement = () => {
  const homeButtons = ["All", "X", "Y", "Z"].map(axis => <a href="javascript:;" className="btn btn-primary">Home {axis}</a>)
  const createButtonsGroup = (axis, direction) => {
    let distances = [10, 1, 0.1]

    const label = distance => direction < 0
      ? <span><ChevronLeft size={18} /> {axis}-{distance}</span>
      : <span>{axis}+{distance} <ChevronRight size={18} /> </span>

    const buttons = distances.map(distance => <a href="javascript:;" className="btn btn-secondary">{label(distance)}</a>)
    return <div className="btn-group d-block mb-2">{buttons}</div>
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">Head Movement</div>
        <div className="card-body">
          <div className="text-center">
            <div className="btn-group btn-group-justified">{homeButtons}</div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 text-right">
              {createButtonsGroup("X", -1)}
              {createButtonsGroup("Y", -1)}
              {createButtonsGroup("Z", -1)}
            </div>
            <div className="col-md-6">
              {createButtonsGroup("X", 1)}
              {createButtonsGroup("Y", 1)}
              {createButtonsGroup("Z", 1)}
            </div>
          </div>
          <div className="alert alert-warning"><AlertTriangle size={18} />The following axes are not homed <strong>X, Y, Z</strong></div>
        </div>
      </div>
    </div>
  )
}

export default HeadMovement