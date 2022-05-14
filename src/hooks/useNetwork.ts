import { useEffect, useState } from "react";

const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleChange = () => setIsOnline(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return isOnline;
};

export default useNetwork;
