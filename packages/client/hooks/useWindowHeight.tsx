import { useState, useEffect } from "react";

export const useWindowHeight = (defaultHeight: string) => {
  const [height, setHeight] = useState(defaultHeight);

  useEffect(() => {
    window && window.innerHeight && setHeight(window.innerHeight);
  }, []);

  return height;
};
