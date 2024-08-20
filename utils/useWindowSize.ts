import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{width?: number, height?: number}>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Convert function declaration to a function expression
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

export { useWindowSize };
