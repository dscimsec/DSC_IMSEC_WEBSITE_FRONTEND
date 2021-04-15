import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setIsPending(false);
        setErr(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setErr(err.message);
          setIsPending(false);
        }
      });
    return () => abortCont.abort();
  }, [url]);
// {console.log(err)
//   console.log(data)
//   console.log(isPending)
// }
  return( {
    data,
    isPending,
    err,
  }
  )
};

export default useFetch;
