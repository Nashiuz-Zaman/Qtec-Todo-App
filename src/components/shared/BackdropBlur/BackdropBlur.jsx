import PropTypes from "prop-types";

const BackdropBlur = ({
  openState = false,
  clickHandler = null,
  modifyClasses = "",
}) => {
  return (
    <div
      onClick={clickHandler}
      className={`fixed w-screen top-0 left-0 h-screen z-20 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm ${
        openState ? "block" : "hidden"
      } ${modifyClasses}`}></div>
  );
};

BackdropBlur.propTypes = {
  openState: PropTypes.bool,
  modifyClasses: PropTypes.string,
  clickHandler: PropTypes.any,
};

export default BackdropBlur;
