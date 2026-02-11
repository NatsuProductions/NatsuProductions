import { useState, useEffect } from "react";

export function usePageLoading(minDisplayTime: number = 1500): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    const checkAllResourcesLoaded = async () => {
      if (document.fonts) {
        await document.fonts.ready;
      }

      const elapsed = performance.now() - startTime;
      const remainingTime = minDisplayTime - elapsed;

      if (remainingTime > 0) {
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      } else {
        setIsLoading(false);
      }
    };

    const handleLoad = () => {
      if (document.readyState === "complete") {
        checkAllResourcesLoaded();
      } else {
        window.addEventListener("load", checkAllResourcesLoaded);
      }
    };

    handleLoad();

    return () => {
      window.removeEventListener("load", checkAllResourcesLoaded);
    };
  }, [minDisplayTime]);

  return isLoading;
}
