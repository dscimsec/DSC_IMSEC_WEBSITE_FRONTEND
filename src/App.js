import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
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


  return (
    <>
      <header>
        {(errLead || errCore||errTech) && <div>500 INTERNAL SERVER ERROR</div>}
        {(isPendingLead || isPendingCore||isPendingTech) && <div>LOADING .....</div>}
        {(leadData && coreTeamData && techData) && <Navbar leadData={leadData} coreTeamData={coreTeamData} techData={ techData}/>}
      </header>
      <Footer />
    </>
  );
}

export default App;
