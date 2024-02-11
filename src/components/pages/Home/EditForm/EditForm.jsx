// react
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// component
import InputField from "./../../../shared/InputField/InputField";
import SelectField from "../../../shared/SelectField/SelectField";
import ButtonBtn from "./../../../shared/ButtonBtn/ButtonBtn";
import TextareaField from "../../../shared/TextareaField/TextareaField";
import CloseBtn from "../../../shared/CloseBtn/CloseBtn";

// hooks
import useForms from "../../../../hooks/useForms";
import useGetTimeData from "./../../../../hooks/useGetTimeData";
import useModifyTasksData from "../../../../hooks/useModifyTasksData";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setEditTaskId } from "../../../../features/tasks/tasksSlice";

// select options for the form
const priorityOptions = [
  {
    id: 0,
    text: "Low",
    value: 1,
  },
  {
    id: 1,
    text: "Medium",
    value: 2,
  },
  {
    id: 2,
    text: "High",
    value: 3,
  },
];

const EditForm = ({ theme = "light", modifyClasses = "" }) => {
  const { editFormOpen } = useSelector(store => store.forms);
  const { closeEditForm } = useForms();
  const [taskToEdit, setTaskToEdit] = useState(null);
  const { getDateInDayMonthNameYearStr } = useGetTimeData();
  const { collectData, editTask } = useModifyTasksData();
  const dispatch = useDispatch();

  // get tasks and id of the task to edit
  const { tasks, editTaskId } = useSelector(store => store.tasks);

  // if we have the id of the task that should be edited, find and set the task
  useEffect(() => {
    if (editTaskId !== null) {
      const taskToEdit = tasks.find(
        task => parseInt(task.id) === parseInt(editTaskId)
      );
      setTaskToEdit(taskToEdit);
    }
  }, [editTaskId, tasks]);

  // find the deadline string in e.g 23-feb-2024 format
  const deadlineStr = getDateInDayMonthNameYearStr(
    new Date(taskToEdit?.deadline)
  );

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const editedTask = collectData(tasks, form, true, editTaskId);
    // nashi  uz Zaman
    editTask(tasks, editTaskId, editedTask);
    dispatch(setEditTaskId(null));
    closeEditForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-customXsm fixed w-[85%] xsm:w-[25rem] md:w-[30rem] lg:w-[35rem] shadow-large z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-defaultLg ${
        editFormOpen ? "block" : "hidden"
      } ${theme === "light" ? "bg-white" : "bg-darkThemeBg"} ${modifyClasses}`}>
      {/* nashi uz zaman developed this project */}
      {/* close btn */}
      <CloseBtn
        clickHandler={closeEditForm}
        theme={theme}
        modifyClasses="my-0 mb-2 text-2xl"
      />

      {/* form heading */}
      <h2
        className={`font-bold text-2xl mb-5 sm:mb-custom2xsm transition-all duration-default ${
          theme === "light" ? "text-textPrimary" : "text-white"
        }`}>
        Update Todo
      </h2>

      <div className="space-y-6 xl:space-y-8 mb-8 sm:mb-customXsm">
        {/* title */}
        <InputField
          defaultValueData={taskToEdit?.title}
          theme={theme}
          placeholder="Title"
          name="title"
        />

        {/* description */}
        <TextareaField
          defaultValueData={taskToEdit?.description}
          theme={theme}
          label="Description"
          name="description"
        />

        {/* deadline */}
        <InputField
          defaultValueData={deadlineStr}
          theme={theme}
          placeholder="Deadline (DD-MM-YY)"
          name="deadline"
        />

        {/* priority */}
        <SelectField
          defaultValueData={taskToEdit?.priorityLevel}
          theme={theme}
          name="priority"
          label="Priority"
          options={priorityOptions}
        />
      </div>

      {/* submit button */}
      <ButtonBtn text="Update Todo" modifyClasses="!w-full" />
    </form>
  );
};

EditForm.propTypes = {
  theme: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default EditForm;
