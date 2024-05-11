import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AppRoot from "./layouts/app-root";
import ProjectsRoot from "./layouts/projects-root";
import Homepage from "./components/Homepage";
import ProjectsSection from "./components/ProjectsSection";
import ProjectSection from "./components/ProjectSection";
import About from "./components/About";

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppRoot />}>
        <Route element={<Homepage />}>
          <Route element={<ProjectsRoot />}>
            <Route path="/" element={<ProjectsSection />} />
            <Route path="project/:projectID" element={<ProjectSection />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
