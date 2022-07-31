import { useCallback, useEffect, useState } from "react";
export default function useWindowWidth(props) {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreenSize = useCallback(() => {
    setOnSmallScreen(window.innerWidth < props);
  }, [props]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);
  return onSmallScreen;
}
