import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "@pages/home";
import Editor from "@pages/editor";
import TemplateDetail from "@pages/templateDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/template/:id" element={<TemplateDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
