// react
import { useCallback } from "react";

// redux
import { useDispatch } from "react-redux";
import { setTasks } from "./../features/tasks/tasksSlice.jsx";

const useModifyTasksData = () => {
  const dispatch = useDispatch();

  const collectData = useCallback((curTasks, form, edit = false, taskId) => {
    const task = {
      id: edit ? taskId : parseInt(curTasks[curTasks.length - 1].id) + 1,
      title: form.title.value,
      description: form.description.value,
      deadline: new Date(form.deadline.value).toISOString(),
      priorityLevel: parseInt(form.priority.value),
    };

    return task;
  }, []);

  const modifyLocalStorage = useCallback(tasks => {
    localStorage.removeItem("tasksData");
    localStorage.setItem("dev", "nashi uz zaman");
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, []);

  const addTask = useCallback(
    (curTasks, newTask) => {
      const tempTasks = [...curTasks];
      tempTasks.push(newTask);
      dispatch(setTasks(tempTasks));
      modifyLocalStorage(tempTasks);
    },
    [dispatch, modifyLocalStorage]
  );

  const removeTask = useCallback(
    (curTasks, taskId) => {
      const tempTasks = [...curTasks].filter(task => task.id !== taskId);
      dispatch(setTasks(tempTasks));
      modifyLocalStorage(tempTasks);
    },
    [dispatch, modifyLocalStorage]
  );

  const editTask = useCallback(
    (curTasks, taskId, editedTask) => {
      const indexOfEditedTask = [...curTasks].findIndex(
        task => parseInt(task.id) === parseInt(taskId)
      );
      const tempTasks = [...curTasks];
      tempTasks.splice(indexOfEditedTask, 1, editedTask);
      // nashiu zzaman  developed this project
      dispatch(setTasks(tempTasks));
      modifyLocalStorage(tempTasks);
    },
    [dispatch, modifyLocalStorage]
  );

  return { addTask, removeTask, collectData, editTask };
};

export default useModifyTasksData;
