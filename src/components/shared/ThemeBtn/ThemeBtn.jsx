// react imports
import PropTypes from "prop-types";

// react icon
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

// redux
import { useSelector } from "react-redux";

const ButtonBtn = ({
  onClickFunction = null,
  colorTheme = "",
  modifyClasses = "",
  disabled = false,
}) => {
  const { theme } = useSelector(store => store.websiteTheme);

  // common classes
  const outlinedClasses = `bg-transparent border border-gray-300 hover:border-white text-gray-300 hover:text-white`;

  const oulinedPrimaryClasses = `bg-transparent border ${
    theme === "dark"
      ? "border-primaryDark text-primaryDark hover:text-primary hover:border-primary"
      : "border-primary text-primary hover:text-primaryDark hover:border-primaryDark"
  } disabled:border-primary disabled:text-primary`;

  const primaryClasses = `border text-white ${
    theme === "dark"
      ? "bg-primaryDark border-primaryDark hover:bg-primary hover:border-primary"
      : "bg-primary border-primary hover:bg-primaryDark hover:border-primaryDark"
  } disabled:bg-primary disabled:border-primary`;

  const blackClasses =
    "bg-blackLight border border-blackLight hover:bg-textPrimary hover:border-textPrimary text-white disabled:bg-blackLight";

  const dangerClasses =
    "bg-red-700 border border-red-700 hover:bg-red-500 hover:border-red-500 text-white disabled:bg-red-700 disabled:border-red-700";

  const allClasses = `flex items-center gap-2 min-w-[8rem] w-max capitalize transition-all duration-default rounded-defaultLg text-center px-6 py-2 3xl:text-xl 2xl:py-3 active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed ${modifyClasses}`;

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
      onClick={onClickFunction}
      // decide the design of button according to the props
      className={`${
        colorTheme === "outlined"
          ? outlinedClasses
          : colorTheme === "outlinedPrimary"
          ? oulinedPrimaryClasses
          : colorTheme === "black"
          ? blackClasses
          : colorTheme === "danger"
          ? dangerClasses
          : primaryClasses
      } ${allClasses}`}>
      {btnContent}
    </button>
  );
};

ButtonBtn.propTypes = {
  onClickFunction: PropTypes.func,
  colorTheme: PropTypes.string,
  modifyClasses: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ButtonBtn;
