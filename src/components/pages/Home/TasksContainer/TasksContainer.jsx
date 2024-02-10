// component
import NoData from "../../../shared/NoData/NoData";
import Task from "./Task/Task";

// redux
import { useSelector } from "react-redux";
import CreateBtn from "./../../../shared/CreateBtn/CreateBtn";

const TasksContainer = () => {
  const { tasks } = useSelector(store => store.tasks);
  const { theme } = useSelector(store => store.websiteTheme);
  console.log(tasks);

  return (
    <div className="grid grid-cols-1 2md:grid-cols-[1.5fr_1fr] xl:grid-cols-2">
      <div className="space-y-6">
        {/* if there is no data then show no data component */}
        {tasks?.length < 1 && <NoData text="No todos to show" />}

        {/* if there is data show data */}
        {tasks?.length > 0 &&
          tasks.map(task => {
            return <Task key={task.id} theme={theme} taskData={task} />;
          })}
      </div>

      <div>
        <CreateBtn />
      </div>
    </div>
  );
};

export default TasksContainer;
