import { useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [orgName, setOrgName] = useState('My Company');
  const [orgUrl, setOrgUrl] = useState('https://example.com');
  const [faqs, setFaqs] = useState([{ question: 'What is Schema Studio?', answer: 'It is a Micro-SaaS for generating JSON-LD.' }]);
  const [graphMode, setGraphMode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);
  const updateFaq = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const generateJSONLD = () => {
    const orgSchema = {
      "@type": "Organization",
      "name": orgName,
      "url": orgUrl
    };
    
    const faqSchema = {
      "@type": "FAQPage",
      "mainEntity": faqs.filter(f => f.question && f.answer).map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    if (graphMode) {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [orgSchema, faqSchema]
      }, null, 2);
    } else {
      // Dizi olarak gruplandırarak geçerli (valid) JSON üretiyoruz.
      return JSON.stringify([
        {
          "@context": "https://schema.org",
          ...orgSchema
        },
        {
          "@context": "https://schema.org",
          ...faqSchema
        }
      ], null, 2);
    }
  };

  const handleCopy = () => {
    const jsonCode = generateJSONLD();
    navigator.clipboard.writeText(jsonCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Helmet>
        <title>Schema Studio - AI Powered JSON-LD Generator</title>
        <meta name="description" content="Generate valid, interconnected JSON-LD graph schema for SEO using Schema Studio." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Schema Studio",
                  "applicationCategory": "SEO/Developer Tool",
                  "operatingSystem": "Web",
                  "url": "https://schemastudio.app",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "14"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "Schema Studio",
                  "url": "https://schemastudio.app"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="w-1/2 p-8 overflow-y-auto border-r border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">Schema Studio</h1>
          <label className="flex items-center space-x-2 cursor-pointer bg-white p-2 rounded shadow-sm border border-gray-200">
            <input type="checkbox" checked={graphMode} onChange={(e) => setGraphMode(e.target.checked)} className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="font-medium text-sm">AI Graph Modu</span>
          </label>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Organization Şeması</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Şirket Adı</label>
              <input type="text" value={orgName} onChange={e => setOrgName(e.target.value)} className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Website URL</label>
              <input type="text" value={orgUrl} onChange={e => setOrgUrl(e.target.value)} className="w-full border border-gray-300 rounded p-2" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">FAQ Şeması</h2>
            <button onClick={addFaq} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100">+ Soru Ekle</button>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 border border-gray-100 rounded bg-gray-50">
                <input type="text" placeholder="Soru" value={faq.question} onChange={e => updateFaq(idx, 'question', e.target.value)} className="w-full mb-2 border border-gray-300 rounded p-2 text-sm" />
                <textarea placeholder="Cevap" value={faq.answer} onChange={e => updateFaq(idx, 'answer', e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm h-20"></textarea>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-[#1e1e1e] text-[#d4d4d4] p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Canlı JSON-LD Önizleme</h2>
          <button 
            onClick={handleCopy}
            className={`text-sm px-4 py-2 rounded font-medium transition-colors ${
              isCopied ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isCopied ? 'Kopyalandı!' : 'Kodu Kopyala'}
          </button>
        </div>
        <pre className="font-mono text-sm whitespace-pre-wrap bg-[#1e1e1e] p-0">
          <code>
            {`<script type="application/ld+json">\n${generateJSONLD()}\n</script>`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;