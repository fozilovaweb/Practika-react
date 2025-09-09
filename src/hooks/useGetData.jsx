import React, { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

function useGetData() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async function () {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Xatolik yuz berdi ma'lumotlarni olib kelishda");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { data, error, loading };
}

export default useGetData;
