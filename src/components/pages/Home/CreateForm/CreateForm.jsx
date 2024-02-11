import PropTypes from "prop-types";

// component
import InputField from "./../../../shared/InputField/InputField";
import SelectField from "../../../shared/SelectField/SelectField";
import ButtonBtn from "./../../../shared/ButtonBtn/ButtonBtn";
import TextareaField from "../../../shared/TextareaField/TextareaField";
import CloseBtn from "../../../shared/CloseBtn/CloseBtn";

// hooks
import useForms from "../../../../hooks/useForms";
import useModifyTasksData from "../../../../hooks/useModifyTasksData";

// redux
import { useSelector } from "react-redux";

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

const CreateForm = ({ theme = "light", modifyClasses = "" }) => {
  const { createFormOpen } = useSelector(store => store.forms);
  const { tasks } = useSelector(store => store.tasks);
  const { closeCreateForm } = useForms();
  const { addTask, collectData } = useModifyTasksData();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newTodo = collectData(tasks, form);
    addTask(tasks, newTodo);
    form.reset();
    closeCreateForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-customXsm fixed w-[85%] xsm:w-[25rem] md:w-[30rem] lg:w-[35rem] shadow-large z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-defaultLg ${
        createFormOpen ? "block" : "hidden"
      } ${theme === "light" ? "bg-white" : "bg-darkThemeBg"} ${modifyClasses}`}>
      {/* close btn */}
      <CloseBtn
        clickHandler={closeCreateForm}
        theme={theme}
        modifyClasses="my-0 mb-2 text-2xl"
      />

      {/* form heading */}
      <h2
        className={`font-bold text-2xl mb-5 sm:mb-custom2xsm transition-all duration-default ${
          theme === "light" ? "text-textPrimary" : "text-white"
        }`}>
        Add a Todo
      </h2>

      <div className="space-y-6 xl:space-y-8 mb-8 sm:mb-customXsm">
        {/* title */}
        <InputField theme={theme} placeholder="Title" name="title" />

        {/* description */}
        <TextareaField theme={theme} label="Description" name="description" />

        {/* deadline */}
        <InputField
          theme={theme}
          placeholder="Deadline (DD-MMM-YYYY)"
          name="deadline"
          maxLength={11}
        />

        {/* priority */}
        <SelectField
          theme={theme}
          name="priority"
          label="Priority"
          options={priorityOptions}
        />
      </div>

      {/* submit button */}
      <ButtonBtn text="Add Todo" modifyClasses="!w-full" />
    </form>
  );
};

CreateForm.propTypes = {
  theme: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default CreateForm;
