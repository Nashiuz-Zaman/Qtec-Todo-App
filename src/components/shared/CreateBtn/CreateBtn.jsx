// react imports
import PropTypes from "prop-types";

// react icon
import { MdFormatListBulletedAdd } from "react-icons/md";

const CreateBtn = ({
  text,
  clickHandler = null,
  colorTheme = "",
  modifyClasses = "",
  theme = "light",
}) => {
  // common classes
  const outlinedClasses =
    "bg-transparent border border-gray-300 hover:border-white text-gray-300 hover:text-white";

  const oulinedPrimaryClasses = `bg-transparent border ${
    theme === "dark"
      ? "border-white text-white"
      : "border-primary text-primary "
  }  hover:text-primaryDark hover:border-primaryDark`;

  const primaryClasses = `border ${
    theme === "dark"
      ? "bg-primaryDarkTheme border-primaryDarkTheme"
      : "bg-primary border-primary"
  } hover:border-primaryDark hover:bg-primaryDark text-white`;

  const blackClasses =
    "bg-blackLight border border-blackLight hover:bg-textPrimary hover:border-textPrimary text-white";

  const allClasses = `flex items-center gap-2 capitalize w-max transition-all duration-default rounded-full px-6 py-2 2xl:py-4 2xl:px-8 3xl:text-xl 2xl:py-3 ${modifyClasses}`;

  return (
    <button
      onClick={clickHandler}
      // decide the design of button according to the props
      className={`${
        colorTheme === "outlined"
          ? outlinedClasses
          : colorTheme === "outlinedPrimary"
          ? oulinedPrimaryClasses
          : colorTheme === "black"
          ? blackClasses
          : primaryClasses
      } ${allClasses}`}>
      <MdFormatListBulletedAdd className="text-3xl" />
      <span>{text}</span>
    </button>
  );
};

CreateBtn.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  colorTheme: PropTypes.string,
  modifyClasses: PropTypes.string,
  theme: PropTypes.string,
};

export default CreateBtn;
