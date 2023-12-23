import { isMobile, isTablet } from "react-device-detect";

export const getFormOne = () => {
  if (isMobile) {
    return { selectWidth: "60vw" };
  } else if (isTablet) {
    return { selectWidth: "30vw" };
  } else return { selectWidth: "30vw" };
};
