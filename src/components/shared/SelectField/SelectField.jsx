// react
import PropTypes from "prop-types";
import { useState } from "react";

const SelectField = ({
  label = "Default Label",
  name = "",
  options,
  modifyClasses = "",
}) => {
  const [value, setValue] = useState("1");

  const handleSelect = e => {
    setValue(parseInt(e.target.value));
  };

  console.log(value);

  return (
    <div
      className={`grid grid-cols-[max-content_1fr] gap-5 items-center ${modifyClasses}`}>
      <label className="block text-textPrimary font-semibold">{label}:</label>
      <select
        onChange={handleSelect}
        value={value}
        name={name}
        className="border-b border-gray-500 py-2 px-2">
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
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default SelectField;
