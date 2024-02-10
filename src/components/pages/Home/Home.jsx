// component
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// redux
import { useSelector } from "react-redux";
import TasksContainer from "./TasksContainer/TasksContainer";

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
      </InnerContainer>
    </div>
  );
};

export default Home;
