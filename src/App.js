import MainPage from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import useFetch from "./api/useFetch";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import { useEffect } from "react";

function App() {
  const { data: leadData, isPendingLead, errLead } = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/users/LEAD`
  );

  const { data: coreTeamData, isPendingCore, errCore } = useFetch(
    process.env.REACT_APP_BACKEND_URL +"/users/CORE"
  );

  const { data: techData, isPendingTech, errTech } = useFetch(
    process.env.REACT_APP_BACKEND_URL+"/tech"
  );

  const { data: eventData, isPendingEvent, errEvent } = useFetch(
    process.env.REACT_APP_BACKEND_URL+"/events"
  );

  // const [leadData, setLeadData] = useState(null);
  // const [coreTeamData, setCoreTeamData] = useState(null);
  // const [techData, setTechData] = useState(null);
  // const [eventData, setEventData] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(false);



  return (
    <>
      <header>
        {(errLead || errCore || errTech ||errEvent) && (
          <div><Error/></div>
        )}
        {(isPendingLead || isPendingCore || isPendingTech ||isPendingEvent) && (
          <div><Loading/></div>
        )}
        {leadData && coreTeamData && techData && eventData &&(
          <MainPage
            leadData={leadData}
            coreTeamData={coreTeamData}
            techData={techData}
            eventData = {eventData}
          />
        )}
      </header>
      <Footer />
    </>
  );
}

export default App;
