import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/global.css'
import './assets/css/font.css'
import 'react-tabs/style/react-tabs.css';
import 'react-quill/dist/quill.snow.css';
import 'c3/c3.css';
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import OurProfile from "./pages/OurProfile";
import Email from "./pages/app/email/Email";
import EmailCompose from "./pages/app/email/EmailCompose";
import EmailDetail from "./pages/app/email/EmailDetail";
import Chat from "./pages/app/Chat";
import Calendar from "./pages/app/Calendar";
import Contact from "./pages/app/Contact";
import ProjectList from "./pages/project/ProjectList";
import Taskboard from "./pages/project/Taskboard";

export default function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={<Layout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/our-profile" element={<OurProfile />} />
          <Route path="/app-email" element={<Email />} />
          <Route path="/app-email-compose" element={<EmailCompose />} />
          <Route path="/app-email-detail" element={<EmailDetail />} />
          <Route path="/app-chat" element={<Chat />} />
          <Route path="/app-calendar" element={<Calendar />} />
          <Route path="/app-contact" element={<Contact />} />
          <Route path="/project-list" element={<ProjectList />} />
          <Route path="/project-taskboard" element={<Taskboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}