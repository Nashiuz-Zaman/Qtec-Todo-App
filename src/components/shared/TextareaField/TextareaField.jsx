// react
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TextareaField = ({
  theme = "light",
  label = "Default Label",
  name,
  defaultValueData,
  reset = false,
  modifyClasses = "",
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
    <div className={`${modifyClasses}`}>
      {/* label */}
      <label
        className={`block mb-1 transition-all duration-default ${
          focused
            ? `font-medium ${
                theme === "light" ? "text-textPrimary" : "text-white"
              }`
            : "text-gray-400"
        }`}>
        {label}
      </label>

      {/* input area */}
      <textarea
        required
        className={`block h-10 w-full border-b border-gray-500 bg-transparent py-1 pr-4 focus:outline-none ${
          theme === "light" ? "text-textPrimary" : "text-white"
        }`}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(value.length ? true : false);
        }}
        name={name}
        value={value}></textarea>
    </div>
  );
};

TextareaField.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  defaultValueData: PropTypes.string,
  reset: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default TextareaField;
