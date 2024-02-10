// component
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import TasksContainer from "./TasksContainer/TasksContainer";
import CreateForm from "./CreateForm/CreateForm";

// redux
import { useSelector } from "react-redux";

const Home = () => {
  const { theme } = useSelector(store => store.websiteTheme);
  return (
    <div className="py-customMd">
      <InnerContainer>
        <section>
          <SectionHeading
            theme={theme}
            text="Your Tasks"
            modifyClasses="mb-customXsm text-center 2md:text-left 2md:mb-customSm"
          />

          {/* tasks */}
          <TasksContainer />
        </section>

        <section>
          <CreateForm theme={theme} />
        </section>
      </InnerContainer>
    </div>
  );
};

export default Home;
