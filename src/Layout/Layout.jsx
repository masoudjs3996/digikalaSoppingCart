
import Navigation from "../Component/Navigation/Navigation";
import TopSlider from "../Component/Slider/Slider";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <TopSlider/>
      {children}
    </>
  );
};

export default Layout;
