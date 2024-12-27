import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/global.css'
import './assets/css/font.css'
import 'react-tabs/style/react-tabs.css';
import 'react-quill/dist/quill.snow.css';
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
import TicketList from "./pages/project/TicketList";
import TicketDetail from "./pages/project/TicketDetail";
import AllFiles from "./pages/fileManager/AllFiles";
import Documents from "./pages/fileManager/Documents";
import Images from "./pages/fileManager/Images";
import Media from "./pages/fileManager/Media";
import BlogDashboard from "./pages/blog/BlogDashboard";
import BlogPost from "./pages/blog/BlogPost";
import BlogList from "./pages/blog/BlogList";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogDetail from "./pages/blog/BlogDetail";
import EcDashboard from "./pages/ecommerce/EcDashboard";
import Product from "./pages/ecommerce/Product";
import ProductList from "./pages/ecommerce/ProductList";
import ProductDetail from "./pages/ecommerce/ProductDetail";

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
          <Route path="/project-ticket-list" element={<TicketList />} />
          <Route path="/project-ticket-detail" element={<TicketDetail />} />
          <Route path="/all-files" element={<AllFiles />} />
          <Route path="/file-documents" element={<Documents />} />
          <Route path="/file-images" element={<Images />} />
          <Route path="/file-media" element={<Media />} />
          <Route path="/blog-dashboard" element={<BlogDashboard />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/ec-dashboard" element={<EcDashboard />} />
          <Route path="/ec-product" element={<Product />} />
          <Route path="/ec-product-list" element={<ProductList />} />
          <Route path="/ec-product-detail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}