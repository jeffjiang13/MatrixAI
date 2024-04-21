
import React from 'react';

const Documentation: React.FC = () => {
  return (
    <>
      <div className="mx-auto px-4 py-8 text-white">
        <header className="mb-10">
          <h1 className="text-3xl font-bold">MatrixAI Documentation</h1>
          <p className="text-gray-400">Everything you need to know to get started and use MatrixAI.</p>
        </header>

        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p>This section provides an overview of what MatrixAI is and the core functionalities it offers.</p>
        </section>

        <section id="getting-started" className="mb-8">
          <h2 className="text-2xl font-bold">Getting Started</h2>
          <p>Instructions on how to set up and start using MatrixAI, including installation and initial configuration steps.</p>
        </section>

        <section id="features" className="mb-8">
          <h2 className="text-2xl font-bold">Features</h2>
          <p>Detailed explanation of all key features such as image and video generation, AI conversational tools, and music creation capabilities.</p>
        </section>

        <section id="api-documentation" className="mb-8">
          <h2 className="text-2xl font-bold">API Documentation</h2>
          <p>Comprehensive guide on how to use the API, including endpoints, authentication methods, request and response formats, and error codes.</p>
        </section>

        <section id="faq" className="mb-8">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <p>Frequently asked questions to help troubleshoot common issues and clarify typical user queries.</p>
        </section>

        <section id="support" className="mb-8">
          <h2 className="text-2xl font-bold">Support</h2>
          <p>How to obtain further help and support, including contact details for technical support and how to submit tickets.</p>
        </section>
      </div>
    </>
  );
};

export default Documentation;
