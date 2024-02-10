// react
import PropTypes from "prop-types";

// react icon
import { AiOutlineClose } from "react-icons/ai";

const CloseBtn = ({ clickHandler, modifyClasses = "" }) => {
  return (
    <button
      className={`ml-auto w-max block mb-10 text-3xl ${modifyClasses}`}
      onClick={e => {
        e.preventDefault();
        clickHandler();
      }}>
      <AiOutlineClose></AiOutlineClose>
    </button>
  );
};

CloseBtn.propTypes = {
  clickHandler: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default CloseBtn;
