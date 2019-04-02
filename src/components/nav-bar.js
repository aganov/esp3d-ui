import { h } from "preact"
import { useState } from "preact/hooks"
import { Link } from "preact-router/match"
import { Menu } from "preact-feather"

const NavBrand = props => (
  <Link className="navbar-brand" href={props.linkTo}>{props.text}</Link>
)

const NavItem = props => (
  <li className={"nav-item " + (props.active ? "active" : "")}>
    <Link className="nav-link" href={props.linkTo}>
      {props.text}
    </Link>
  </li>
)

export default () => {
  const [collapsed, setCollapsed] = useState(false)

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavBrand linkTo="/" text="Esp3D" />
      <button className="navbar-toggler" type="button" onClick={() => setCollapsed(!collapsed)}>
        <Menu />
      </button>
      <div className={"navbar-collapse collapse" + (collapsed ? " show" : "")}>
        <ul className="navbar-nav">
          <NavItem linkTo="/" text="Dashboard" />
          <NavItem linkTo="/settings" text="Settings" />
        </ul>
      </div>
    </nav>
  )
}
