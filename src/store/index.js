import createStore from "storeon"

import positions from "./positions"
import temperatures from "./temperatures"

export default createStore([positions, temperatures])
