// component
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import TasksContainer from "./TasksContainer/TasksContainer";
import CreateForm from "./CreateForm/CreateForm";
import EditForm from "./EditForm/EditForm";
import SelectField from "../../shared/SelectField/SelectField";
import TaskCount from "../../shared/TaskCount/TaskCount";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../features/tasks/tasksSlice";

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
  const { filter } = useSelector(store => store.tasks);
  const dispatch = useDispatch();

  return (
    <div className="py-customMd">
      <InnerContainer>
        <section>
          {/* heading and filter */}
          <div className="mb-customXsm 2md:mb-customSm flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-0 2md:w-[60%] xl:w-1/2">
            <SectionHeading
              theme={theme}
              text="Your Tasks"
              modifyClasses="text-xl xl:text-3xl"
            />

            <SelectField
              label="Show Tasks"
              options={filterOptions}
              theme={theme}
              fullborder={true}
              defaultValueData={filter}
              additionalChangeHandler={e => {
                dispatch(setFilter(parseInt(e.target.value)));
                localStorage.removeItem("filter");
                localStorage.setItem("filter", parseInt(e.target.value));
              }}
            />
          </div>

          {/* count */}
          <TaskCount
            theme={theme}
            modifyclasses="mb-customXsm 2md:mb-customSm"
          />

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
