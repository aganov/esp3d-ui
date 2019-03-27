import createStore from "storeon"

import positions from "./positions"
import temperatures from "./temperatures"

export const store = createStore([positions, temperatures])