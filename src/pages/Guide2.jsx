import React from 'react';

function Guide2() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">How to Fix Isolated Schema Errors in Google Rich Results</h1>
      <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4">
        <span>Published: May 2026</span>
        <span>•</span>
        <span>Category: Technical SEO</span>
      </div>
      
      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">
          You've spent hours crafting the perfect structured data, only to open Google Search Console and see warnings about <strong>Isolated Schema Errors</strong> or "Unlinked Entities." Here is how to diagnose and fix them permanently.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">The Root Cause of Isolated Entities</h2>
        <p className="mb-6">
          When you use multiple WordPress plugins or raw scripts to generate JSON-LD, they often output separate <code>&lt;script type="application/ld+json"&gt;</code> blocks. Google processes these as distinct, unrelated pieces of information. If a <code>Product</code> schema doesn't link to the <code>WebPage</code> it lives on, Google flags it as isolated.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">The Solution: Node Identifiers (@id)</h2>
        <p className="mb-6">
          The correct way to resolve this is by using the <code>@id</code> property. Think of <code>@id</code> as a unique URL or anchor that binds different JSON-LD objects together.
        </p>

        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg my-8 overflow-x-auto font-mono text-sm">
          <p className="text-gray-400 mb-2">// Example of connecting nodes</p>
          <code>
            {`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://example.com/page#webpage",
      "name": "My Great Page"
    },
    {
      "@type": "FAQPage",
      "@id": "https://example.com/page#faq",
      "isPartOf": { "@id": "https://example.com/page#webpage" }
    }
  ]
}`}
          </code>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3 Steps to Audit Your Site</h2>
        <ol className="list-decimal pl-5 space-y-4 mb-8">
          <li><strong>Run the Rich Results Test:</strong> Paste your URL into Google's official tool. Look for warnings under the "Unparsable structured data" tab.</li>
          <li><strong>Check for Multiple Script Tags:</strong> View your page source and search for <code>application/ld+json</code>. If you see more than one, you likely have isolated schemas.</li>
          <li><strong>Consolidate and Link:</strong> Move all entities into a single <code>@graph</code> array and establish parent-child relationships using <code>@id</code>.</li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-bold text-green-800 mb-2">The Automated Fix</h3>
          <p className="text-green-900">
            Don't want to mess with code? Use <strong>Schema Studio</strong>. Simply enter your data, toggle "AI Graph Mode" to ON, and click "Copy Code". We automatically generate the <code>@graph</code> structure and ensure all entities are natively linked, eliminating Search Console errors instantly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Guide2;