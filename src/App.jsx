import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />    
        <Route path="/auth/signup" element={<SignUpPage />} />   
        <Route path="/auth/login" element={<LoginPage />}/>   
      </Routes>
    </div>
  );
}

export default App;
