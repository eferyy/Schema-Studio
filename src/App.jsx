import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Guide1 from './pages/Guide1';
import Guide2 from './pages/Guide2';
import OrganizationSchemaPage from './pages/OrganizationSchemaPage';
import FAQSchemaPage from './pages/FAQSchemaPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides/what-is-json-ld-graph" element={<Guide1 />} />
            <Route path="/guides/fix-isolated-schema-errors" element={<Guide2 />} />
            <Route path="/generate/organization-schema" element={<OrganizationSchemaPage />} />
            <Route path="/generate/faq-schema" element={<FAQSchemaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;