export default store => {
  store.on("@init", () => ({
    x: 0.0,
    y: 0.0,
    z: 0.0
  }))

  store.on("positions/updateX", (event, position) => {
    return { x: position }
  })

  store.on("positions/updateY", (event, position) => {
    return { y: position }
  })

  store.on("positions/updateZ", (event, position) => {
    return { z: position }
  })
}
