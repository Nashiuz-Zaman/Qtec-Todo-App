// react router import
import { RouterProvider } from "react-router-dom";

// router
import router from "./../router/router";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// redux
import { useSelector } from "react-redux";

const App = () => {
  const { theme } = useSelector(store => store.websiteTheme);

  return (
    <div
      className={`text-textPrimary font-default min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden ${
        theme === "light" ? "bg-white" : "bg-darkThemeBg"
      }`}>
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
