import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progressPercentage = (currentProgress / scrollHeight) * 100;
        setCompletion(progressPercentage);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
