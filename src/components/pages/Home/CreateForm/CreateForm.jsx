import PropTypes from "prop-types";

// component
import InputField from "./../../../shared/InputField/InputField";
import SelectField from "../../../shared/SelectField/SelectField";
import ButtonBtn from "./../../../shared/ButtonBtn/ButtonBtn";

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
  return (
    <form
      className={`p-customXsm fixed w-[85%] xsm:w-[25rem] md:w-[30rem] lg:w-[35rem] bg-white shadow-large top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-defaultLg ${modifyClasses}`}>
      <h2 className="font-bold text-2xl mb-4 sm:mb-custom2xsm">Add a Todo</h2>

      <div className="space-y-6 mb-8 sm:mb-customXsm">
        <InputField placeholder="Title" name="title" />
        <InputField placeholder="Description" name="description" />
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
