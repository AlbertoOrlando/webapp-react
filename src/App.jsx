import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import ReviewPage from "./pages/ReviewPage"
import NotFoundPage from "./pages/NotFoundPage"
import CreateMoviesPage from "./pages/CreateMoviesPage"
import "@fontsource/montserrat"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/create" element={<CreateMoviesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<ReviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
