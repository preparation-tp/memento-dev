import useDeviceDetector from "@site/src/hooks/useDeviceDetector";
import usePwaInstaller from "@site/src/hooks/usePwaInstaller";

const PwaBanner = () => {
  const { isInstalled, installPwa, isClosed, closeBanner } = usePwaInstaller();
  const device = useDeviceDetector();

  if (isInstalled || device !== "mobile" || isClosed) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 w-max max-w-full">
      <div className="bg-violet-100/75 backdrop-blur-sm p-4 m-4 rounded shadow-lg">
        <div className="flex gap-4 items-center">
          <span className="text-6xl">🚀</span>
          <p className="text-2xl text-center py-6">
            Installez l'application Memento Dev pour un meilleur confort !
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="button shrink-0" onClick={closeBanner}>
            Fermer
          </button>
          <button className="button button--primary grow" onClick={installPwa}>
            Installer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PwaBanner;
