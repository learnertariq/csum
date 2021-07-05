import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Result from "./components/Result";
import Notice from "./components/Notice";
import NoticeDesc from "./components/NoticeDesc";
import About from "./components/About";
import Committe from "./components/Committe";
import Teachers from "./components/Teachers";
import Classes from "./components/Classes";
import ResultUpload from "./components/ResultUpload";
import LatestNewsUpload from "./components/LatestNewsUpload";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/notices/:id" component={NoticeDesc} />
        <Route path="/committe" component={Committe} />
        <Route path="/notices" component={Notice} />
        <Route path="/result" component={Result} />
        <Route path="/about" component={About} />
        <Route path="/about" component={About} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/classes" component={Classes} />
        <Route path="/resultUpload" component={ResultUpload} />
        <Route path="/latestNewsUpload" component={LatestNewsUpload} />
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
