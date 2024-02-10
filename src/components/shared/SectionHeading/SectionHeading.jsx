// react
import PropTypes from "prop-types";

const SectionHeading = ({ text, theme = "light", modifyClasses = "" }) => {
  return (
    <h2
      className={`font-medium text-2xl 2xl:text-3xl mb-elementGapSm capitalize ${
        theme === "light" ? "text-textPrimary" : "text-white"
      } ${modifyClasses}`}>
      {text}
    </h2>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.node,
  theme: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default SectionHeading;
