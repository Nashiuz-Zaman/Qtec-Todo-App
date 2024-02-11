// react
import PropTypes from "prop-types";

const NoData = ({
  theme = "light",
  text = "No Data To Show",
  modifyClasses = "",
}) => {
  return (
    <div className={`flex justify-center items-center ${modifyClasses}`}>
      <p
        className={`text-2xl ${
          theme === "light" ? "text-textPrimary" : "text-white"
        }`}>
        {text}
      </p>
    </div>
  );
};

NoData.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default NoData;
