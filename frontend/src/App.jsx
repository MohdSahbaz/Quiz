import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import RoundOne from "./components/RoundOne";
import RoundTwo from "./components/RoundTwo";
import RoundThree from "./components/RoundThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rlopop1kopo",
    element: <RoundOne />,
  },
  {
    path: "/rlopki2op",
    element: <RoundTwo />,
  },
  {
    path: "/rsdjk3ko",
    element: <RoundThree />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
