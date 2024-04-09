import { useRoutes } from "react-router-dom";
import Booking from "./layout/Booking/Booking";

function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <Booking />,
    },
  ]);
  return route;
}

export default App;
