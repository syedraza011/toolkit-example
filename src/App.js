import {Routes, Route, Link} from "react-router-dom";
import Info from "./pages/Info";
import Admin from "./pages/Admin";
import Students from "./pages/Students";

function App() {

    return (
        <div className="App">
            <nav>
                <Link to={"/"}>Info</Link>
                <Link to={"/admin"}>Admin</Link>
                <Link to={"/student/1"}>ST1</Link>
                <Link to={"/student/2"}>ST2</Link>
                <Link to={"/student/3"}>ST3</Link>
            </nav>
          <Routes>
            <Route index path={"/"} element={<Info/>}/>
            <Route path={"/admin"} element={<Admin/>}/>
            <Route path={"/student/:id"} element={<Students/>}/>
          </Routes>
        </div>
    );
}

export default App;
