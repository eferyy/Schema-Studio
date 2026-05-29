import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function FAQSchemaPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <Helmet>
        <title>Advanced FAQ JSON-LD Generator | Schema Studio</title>
        <meta name="description" content="Create rich snippet-ready FAQ schema markup instantly. Optimize your answers for Google, SearchGPT, and Perplexity with valid JSON-LD." />
      </Helmet>
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Advanced FAQ JSON-LD Generator</h1>
      
      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">
          Dominate search real estate and feed AI models exactly what they want. Our <strong>Advanced FAQ JSON-LD Generator</strong> builds connected, error-free markup so your answers surface directly in results.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">The Secret Weapon for AI SEO</h2>
        <p className="mb-6">
          When a user asks a direct question on platforms like <strong>Perplexity</strong> or OpenAI's <strong>SearchGPT</strong>, these AI agents hunt for clear, structured answers. A valid <code>FAQPage</code> schema serves as a direct API hook to these bots.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Why Isolated FAQs Fail</h3>
        <p className="mb-6">
          Most generic generators output an isolated block of FAQ code. Google and modern AI bots prefer a <strong>Graph</strong> where the FAQ is explicitly linked to the authoring Organization and the specific WebPage it lives on. Without this linkage, search engines often ignore the schema.
        </p>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-bold text-green-800 mb-2">Connect Your Answers</h3>
          <p className="text-green-900">
            With Schema Studio's <em>AI Graph Mode</em>, your questions and answers are automatically wrapped in a <code>@graph</code> array, eliminating Google Search Console "Isolated Entity" warnings permanently.
          </p>
        </div>

        <div className="mt-12 text-center bg-gray-50 border border-gray-200 p-10 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Claim Your Rich Snippets</h2>
          <p className="text-gray-600 mb-8">Generate perfectly linked FAQ schema and watch your CTR skyrocket.</p>
          <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg">
            Start Generating FAQs →
          </Link>
        </div>
      </div>
    </div>
  );
}