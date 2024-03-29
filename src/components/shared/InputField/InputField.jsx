// react
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const InputField = ({
  theme = "light",
  type = "text",
  placeholder = "Default placeholder",
  name = "",
  defaultValueData,
  maxLength = null,
  modifyClasses = "",
  reset = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  // if default value present show that
  useEffect(() => {
    if (defaultValueData !== undefined && defaultValueData !== "") {
      setValue(defaultValueData);
      setFocused(true);
    }
  }, [defaultValueData]);

  // if reset true then reset the value
  useEffect(() => {
    if (reset) {
      setValue("");
    }
  }, [reset]);

  return (
    <div
      className={`border-b relative transition-all duration-[30ms] border-gray-500 text- ${modifyClasses}`}>
      {/* placeholder */}
      <p
        className={`absolute transition-all duration-[inherit] ${
          focused
            ? `-translate-y-1 ${
                theme === "light" ? "text-textPrimary" : "text-white"
              } font-medium`
            : "text-gray-400 translate-y-3"
        }`}>
        {placeholder}
      </p>

      {/* input field */}
      <input
        required
        maxLength={maxLength}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(value.length ? true : false);
        }}
        className={`block w-full text-sm bg-transparent pt-4 pb-2 pr-4 ${
          theme === "light" ? "text-textMediumLight" : "text-white"
        } focus:outline-none relative z-20`}
        type={type}
        name={name}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

InputField.propTypes = {
  defaultValueData: PropTypes.any,
  theme: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  reset: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default InputField;
