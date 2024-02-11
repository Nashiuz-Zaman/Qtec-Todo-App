// react
import { useCallback } from "react";

// redux
import { useDispatch } from "react-redux";
import { setTasks } from "./../features/tasks/tasksSlice.jsx";

const useModifyTasksData = () => {
  const dispatch = useDispatch();

  // function for collecting data from form
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

  // function for saving new tasks state to localstorage to persist data
  const modifyLocalStorage = useCallback(tasks => {
    localStorage.removeItem("tasksData");
    localStorage.setItem("dev", "nashi uz zaman");
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, []);

  // add
  const addTask = useCallback(
    (curTasks, newTask) => {
      const tempTasks = [...curTasks];
      tempTasks.push(newTask);

      // update main tasks state and save to localstorage
      dispatch(setTasks(tempTasks));
      modifyLocalStorage(tempTasks);
    },
    [dispatch, modifyLocalStorage]
  );

  // remove
  const removeTask = useCallback(
    (curTasks, taskId) => {
      const tempTasks = [...curTasks].filter(task => task.id !== taskId);

      // update main tasks state and save to localstorage
      dispatch(setTasks(tempTasks));
      modifyLocalStorage(tempTasks);
    },
    [dispatch, modifyLocalStorage]
  );

  // edit
  const editTask = useCallback(
    (curTasks, taskId, editedTask) => {
      // find the index in the arr
      const indexOfTaskToEdit = [...curTasks].findIndex(
        task => parseInt(task.id) === parseInt(taskId)
      );

      // replace prev data with new data
      const tempTasks = [...curTasks];
      tempTasks.splice(indexOfTaskToEdit, 1, editedTask);
      // nashiu zzaman  developed this project
      // update main tasks state and save to localstorage
      dispatch(setTasks(tempTasks));
      modifyLocalStorage(tempTasks);
    },
    [dispatch, modifyLocalStorage]
  );

  // mark as complete/incomplete
  const markTask = useCallback(
    (curTasks, taskId, completedStatus) => {
      // find the index in the arr
      const indexOfTaskToMark = [...curTasks].findIndex(
        task => parseInt(task.id) === parseInt(taskId)
      );

      // get the task obj to update
      const taskToMark = curTasks[indexOfTaskToMark];
      const editedTask = { ...taskToMark };

      // update task obj
      editedTask.completed = completedStatus ? true : false;

      // replace prev data with new data
      const tempTasks = [...curTasks];
      tempTasks.splice(indexOfTaskToMark, 1, editedTask);

      // update main tasks state and save to localstorage
      dispatch(setTasks(tempTasks));
      modifyLocalStorage(tempTasks);
    },
    [dispatch, modifyLocalStorage]
  );

  return { addTask, removeTask, collectData, editTask, markTask };
};

export default useModifyTasksData;
