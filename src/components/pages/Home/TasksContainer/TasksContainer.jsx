// redux
import { useSelector } from "react-redux";

const TasksContainer = () => {
  const { tasksData } = useSelector(store => store.tasks);
  console.log(tasksData);

  return <div></div>;
};

export default TasksContainer;
