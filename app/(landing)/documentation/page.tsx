"use client"
import React, { useState } from 'react';

const Documentation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<{[key: string]: boolean}>({
    introduction: false,
    gettingStarted: false,
    features: false,
    apiDocumentation: false,
    faq: false,
    support: false
  });
  const toggleSection = (section: string) => {
    setIsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };
/* eslint-disable no-unused-vars, no-console */

  return (
    <>
      <div className="flex">
      <aside className={`hidden lg:block min-w-50 h-screen bg-gray-800 text-white p-5 sticky top-0`}>
        <ul>
            <li className="cursor-pointer" onClick={() => toggleSection('introduction')}>Introduction</li>
            <li className="cursor-pointer" onClick={() => toggleSection('gettingStarted')}>Getting Started</li>
            <li className="cursor-pointer" onClick={() => toggleSection('features')}>Features</li>
            <li className="cursor-pointer" onClick={() => toggleSection('apiDocumentation')}>API Documentation</li>
            <li className="cursor-pointer" onClick={() => toggleSection('faq')}>FAQ</li>
            <li className="cursor-pointer" onClick={() => toggleSection('support')}>Support</li>
          </ul>
        </aside>
        <main className="flex-grow px-1 py-8 mx-auto text-white lg:px-1 max-w-5xl">
          <header className="mb-10">
          <h1 className="text-xl lg:text-3xl font-bold">MatrixAI Documentation</h1>
            <p className="text-gray-400">Everything you need to know to get started and use MatrixAI.</p>
          </header>
          <section id="introduction" className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold" onClick={() => toggleSection('introduction')}>Introduction</h2>
            {isOpen.introduction && <p>MatrixAI is designed to serve as a robust platform integrating cutting-edge AI technologies to provide solutions for image and video generation, conversational AI, and music creation. This platform harnesses the power of Next.js, React, and additional modern technologies to deliver high-performance AI tools in a user-friendly environment. Here, we will guide you through the platform's architecture, highlight its unique features, and show how it can be tailored to meet various business needs.
          </p>}
          </section>

          <section id="getting-started" className="mb-8">
            <h2 className="text-2xl font-bold" onClick={() => toggleSection('gettingStarted')}>Getting Started</h2>
            {isOpen.gettingStarted && <p>To begin using MatrixAI, ensure you have Node.js version 18.x.x installed. Start by cloning the repository from GitHub, then navigate to the project directory and install all required dependencies using npm. This section will walk you through each step, explain the purpose of key dependencies, and offer troubleshooting tips for common setup issues. By the end, you'll have a local development environment running MatrixAI, ready for further exploration and customization.
            </p>}
          </section>
          <section id="features" className="mb-8">
            <h2 className="text-2xl font-bold" onClick={() => toggleSection('features')}>Features</h2>
            {isOpen.features && <p>MatrixAI offers several cutting-edge features:
              <br />
              - Image Generation: Utilize OpenAI's advanced algorithms to generate unique images based on textual descriptions.
              <br />
              - Video Generation: Create dynamic videos from predefined scripts using Replicate AI.
              <br />
              - Conversational AI: Engage with users through smart conversational agents that can be integrated into various applications.
              <br />
              - Music Creation: Generate original music tracks programmatically with AI.
              Each feature is built to be accessible via API, with extensive support for customization to fit specific use cases.
            </p>}
          </section>
          <section id="api-documentation" className="mb-8">
            <h2 className="text-2xl font-bold" onClick={() => toggleSection('apiDocumentation')}>API Documentation</h2>
            {isOpen.apiDocumentation && <p>The API documentation provides a complete reference for developers. It includes:
              <br />
              - Authentication: Details on securing and accessing the API using OAuth and other methods.
              <br />
              - Endpoints: Each API endpoint is described with possible parameters, request and response examples, and expected outcomes.
              <br />

              - Error Handling: Common error codes and their meanings to help diagnose issues during API integration.
              <br />
                The goal is to enable developers to integrate MatrixAI capabilities into their applications seamlessly.</p>}
          </section>
          <section id="faq" className="mb-8">
            <h2 className="text-2xl font-bold" onClick={() => toggleSection('faq')}>FAQ</h2>
            {isOpen.faq && <p>The FAQ section addresses frequently asked questions such as:
              <br />
            - How to upgrade your subscription plan?
            <br />
            - What are the system requirements for using MatrixAI effectively?
            <br />
            - How to contribute to MatrixAI's development or report a bug?
            This section aims to quickly resolve common issues and clarify operational queries, improving user satisfaction and engagement.</p>}
          </section>
          <section id="support" className="mb-8">
            <h2 className="text-2xl font-bold" onClick={() => toggleSection('support')}>Support</h2>
            {isOpen.support && <p>For technical support, users can contact the MatrixAI team via email or through the support ticket system available on the platform. Details on how to submit tickets, response times, and support hours are provided to ensure users receive assistance promptly and efficiently. The support section also includes links to community forums and additional resources for self-help.</p>}
          </section>
        </main>
      </div>
    </>
  );
};

export default Documentation;
