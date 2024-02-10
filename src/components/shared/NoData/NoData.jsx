// react
import PropTypes from "prop-types";

const NoData = ({ text = "No Data To Show", modifyClasses = "" }) => {
  return (
    <div className={`flex justify-center items-center ${modifyClasses}`}>
      <div>
        <p className="text-2xl">{text}</p>
      </div>
    </div>
  );
};

NoData.propTypes = {
  text: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default NoData;
