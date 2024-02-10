// react
import { useState } from "react";
import PropTypes from "prop-types";

const TextareaField = ({
  label = "Default Label",
  name,
  modifyClasses = "",
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={`${modifyClasses}`}>
      {/* label */}
      <label
        className={`block mb-1 ${
          focused ? "text-textPrimary font-semibold" : "text-gray-400"
        }`}>
        {label}
      </label>

      {/* input area */}
      <textarea
        onChange={e => setValue(e.target.value)}
        className="block w-full border-b border-gray-500 py-1 pr-4 focus:outline-none"
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
  label: PropTypes.string,
  name: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default TextareaField;
