// component
import NoData from "../../../shared/NoData/NoData";
import Task from "./Task/Task";
import CreateBtn from "./../../../shared/CreateBtn/CreateBtn";

// hooks
import useForms from "../../../../hooks/useForms";

// redux
import { useSelector } from "react-redux";

const TasksContainer = () => {
  const { tasks, filter: filterState } = useSelector(store => store.tasks);
  const { theme } = useSelector(store => store.websiteTheme);
  const { openCreateForm } = useForms();
  const tasksToDisplay =
    filterState === 0
      ? tasks
      : tasks.filter(task => parseInt(task.priorityLevel) === filterState);

  return (
    <div className="grid grid-cols-1 2md:grid-cols-[1.5fr_1fr] xl:grid-cols-2 gap-customXsm 2md:gap-0">
      <div className="space-y-6 order-2 2md:order-1">
        {/* if there is no data then show no data component */}
        {tasksToDisplay?.length < 1 && (
          <NoData theme={theme} text="No todos to show" />
        )}

        {/* if there is data show data */}
        {tasksToDisplay?.length > 0 &&
          tasksToDisplay.map(task => {
            return <Task key={task.id} theme={theme} taskData={task} />;
          })}
      </div>

      <div className="2md:justify-self-end order-1 2md:order-2">
        <CreateBtn
          clickHandler={openCreateForm}
          text="Add New todo"
          modifyClasses="mx-auto 2md:mx-0"
        />
      </div>
    </div>
  );
};

export default TasksContainer;
