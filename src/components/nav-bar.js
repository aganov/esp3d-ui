import { h } from "preact"
import { LogOut, Send } from "preact-feather"

export default () => (
  <div>
    <header className="navbar navbar-light bg-light justify-content-between">
      <a href="#" className="btn btn-success">Disconnect <LogOut size={18} /></a>
      <form className="form-inline" action="">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Send G-Code..." />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="submit">Send <Send size={18} /></button>
          </div>
        </div>
      </form>
    </header>
  </div>
)