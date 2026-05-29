import React from 'react';
import { Helmet } from 'react-helmet';

export default function OrganizationSchemaPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <Helmet>
        <title>Free Organization Schema Generator | Schema Studio</title>
        <meta name="description" content="Generate valid Organization JSON-LD schema for your business. Boost your local SEO and Knowledge Graph presence with our free Organization Schema Generator." />
      </Helmet>
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Free Organization Schema Generator</h1>
      
      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">
          Stand out in search results and secure your spot in Google's Knowledge Graph. Our <strong>Organization Schema Generator</strong> creates perfectly formatted JSON-LD markup for your business in seconds.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Why Do You Need Organization Schema?</h2>
        <p className="mb-6">
          Search engines use structured data to understand exactly who you are, what your company does, and how to display your brand in search results. Without it, you are leaving your brand's digital identity up to chance. Adding Organization schema can help you:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Trigger rich Knowledge Panels on the right side of Google Search.</li>
          <li>Link your website to your official social media profiles.</li>
          <li>Establish your company's logo, contact info, and foundation details.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-800 mb-2">How to Use Schema Studio for Organization Markup</h3>
          <p className="text-blue-900">
            Go to the main <strong>App</strong> dashboard, enter your company name and URL in the "Organization Şeması" section, and instantly copy the valid JSON-LD code block. Turn on <em>AI Graph Mode</em> if you want to link it seamlessly with other schemas!
          </p>
        </div>
      </div>
    </div>
  );
}