// react
import PropTypes from "prop-types";

// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import BrandLogo from "../BrandLogo/BrandLogo";

// redux
import { useSelector } from "react-redux";

// data
import logoWhite from "./../../../assets/images/websiteLogos/logo-white.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useSelector(store => store.websiteTheme);

  return (
    <footer
      className={`${
        theme === "light" ? "bg-blackLight" : "bg-neutral-700"
      } mt-auto py-8`}>
      <InnerContainer>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
          {/* website logo */}
          <BrandLogo
            imageModifyClasses="h-[3rem] xl:h-[4rem]"
            imageSource={logoWhite}
          />

          {/* copyright part */}
          <small className="text-white 2xl:text-lg">
            &copy; {currentYear} Qtec Todos Inc., Developed by Nashiuz Zaman
          </small>
        </div>
      </InnerContainer>
    </footer>
  );
};

Footer.propTypes = {
  addressData: PropTypes.object,
};

export default Footer;
