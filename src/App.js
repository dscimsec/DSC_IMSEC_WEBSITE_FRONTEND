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

  return (
    <>
      <header>
        {errLead && errCore && <div>500 INTERNAL SERVER ERROR</div>}
        {isPendingLead && isPendingCore && <div>LOADING .....</div>}
        {coreTeamData && <Navbar leadData={leadData} coreTeamData={coreTeamData} />}
      </header>
      <Footer />
    </>
  );
}

export default App;
