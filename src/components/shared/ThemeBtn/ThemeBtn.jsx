// react imports
import PropTypes from "prop-types";

// react icon
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./../../../redux/features/websiteTheme/websiteThemeSlice";

const ThemeBtn = ({ modifyClasses = "", disabled = false }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(store => store.websiteTheme);

  const changeTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  //  classes
  const colorClasses =
    theme === "light"
      ? "bg-primary border border-primary hover:bg-primaryLight hover:border-primaryLight"
      : "bg-none border border-white";

  const allClasses = `flex items-center gap-2 min-w-[8rem] w-max capitalize transition-all duration-default rounded-full text-white text-center px-6 py-2 2xl:py-4 2xl:px-8 active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed justify-center ${modifyClasses}`;

  const btnContent =
    theme === "light" ? (
      <>
        <span>Dark</span>
        <MdDarkMode />
      </>
    ) : (
      <>
        <span>Light</span>
        <MdOutlineLightMode />
      </>
    );

  return (
    <button
      style={{ backfaceVisibility: "hidden" }}
      disabled={disabled}
      onClick={changeTheme}
      // decide the design of button according to the props
      className={`${colorClasses} ${allClasses}`}>
      {btnContent}
    </button>
  );
};

ThemeBtn.propTypes = {
  modifyClasses: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ThemeBtn;
