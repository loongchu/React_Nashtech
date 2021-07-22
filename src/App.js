import './App.css';
import Home from "./pages/HomePage/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import {useState} from "react";
import EditPost from "./component/EditPost/EditPost";

function App() {
    const [currentUser,setCurrentUser] = useState("");
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
