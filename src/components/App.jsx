// react
import { useEffect } from "react";

// react router import
import { RouterProvider } from "react-router-dom";

// router
import router from "./../router/router";

// component
import BackdropBlur from "./shared/BackdropBlur/BackdropBlur";

// react toastify component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../features/application/applicationSlice";
import { setTasks, setFilter } from "../features/tasks/tasksSlice";
import { setTheme } from "../features/websiteTheme/websiteThemeSlice";

// tasks dummy data
import { initialTasks } from "./../data/tasksData";

const App = () => {
  // extract dispatch method
  const dispatch = useDispatch();

  // extract loading state
  const { isLoading } = useSelector(store => store.application);

  // extract theme
  const { theme } = useSelector(store => store.websiteTheme);

  // backdrop open state
  const { open } = useSelector(store => store.backdrop);

  // set initial tasks data at the start
  useEffect(() => {
    if (!localStorage.getItem("tasksData")) {
      dispatch(setTasks(initialTasks));
      localStorage.setItem("tasksData", JSON.stringify(initialTasks));
    } else {
      const tasks = JSON.parse(localStorage.getItem("tasksData"));
      dispatch(setTasks(tasks));
    }
  }, [dispatch]);

  // set initial filter at the start
  useEffect(() => {
    if (!localStorage.getItem("filter")) {
      localStorage.setItem("filter", 0);
    } else {
      const filter = parseInt(localStorage.getItem("filter"));
      localStorage.setItem("dev", "nashi uz zaman");
      dispatch(setFilter(filter));
    }
  }, [dispatch]);

  // set initial theme at the start
  useEffect(() => {
    if (!localStorage.getItem("websiteTheme")) {
      localStorage.setItem("websiteTheme", "light");
      dispatch(setIsLoading(false));
    } else {
      const theme = localStorage.getItem("websiteTheme");
      dispatch(setTheme(theme));
      dispatch(setIsLoading(false));
    }
  }, [dispatch]);

  if (!isLoading) {
    return (
      <div
        className={`text-textPrimary font-default min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden ${
          theme === "light" ? "bg-white" : "bg-darkThemeBg"
        } transition-all duration-default`}>
        {/* react toastify */}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          transition={Slide}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* backdrop blur */}
        <BackdropBlur openState={open} />

        <RouterProvider router={router}></RouterProvider>
      </div>
    );
  }
};

export default App;
