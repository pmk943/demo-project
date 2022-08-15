import "./Home.css";
import Cards from "../Card/Cards";
import { useNavigate } from "react-router-dom";
import Card2 from "../Card2/Card2";
import { Container } from "@mui/system";

function Home() {
  let navigate = useNavigate();
  return (
    <Container>
      <div className="App-header">
        <h1
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Main Menu
        </h1>
        <hr style={{ background: "orange", height: 2 }} />
      </div>
      {/* //Comment Cards and unComment Card2 to show card with Footer  */}
      <Card2 />
      {/* <Cards /> */}
    </Container>
  );
}

export default Home;
