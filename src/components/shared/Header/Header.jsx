// react
import PropTypes from "prop-types";

// components
import BrandLogo from "./../BrandLogo/BrandLogo";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import ThemeBtn from "./../ThemeBtn/ThemeBtn";

// redux
import { useSelector } from "react-redux";

// data
import logoPrimary from "./../../../assets/images/websiteLogos/logo-primary.webp";
import logoWhite from "./../../../assets/images/websiteLogos/logo-white.webp";

const Header = ({ modifyClasses = "" }) => {
  const { theme } = useSelector(store => store.websiteTheme);

  return (
    <header
      className={`py-custom2xsm border-b border-lightBorder ${modifyClasses}`}>
      <InnerContainer>
        <div className="flex items-center justify-between">
          {/* website logo */}
          <BrandLogo
            imageSource={theme === "light" ? logoPrimary : logoWhite}
            imageModifyClasses="xl:h-[4rem] 2xl:h-[5rem]"
          />

          <ThemeBtn />
        </div>
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  modifyClasses: PropTypes.string,
};

export default Header;
