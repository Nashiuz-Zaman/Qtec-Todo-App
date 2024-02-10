// react
import PropTypes from "prop-types";
import { useState } from "react";

const InputField = ({
  type = "text",
  placeholder = "Default placeholder",
  name = "",
  modifyClasses = "",
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div
      className={`border-b relative transition-all duration-[30ms] border-gray-400 text- ${modifyClasses}`}
    >
      {/* place holder */}
      <p
        className={`absolute transition-all duration-[inherit] ${
          focused
            ? "text-xs -translate-y-1 text-textPrimary font-semibold"
            : "text-gray-400 translate-y-3"
        }`}
      >
        {placeholder}
      </p>

      {/* input field */}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(value.length ? true : false);
        }}
        className={`block text-sm bg-transparent pt-4 pb-2 pr-4 text-textMediumLight focus:outline-none relative z-20`}
        type={type}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default InputField;
