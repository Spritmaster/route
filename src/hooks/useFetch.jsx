import { useState, useEffect, useInsertionEffect } from "react";
import { flushSync } from "react-dom";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPending(false);
      }
    };

    getData();
  }, [url]);
  return { data, isPending, error, url };
};
