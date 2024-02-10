// react
import { useEffect } from "react";

// react router import
import { RouterProvider } from "react-router-dom";

// router
import router from "./../router/router";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../features/tasks/tasksSlice";

// tasks dummy data
import { initialTasks } from "./../data/tasksData";

const App = () => {
  // extract dispatch method
  const dispatch = useDispatch();

  // extract theme
  const { theme } = useSelector(store => store.websiteTheme);

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

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
