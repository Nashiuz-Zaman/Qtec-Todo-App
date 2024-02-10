// component
import NoData from "../../../shared/NoData/NoData";
import Task from "./Task/Task";

// redux
import { useSelector } from "react-redux";

const TasksContainer = () => {
  const { tasks } = useSelector(store => store.tasks);
  console.log(tasks);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="space-y-4">
        {/* if there is no data then show no data component */}
        {tasks?.length < 1 && <NoData text="No todos to show" />}

        {/* if there is data show data */}
        {tasks?.length > 0 &&
          tasks.map(task => {
            return <Task key={task.id} taskData={task} />;
          })}
      </div>
    </div>
  );
};

export default TasksContainer;
