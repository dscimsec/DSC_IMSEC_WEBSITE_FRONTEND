import MainPage from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// import useFetch from "./api/useFetch";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import {useState,useEffect} from 'react'

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
  return( {
    data,
    isPending,
    err,
  }
  )
};

function App() {
  const object1= useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/users/LEAD`
  );

  const object2 = useFetch(
    process.env.REACT_APP_BACKEND_URL +"/users/CORE"
  );

  const object3 = useFetch(
    process.env.REACT_APP_BACKEND_URL+"/tech"
  );

  const object4= useFetch(
    process.env.REACT_APP_BACKEND_URL+"/events"
  );
  return (
    <>
      <header>
        {(object1.err || object2.err || object3.err ||  object4.err) && (
          <div><Error/></div>
        )}
        {(object1.isPending || object2.isPending || object3.isPending || object4.isPending) && (
          <div><Loading/></div>
        )}
        {object1.data && object2.data && object3.data && object4.data &&(
          <MainPage
            leadData={object1.data}
            coreTeamData={object2.data}
            techData={object3.data}
            eventData = {object4.data}
          />
        )}
      </header>
      <Footer />
    </>
  );
}

export default App;
