import React from 'react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Privacy Policy</h2>
            <p className="text-slate-500 font-medium text-sm mt-1">Last Updated: February 2026</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-200 hover:bg-petrol-600 hover:text-white flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-6">
                At Lalit Raj Business Consulting (LRBC), we value your trust and are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our consultancy services and digital platforms.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">1. Information Collection</h3>
              <p className="text-slate-600 mb-4">
                We collect information that is necessary to provide our specialized manufacturing consultancy services. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li><strong>Professional Identity:</strong> Name, job title, company name, and contact details (email, phone number).</li>
                <li><strong>Operational Data:</strong> Information regarding your manufacturing processes, throughput metrics, and machinery specifications shared during audits or consultations.</li>
                <li><strong>Digital Footprint:</strong> Data collected via cookies and analytics tools when you visit our website, such as IP address and browsing behavior.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">2. Usage of Information</h3>
              <p className="text-slate-600 mb-4">
                The data we collect is utilized strictly for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li><strong>Service Delivery:</strong> To conduct diagnostic audits, design strategy architectures, and implement operational systems.</li>
                <li><strong>Communication:</strong> To respond to your inquiries, schedule consultations, and provide project updates.</li>
                <li><strong>Improvement:</strong> To analyze industry trends and enhance our service offerings (data used for this purpose is anonymized).</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">3. Data Protection & Security</h3>
              <p className="text-slate-600 mb-4">
                We implement rigorous security measures to protect your sensitive industrial data. Our protocols include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li><strong>Encryption:</strong> All digital data transmission is encrypted using industry-standard SSL/TLS protocols.</li>
                <li><strong>Access Control:</strong> Access to client data is restricted to authorized personnel directly involved in your project.</li>
                <li><strong>Confidentiality Agreements:</strong> All LRBC employees and partners are bound by strict non-disclosure agreements (NDAs).</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">4. Data Sharing</h3>
              <p className="text-slate-600 mb-6">
                LRBC does not sell, trade, or rent your personal or corporate information to third parties. We may share data only with:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li><strong>Trusted Partners:</strong> Sub-contractors or software vendors (e.g., Tally, Adobe) strictly for the purpose of integrating specific solutions you have requested.</li>
                <li><strong>Legal Authorities:</strong> If required by law or to protect the rights and safety of LRBC and its stakeholders.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">5. Your Rights</h3>
              <p className="text-slate-600 mb-6">
                You retain full rights over your data. You may request to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li>Access the personal information we hold about you.</li>
                <li>Correct any inaccuracies in your data.</li>
                <li>Request deletion of your data from our active records, subject to legal retention usage.</li>
              </ul>

              <div className="bg-petrol-50 p-6 rounded-2xl mt-8">
                <h4 className="font-bold text-petrol-700 mb-2">Contact Us</h4>
                <p className="text-petrol-600 text-sm">
                  For any privacy-related concerns or to exercise your rights, please contact our Data Compliance Officer at <a href="mailto:contact@lalitraj.com" className="underline hover:text-petrol-800">contact@lalitraj.com</a> or call +91 99549 53008.
                </p>
              </div>
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-petrol-600 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
