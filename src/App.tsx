import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootPage from "./component/page/Root";
import HomePage from "./component/page/Home";
import MoviePage from "./component/page/Movie";
import ErrorPage from "./component/page/Error";
import StarPage from "./component/page/StarsBorn";
import StarMoviesPage from "./component/page/StarsMovies";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:name", element: <MoviePage /> },
      { path: "/movie/starMovie/:name", element: <StarMoviesPage /> },
      // {
      //   path:"/",
      //   element:<MoviePage/>,
      //   children:[
      //       { path: "movie/:name", element: <MoviePage /> },
      //       { path: "movie/starMovie/:name", element: <StarMoviesPage /> },
      //   ]
      // },
      { path: "/star/:name", element: <StarPage /> },
    ],
    errorElement:<ErrorPage/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
