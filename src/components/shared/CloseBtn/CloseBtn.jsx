// react
import PropTypes from "prop-types";

// react icon
import { AiOutlineClose } from "react-icons/ai";

const CloseBtn = ({ theme = "light", clickHandler, modifyClasses = "" }) => {
  return (
    <button
      className={`ml-auto w-max block mb-10 text-3xl transition-all duration-default ${
        theme === "light" ? "text-textPrimary" : "text-white"
      } ${modifyClasses}`}
      onClick={e => {
        e.preventDefault();
        clickHandler();
      }}>
      <AiOutlineClose></AiOutlineClose>
    </button>
  );
};

CloseBtn.propTypes = {
  theme: PropTypes.string,
  clickHandler: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default CloseBtn;
