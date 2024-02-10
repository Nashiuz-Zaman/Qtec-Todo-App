// react
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import {
  IoTrashSharp,
  IoChevronDownOutline,
  IoCheckmarkSharp,
} from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";

// component
import Accordion from "./Accordion/Accordion";

// hook
import useGetTimeData from "./../../../../../hooks/useGetTimeData";

const Task = ({ theme = "light", taskData }) => {
  const { getSpecificDate } = useGetTimeData();

  //  accordion state
  const [expanded, setExpanded] = useState(false);

  // extract task data
  const { id, title, description, deadline, completed, priorityLevel } =
    taskData;

  // get the date details
  const { dayOfTheMonth, year, monthName } = getSpecificDate(
    new Date(deadline)
  );

  // priority data info
  const priorities = [
    {
      text: "Low",
      color: "bg-green-500",
    },
    {
      text: "Medium",
      color: "bg-orange-500",
    },
    {
      text: "High",
      color: "bg-red-500",
    },
  ];

  // create the deadline date string
  const deadlineStr = `${dayOfTheMonth}-${monthName}-${year}`;

  // set priority color and text
  const priorityColor = priorities[priorityLevel - 1]?.color;
  const priorityText = priorities[priorityLevel - 1]?.text;

  // css classes
  const titleClasses = `font-semibold text-base 2xl:text-xl 2xl:font-bold transition-all duration-default ${
    theme === "dark" ? "text-white" : ""
  }`;

  const infoHeadingClasses = `font-semibold text-sm 2xl:text-lg 2xl:font-bold transition-all duration-default ${
    theme === "dark" ? "text-white" : ""
  }`;

  const infoTextClasses = `font-medium text-sm 2xl:text-lg transition-all duration-default ${
    theme === "dark" ? "text-white" : ""
  }`;

  const iconBtnClasses =
    "aspect-square rounded-full flex items-center justify-center";

  const iconClasses = "m-2 text-white text-base";

  const priorityClasses = `w-max mx-auto sm:mx-0 py-1 px-4 mt-3 text-xs md:py-[6px] md:text-sm text-white rounded-full ${priorityColor}`;

  return (
    <div
      className={`border rounded-xl shadow-small py-5 px-6 flex flex-col ${
        theme === "light"
          ? "bg-white border-lightBorder"
          : "bg-[#ffffff00] border-white"
      }`}>
      {/* task title, priority and btns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-6 sm:mb-4">
        <div className="mb-5 sm:mb-0 text-center sm:text-left">
          {/* task title */}
          <h3 className={titleClasses}>{title}</h3>

          {/* priority high/medium/low */}
          <div
            className={priorityClasses}
            title={`${priorityText} priority task`}>
            {priorityText}
          </div>
        </div>

        <div className="justify-self-center sm:justify-self-end flex flex-col space-y-2 sm:space-y-3">
          <p>
            <span className={infoHeadingClasses}>Status: </span>
            <span className={infoTextClasses}>
              {completed ? "Completed" : "Incomplete"}
            </span>
          </p>

          {/* buttons */}
          <div className="flex items-center gap-3 lg:gap-2 sm:ml-auto">
            {completed ? (
              <>
                {/* not completed button */}
                <button
                  title="Mark as Incomplete"
                  aria-label="Button for marking task as incompleted"
                  className={`bg-yellow-400 ${iconBtnClasses}`}>
                  <FaExclamation className={iconClasses} />
                </button>
              </>
            ) : (
              <>
                {/* complete button */}
                <button
                  title="Mark as Completed"
                  aria-label="Button for marking task as completed"
                  className={`bg-green-600 ${iconBtnClasses}`}>
                  <IoCheckmarkSharp className={iconClasses} />
                </button>
              </>
            )}

            {/* edit button */}
            <button
              title="Edit Task"
              aria-label="Button for editing task"
              className={`bg-blue-500 ${iconBtnClasses}`}>
              <MdEdit className={iconClasses} />
            </button>

            {/* delete button */}
            <button
              title="Delete Task"
              aria-label="Button for deleting task"
              className={`bg-red-600 ${iconBtnClasses}`}>
              <IoTrashSharp className={iconClasses} />
            </button>
          </div>
        </div>
      </div>

      {/* expand Button */}
      <button
        onClick={() => {
          setExpanded(prev => !prev);
        }}
        className={`block w-full cursor-pointer ${
          theme === "light" ? "text-textPrimary" : "text-white"
        }`}>
        <IoChevronDownOutline
          className={`text-lg w-max mx-auto transition-all duration-default ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <Accordion expanded={expanded}>
        {/* description */}
        <div className="my-2" title={description}>
          <h4 className={infoHeadingClasses}>Description:</h4>
          <p className={infoTextClasses}>{description}</p>
        </div>

        {/* deadline */}
        <div className="mt-auto">
          <h4 className={infoHeadingClasses}>Deadline:</h4>
          <p className={infoTextClasses}>{deadlineStr}</p>
        </div>
      </Accordion>
    </div>
  );
};

Task.propTypes = {
  theme: PropTypes.string,
  taskData: PropTypes.object,
};

export default Task;
