import PropTypes from "prop-types";

// component
import InputField from "./../../../shared/InputField/InputField";
import SelectField from "../../../shared/SelectField/SelectField";
import ButtonBtn from "./../../../shared/ButtonBtn/ButtonBtn";
import TextareaField from "../../../shared/TextareaField/TextareaField";
import CloseBtn from "../../../shared/CloseBtn/CloseBtn";

// hooks
import useForms from "../../../../hooks/useForms";

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

const CreateForm = ({ modifyClasses = "" }) => {
  const { createFormOpen } = useSelector(store => store.forms);
  const { closeCreateForm } = useForms();

  return (
    <form
      className={`p-customXsm fixed w-[85%] xsm:w-[25rem] md:w-[30rem] lg:w-[35rem] bg-white shadow-large z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-defaultLg transition-all duration-default ${
        createFormOpen ? "opacity-100 visible" : "opacity-0 collapse"
      } ${modifyClasses}`}>
      {/* close btn */}
      <CloseBtn
        clickHandler={closeCreateForm}
        modifyClasses="my-0 mb-2 text-2xl"
      />

      {/* form heading */}
      <h2 className="font-bold text-2xl mb-5 sm:mb-custom2xsm">Add a Todo</h2>

      <div className="space-y-6 mb-8 sm:mb-customXsm">
        <InputField placeholder="Title" name="title" />
        {/* description */}
        <TextareaField label="Description" name="description" />

        <InputField placeholder="Deadline (DD-MM-YY)" name="deadline" />
        <SelectField label="Priority" options={priorityOptions} />
      </div>

      <ButtonBtn text="Add Todo" modifyClasses="!w-full" />
    </form>
  );
};

CreateForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default CreateForm;
