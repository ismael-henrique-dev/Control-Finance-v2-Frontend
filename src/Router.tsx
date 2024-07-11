import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Home } from "./pages/Home"

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path={} element={} /> */}

      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
      </Route>
    </Routes>
  )
}
