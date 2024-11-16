import { useEffect, useState } from "react";

type Device = "desktop" | "mobile";

const mobileUserAgentRegex =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

const useDeviceDetector = () => {
  const [device, setDevice] = useState<Device>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const isMobileUserAgent = mobileUserAgentRegex.test(navigator.userAgent);
      const isMobileScreen = window.innerWidth < 768;

      setDevice(isMobileUserAgent || isMobileScreen ? "mobile" : "desktop");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

export default useDeviceDetector;
