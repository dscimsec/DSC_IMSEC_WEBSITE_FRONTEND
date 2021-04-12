import MainPage from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import useFetch from "./api/useFetch";

function App() {
  const { data: leadData, isPendingLead, errLead } = useFetch(
    "http://localhost:8000/users/LEAD"
  );

  const { data: coreTeamData, isPendingCore, errCore } = useFetch(
    "http://localhost:8000/users/CORE"
  );

  const { data: techData, isPendingTech, errTech } = useFetch(
    "http://localhost:8000/tech"
  );

  const { data: eventData, isPendingEvent, errEvent } = useFetch(
    "http://localhost:8000/events"
  );


  return (
    <>
      <header>
        {(errLead || errCore || errTech ||errEvent) && (
          <div>500 INTERNAL SERVER ERROR</div>
        )}
        {(isPendingLead || isPendingCore || isPendingTech ||isPendingEvent) && (
          <div>LOADING .....</div>
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
