import useCategories from "@hooks/useCategories";
import { useMemo } from "react";


const useHomeCategories = () => {

    
const { records } = useCategories();


const randomCategories = useMemo(() => {
  if (records.length === 0) return [];

  const shuffled = [...records].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(3, shuffled.length)); // Show max 8 random categories
}, [records]);
    

  return { randomCategories };
};

export default useHomeCategories;
