// component
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import TasksContainer from "./TasksContainer/TasksContainer";
import CreateForm from "./CreateForm/CreateForm";

// redux
import { useSelector } from "react-redux";
import EditForm from "./EditForm/EditForm";
import SelectField from "../../shared/SelectField/SelectField";

const filterOptions = [
  {
    id: 0,
    text: "All",
    value: 0,
  },
  {
    id: 1,
    text: "Low",
    value: 1,
  },
  {
    id: 2,
    text: "Medium",
    value: 2,
  },
  {
    id: 3,
    text: "High",
    value: 3,
  },
];

const Home = () => {
  const { theme } = useSelector(store => store.websiteTheme);
  return (
    <div className="py-customMd">
      <InnerContainer>
        <section>
          {/* heading and filter */}
          <div className="mb-customXsm 2md:mb-customSm flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-0 2md:w-[60%] xl:w-1/2">
            <SectionHeading
              theme={theme}
              text="Your Tasks"
              modifyClasses="!text-xl"
            />

            <SelectField
              label="Show Tasks"
              options={filterOptions}
              fullborder={true}
            />
          </div>

          {/* tasks */}
          <TasksContainer />
        </section>

        {/* forms */}
        <section>
          <CreateForm theme={theme} />
          <EditForm theme={theme} />
        </section>
      </InnerContainer>
    </div>
  );
};

export default Home;
