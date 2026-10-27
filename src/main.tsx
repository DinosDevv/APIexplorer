import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './styles/index.css'
import App from './App.tsx'
import InformationPage from './pages/InformationPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/countryInfo/:countryName" element={<InformationPage />} />
    </Routes>
  </BrowserRouter>,
)
