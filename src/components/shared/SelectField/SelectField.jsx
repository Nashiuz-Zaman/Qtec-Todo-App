// react
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const SelectField = ({
  theme = "light",
  label = "Default Label",
  name = "",
  options,
  defaultValueData,
  fullborder = false,
  additionalChangeHandler,
  modifyClasses = "",
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (defaultValueData !== undefined) {
      setValue(defaultValueData.toString());
    }
  }, [defaultValueData]);

  const handleSelect = e => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div
      className={`grid grid-cols-[max-content_1fr] gap-5 items-center ${modifyClasses}`}>
      {/* label */}
      <label
        className={`block ${
          theme === "light" ? "text-textPrimary" : "text-white"
        } font-semibold`}>
        {label}:
      </label>

      {/* select options */}
      <select
        required
        onChange={e => {
          handleSelect(e);
          additionalChangeHandler && additionalChangeHandler(e);
        }}
        value={value}
        name={name}
        className={`${
          fullborder ? "border rounded-default" : "border-b"
        } border-gray-500 py-2 px-2 bg-transparent ${
          theme === "light" ? "text-textPrimary" : "text-gray-500"
        }`}>
        {options?.map(option => {
          return (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  defaultValueData: PropTypes.any,
  fullborder: PropTypes.bool,
  additionalChangeHandler: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default SelectField;
