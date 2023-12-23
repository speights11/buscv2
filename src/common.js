import { isMobile, isTablet } from "react-device-detect";

export const homeFormProps = () => {
  if (isMobile) {
    return {
      selectWidth: "60vw",
      labelFontSize: "2.0vmax",
      fieldFontSize: "2.5vmax",
    };
  } else if (isTablet) {
    return {
      selectWidth: "30vw",
      labelFontSize: "1.0vmax",
      fieldFontSize: "1.3vmax",
    };
  } else
    return {
      selectWidth: "30vw",
      labelFontSize: "1.0vmax",
      fieldFontSize: "1.3vmax",
    };
};
