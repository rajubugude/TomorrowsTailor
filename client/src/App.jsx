import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { UserContextProvider } from "./context/UserContext";
import Home from "./components/Home";
import Protected from "./auth/Protected";
import Profile from "./components/Profile";
import Customise from "./components/customise";
import Pantfill from "./components/Pantfill";
import Vectorimagecomponent from "./components/Vectorimagecomponent";
import StyleOptions from "./components/StyleoptionsTrouser";
import AdminProtected from "./auth/AdminProtected";
import AdminHome from "./admin/adminpages/AdminHome";
import AdminDashboard from "./admin/components/adminDashboard";
import AdminFormulaepage from "./admin/components/adminFormulaepage";


function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

            <Route
              exact
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              exact
              path="/customise"
              element={
                <Protected>
                  <Customise />
                </Protected>
              }
            />
            <Route
              exact
              path="/vector-image"
              element={
                <Protected>
                  <Vectorimagecomponent />
                </Protected>
              }
            />
            <Route
              exact
              path="/customfill"
              element={
                <Protected>
                  <Pantfill />
                </Protected>
              }
            />
            <Route
              exact
              path="/style-options"
              element={
                <Protected>
                  <StyleOptions />
                </Protected>
              }
            />
            
            <Route
              exact
              path="/admin-home"
              element={
                <AdminProtected>
                  <AdminHome/>
                </AdminProtected>
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <AdminProtected>
                  <AdminDashboard/>
                </AdminProtected>
              }
            />
            <Route
              exact
              path="/trouser-formulae"
              element={
                <AdminProtected>
                  <AdminFormulaepage/>
                </AdminProtected>
              }
            />
            <Route
              exact
              path="/profile/:id"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
