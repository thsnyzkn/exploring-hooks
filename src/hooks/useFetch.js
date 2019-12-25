import { useState, useEffect, useCallback } from "react";

const useFetch = url => {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return data;
};

export default useFetch;
