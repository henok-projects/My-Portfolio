import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Resume from "./pages/Resume/Resume";
import Topa from "./components/Top/Top";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
// import { BrowserRouter as Router,Switch } from 'react-router-dom';
import Profile from "./components/Profile/profile";
// import { Route } from 'react-router-dom/Route';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={5}>
        <Grid item xs={10} sm={12} md={4} lg={3} style={{}}>
          <Profile />
        </Grid>

        <Grid item xs={9}>
          <Router>
            <Topa />
            <div className="main-containt container_shadow">
              <Switch>
                <Route exact path="/portfolio">
                  <Portfolio />
                </Route>
                <Route exact path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
