import { useEffect, useState } from "react";

const usePwaInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const installed =
      (window.navigator as Navigator & { standalone?: any }).standalone ||
      window.matchMedia("(display-mode: standalone)").matches;

    setIsInstalled(installed);

    const handleBeforeInstallPrompt = (event: Event) => {
      if (!installed) {
        event.preventDefault();
        setDeferredPrompt(event);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const installPwa = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    });
  };

  const closeBanner = () => {
    setIsClosed(true);
  };

  return { isInstalled, installPwa, isClosed, closeBanner };
};

export default usePwaInstaller;
