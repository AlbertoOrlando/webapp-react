import HomePage from "./pages/homePage"
import MoviesPage from "./pages/moviesPage"
import ReviewPage from "./pages/ReviewPage"
import NotFoundPage from "./pages/NotFoundPage"
import "@fontsource/montserrat"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<ReviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
