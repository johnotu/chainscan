import { useContext, useEffect, useState } from "react";
import { ArchiveContext } from "../store/contexts";

export default function useGetArchiveData({ query, initialState }) {
  const { archive } = useContext(ArchiveContext);
  const url = archive.providers.find((p) => p.provider === "subsquid").url;

  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const json = await response.json();
        if (isMounted) {
          setData(json.data);
        }
      } catch (err) {
        throw err;
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    const timer = setInterval(getData, 10000);
    return () => {
      clearInterval(timer);
      isMounted = false;
    };
  }, [query, url]);
  return { isLoading, data };
}
