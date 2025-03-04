import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import RoundOne from "./components/RoundOne";
import RoundTwo from "./components/RoundTwo";
import RoundThree from "./components/RoundThree";
import AdminHome from "./components/admin/Home";
import Rounds from "./components/admin/Rounds";
import RoundTwoAdmin from "./components/admin/roundtwo/RoundTwoAdmin";
import RoundOneAdmin from "./components/admin/roundone/RoundOneAdmin";
import RoundThreeAdmin from "./components/admin/roundthree/RoundThreeAdmin";

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
  {
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/rounds",
    element: <Rounds />,
  },
  {
    path: "/round-1",
    element: <RoundOneAdmin />,
  },
  {
    path: "/round-2",
    element: <RoundTwoAdmin />,
  },
  {
    path: "/round-3",
    element: <RoundThreeAdmin />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
