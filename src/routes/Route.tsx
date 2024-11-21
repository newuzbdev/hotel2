import Home from "@/page/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

    ],
  },
]);

export default router;
