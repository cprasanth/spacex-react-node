import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Rockets from "./pages/Rockets";
import Launches from "./pages/Launches";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
`;

function App() {
  return (
    <Router>
      <MainWrapper>
        <Header />
        <Section>
          <Hero />
        </Section>
        <Section>
          <ContentSelector>
            <button>Launches</button>
            <button>rockets</button>
          </ContentSelector>
        </Section>
        <Section>
          <Switch>
            <Route path="/rockets">
              <Rockets />
            </Route>
            <Route path="/launches">
              <Launches />
            </Route>
          </Switch>
        </Section>
      </MainWrapper>
    </Router>
  );
}

export default App;
