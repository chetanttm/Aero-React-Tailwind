import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/global.css'
import './assets/css/font.css'
import 'react-tabs/style/react-tabs.css';
import 'react-quill/dist/quill.snow.css';
import 'swiper/css';
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
import UiTypography from "./pages/components/UiTypography";
import UiTabs from "./pages/components/UiTabs";
import UiButtons from "./pages/components/UiButtons";
import UiIcons from "./pages/components/UiIcons";
import UiColors from "./pages/components/UiColors";
import UiListGroup from "./pages/components/UiListGroup";
import UiModals from "./pages/components/UiModals";
import UiProgressbars from "./pages/components/UiProgressbars";
import UiToastify from "./pages/components/UiToastify";
import UiCollapse from "./pages/components/UiCollapse";
import BasicElements from "./pages/forms/BasicElements";
import FormValidation from "./pages/forms/FormValidation";
import DragDropUpload from "./pages/forms/DragDropUpload";
import QuillEditor from "./pages/forms/QuillEditor";
import BasicTable from "./pages/tables/BasicTable";
import NormalTable from "./pages/tables/NormalTable";
import EditableTable from "./pages/tables/EditableTable";
import TableColor from "./pages/tables/TableColor";
import TableFilter from "./pages/tables/TableFilter";
import DataTable from "./pages/tables/DataTable";
import ApexChart from "./pages/charts/ApexChart";
import Knob from "./pages/charts/Knob";
import WidgetApp from "./pages/widgets/WidgetApp";

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
          <Route path="/ui-typography" element={<UiTypography />} />
          <Route path="/ui-tabs" element={<UiTabs />} />
          <Route path="/ui-buttons" element={<UiButtons />} />
          <Route path="/ui-icons" element={<UiIcons />} />
          <Route path="/ui-colors" element={<UiColors />} />
          <Route path="/ui-list-group" element={<UiListGroup />} />
          <Route path="/ui-modals" element={<UiModals />} />
          <Route path="/ui-progressbars" element={<UiProgressbars />} />
          <Route path="/ui-toastify" element={<UiToastify />} />
          <Route path="/ui-collapse" element={<UiCollapse />} />
          <Route path="/basic-elements" element={<BasicElements />} />
          <Route path="/form-validation" element={<FormValidation />} />
          <Route path="/drag-drop-upload" element={<DragDropUpload />} />
          <Route path="/quill-editor" element={<QuillEditor />} />
          <Route path="/basic-tabel" element={<BasicTable />} />
          <Route path="/normal-tabel" element={<NormalTable />} />
          <Route path="/editable-tabel" element={<EditableTable />} />
          <Route path="/tabel-color" element={<TableColor />} />
          <Route path="/tabel-filter" element={<TableFilter />} />
          <Route path="/data-table" element={<DataTable />} />
          <Route path="/apex-chart" element={<ApexChart />} />
          <Route path="/knob" element={<Knob />} />
          <Route path="/widget-app" element={<WidgetApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}