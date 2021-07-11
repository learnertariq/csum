import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import userService from "./service/userService";
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
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Me from "./components/Me";
import TeacherForm from "./components/TeacherForm";
import NotFound from "./components/NotFound";
import EditYearForm from "./components/EditYearForm";
import ViewDocs from "./components/ViewDocs";
import Documents from "./components/Documents";
import DocumentUpload from "./components/DocumentUpload";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userService.getUser());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/notices/:id" component={NoticeDesc} />
        <Route path="/teachers/:id" component={TeacherForm} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/notices" component={Notice} />
        <Route path="/committe" component={Committe} />
        <Route path="/result" component={Result} />
        <Route path="/about" component={About} />
        <Route path="/about" component={About} />
        <Route path="/classes" component={Classes} />
        <Route path="/resultUpload" component={ResultUpload} />
        <Route path="/latestNewsUpload" component={LatestNewsUpload} />
        <Route path="/documentUpload" component={DocumentUpload} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/me" component={Me} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/editYear" component={EditYearForm} />
        <Route path="/viewDocs" component={ViewDocs} />
        <Route path="/documents" component={Documents} />
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer user={user} />
    </div>
  );
}

export default App;
