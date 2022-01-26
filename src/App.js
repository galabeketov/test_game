import MenuIcon from "@mui/icons-material/Menu";
import MyBtn from "./components/MyBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "./styles/global";
import Layout from "./containers/Layout";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Layout>
        {/* Maktab */}
        <Teachers />
        <Students />
      </Layout>
    </>
  );
};

export default App;
