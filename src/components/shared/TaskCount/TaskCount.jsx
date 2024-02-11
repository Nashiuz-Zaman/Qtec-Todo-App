import PropTypes from "prop-types";

// redux
import { useSelector } from "react-redux";

const TaskCount = ({ theme = "", modifyclasses = "" }) => {
  const { tasks } = useSelector(store => store.tasks);
  const totalTasksCount = tasks?.length;
  const completedTasksCount = tasks?.filter(task => task.completed).length;

  // common classes
  const textClasses = "font-medium text-lg";

  return (
    <div
      className={`${
        theme === "light" ? "text-textPrimary" : "text-white"
      } space-y-2 text-center sm:text-left ${modifyclasses}`}>
      <p className={textClasses}>
        <span className="font-semibold">Total Tasks: </span> {totalTasksCount}
      </p>

      <p className={textClasses}>
        <span className="font-semibold">Completed Tasks: </span>
        {completedTasksCount}
      </p>
    </div>
  );
};

TaskCount.propTypes = {
  theme: PropTypes.string,
  modifyclasses: PropTypes.string,
};

export default TaskCount;
