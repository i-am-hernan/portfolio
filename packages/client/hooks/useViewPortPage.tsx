import { useEffect, useState } from "react";

export const useViewPortPage = (startViewPortPage) => {
  const [viewPortPage, setviewPortPage] = useState(startViewPortPage);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setviewPortPage(
      Math.floor(window.pageYOffset / (window.innerHeight / 2 + 100))
    );
  };

  return viewPortPage;
};
