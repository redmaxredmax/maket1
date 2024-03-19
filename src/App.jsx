import React from "react"
import appRouter from "./routes/app-router"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout/main-layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {appRouter.map(({component, id, path}) =>
            <Route key={id} index={path ? false : true} path={path} element={component} />
          )}
        </Route>
      </Routes>
    </>
  )
}

export default App
