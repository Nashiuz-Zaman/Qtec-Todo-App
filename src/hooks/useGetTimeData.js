// react
import { useCallback } from "react";

const useGetTimeData = () => {
  const getTime = useCallback(() => {
    const dateObject = new Date();
    const hours = dateObject.getHours();
    const partOfDay = hours < 12 ? "AM" : "PM";
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    return { hours, partOfDay, minutes, seconds };
  }, []);

  const getDate = useCallback(() => {
    const dateObject = new Date();
    const monthName = dateObject.toLocaleString("en-us", { month: "short" });
    const dayOfTheMonth = parseInt(dateObject.getDate());
    const month = parseInt(dateObject.getMonth() + 1);
    const year = parseInt(dateObject.getFullYear());

    return { dayOfTheMonth, month, year, monthName };
  }, []);

  const getSpecificDate = useCallback(dateObj => {
    const monthName = dateObj.toLocaleString("en-us", { month: "short" });
    const dayOfTheMonth = parseInt(dateObj.getDate());
    const month = parseInt(dateObj.getMonth() + 1);
    const year = parseInt(dateObj.getFullYear());

    return { dayOfTheMonth, month, year, monthName };
  }, []);

  const padTime = useCallback((data = 0) => {
    return data < 10 ? data.toString().padStart(2, "0") : data;
  }, []);

  return { getTime, getDate, padTime, getSpecificDate };
};

export default useGetTimeData;
