import HomeLayout from "./pages/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/contact";
import ErrorPage from "./pages/ErrorPage";
import Service from "./pages/Service";
import Landing from "./pages/Landing";
import { loader as serviceLoader } from "./pages/Service";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "service/:service",
          element: <Service />,
          loader: serviceLoader,
        },
        {
          path: "about",
          element: <About />,
        },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
