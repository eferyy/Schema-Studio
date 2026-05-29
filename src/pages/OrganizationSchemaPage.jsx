import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function OrganizationSchemaPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <Helmet>
        <title>Free Organization Schema Generator | Schema Studio</title>
        <meta name="description" content="Generate valid Organization JSON-LD schema for your business. Stand out in AI search engines like SearchGPT and Perplexity." />
      </Helmet>
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Free Organization Schema Generator</h1>
      
      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">
          In the age of AI search, your digital identity matters more than ever. Use our <strong>Free Organization Schema Generator</strong> to create perfectly formatted JSON-LD markup and claim your entity space.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Why AI Search Engines Demand Structured Data</h2>
        <p className="mb-6">
          Traditional SEO was about keywords. Modern SEO is about <strong>Entities</strong>. New AI-driven search engines like <strong>SearchGPT</strong> and <strong>Perplexity</strong> don't just read your text; they parse your structured data to build their Knowledge Graphs.
        </p>
        <p className="mb-6">
          By injecting a valid Organization schema, you explicitly tell these AI models your company's name, official website, and core details—drastically reducing AI hallucinations about your brand.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Benefits of Organization Schema</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li><strong>Knowledge Panels:</strong> Trigger rich displays on the right side of Google Search.</li>
          <li><strong>AI Clarity:</strong> Help Perplexity and SearchGPT cite your official website as the primary source of truth.</li>
          <li><strong>Brand Trust:</strong> Connect your site to your verified social media profiles mathematically.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-800 mb-2">The Schema Studio Advantage</h3>
          <p className="text-blue-900">
            Our tool goes beyond flat data. By turning on <em>AI Graph Mode</em>, your Organization schema becomes deeply interconnected with your web pages, maximizing validation scores.
          </p>
        </div>

        <div className="mt-12 text-center bg-gray-50 border border-gray-200 p-10 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Graph?</h2>
          <p className="text-gray-600 mb-8">Stop writing code by hand. Generate valid JSON-LD in 3 seconds.</p>
          <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg">
            Create Your Schema Now →
          </Link>
        </div>
      </div>
    </div>
  );
}