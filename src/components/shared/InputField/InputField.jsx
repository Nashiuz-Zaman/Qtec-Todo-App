// react
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const InputField = ({
  theme = "light",
  type = "text",
  placeholder = "Default placeholder",
  name = "",
  defaultValueData,
  modifyClasses = "",
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (defaultValueData !== undefined && defaultValueData !== "") {
      setValue(defaultValueData);
      setFocused(true);
    }
  }, [defaultValueData]);

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
  defaultValueData: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default InputField;
