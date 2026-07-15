import React from 'react';

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Terms & Conditions</h2>
            <p className="text-slate-500 font-medium text-sm mt-1">Effective Date: February 2026</p>
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
                Welcome to Lalit Raj Business Consulting (LRBC). These Terms and Conditions govern your use of our website, consultancy services, and associated digital products. By engaging with LRBC, you agree to comply with and be bound by these terms.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">1. Scope of Services</h3>
              <p className="text-slate-600 mb-4">
                LRBC provides expert management consulting, operational auditing, and system implementation services for the manufacturing sector.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li><strong>Consultation:</strong> Strategic advice is provided based on the information supplied by the client. While we strive for accuracy, the final decision and implementation rest with the client.</li>
                <li><strong>Implementation:</strong> Software and system integration (e.g., G-Suite, Tally) are subject to the terms of the respective third-party providers.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">2. Intellectual Property</h3>
              <p className="text-slate-600 mb-4">
                All content, methodologies, frameworks, and digital assets provided by LRBC remain the intellectual property of Lalit Raj Business Consulting unless explicitly transferred via a written agreement.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li>You may not reproduce, distribute, or create derivative works from our proprietary materials without prior written consent.</li>
                <li>Client data and specific operational strategies developed for your organization remain your confidential property.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">3. Limitation of Liability</h3>
              <p className="text-slate-600 mb-6">
                LRBC aims to maximize your operational efficiency and profitability. However, we do not guarantee specific financial results, as business outcomes are influenced by market conditions and internal execution. LRBC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">4. Client Responsibilities</h3>
              <p className="text-slate-600 mb-6">
                To ensure the success of our engagement, the client agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li>Provide accurate and timely information regarding operations and financials.</li>
                <li>Ensure that key personnel are available for consultation and training sessions.</li>
                <li>Adhere to the payment schedules outlined in the specific service proposal.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">5. Termination</h3>
              <p className="text-slate-600 mb-6">
                Either party may terminate the engagement with written notice if the other party breaches material terms of the agreement. Upon termination, the client is liable for payment of all services rendered up to the date of termination.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">6. Governing Law</h3>
              <p className="text-slate-600 mb-6">
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
              </p>

              <div className="bg-petrol-50 p-6 rounded-2xl mt-8">
                <h4 className="font-bold text-petrol-700 mb-2">Legal Inquiries</h4>
                <p className="text-petrol-600 text-sm">
                  For questions regarding these terms, please contact our legal team at <a href="mailto:contact@lalitraj.com" className="underline hover:text-petrol-800">contact@lalitraj.com</a>.
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
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
