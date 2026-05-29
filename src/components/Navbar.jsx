import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Schema Studio</Link>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-600">App</Link>
        
        <div className="relative group inline-block">
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600 py-2">Generators ▼</button>
          <div className="absolute right-0 top-full pt-1 w-64 hidden group-hover:block z-50">
            <div className="bg-white border border-gray-200 rounded shadow-lg overflow-hidden">
              <Link to="/generators/organization-schema" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Free Organization Schema Generator</Link>
              <Link to="/generators/faq-schema" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Advanced FAQ JSON-LD Generator</Link>
            </div>
          </div>
        </div>

        <div className="relative group inline-block">
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600 py-2">Learn / Guides ▼</button>
          <div className="absolute right-0 top-full pt-1 w-64 hidden group-hover:block z-50">
            <div className="bg-white border border-gray-200 rounded shadow-lg overflow-hidden">
              <Link to="/guides/what-is-json-ld-graph" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">What is JSON-LD Graph Schema?</Link>
              <Link to="/guides/fix-isolated-schema-errors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Fixing Isolated Schema Errors</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;