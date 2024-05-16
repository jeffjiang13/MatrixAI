import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Platform Overview</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What is MatrixAI?</h2>
        <p>MatrixAI is a comprehensive SaaS platform that leverages advanced artificial intelligence to provide innovative solutions across various domains such as image and video generation, conversational AI, and music creation. Designed with modern technologies like Next.js, React, and Tailwind CSS, MatrixAI ensures a seamless and scalable user experience.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc pl-8">
          <li>Image and Video Generation: Harness cutting-edge AI to create engaging visuals from textual descriptions.</li>
          <li>Conversational AI: Develop intelligent conversational agents to improve customer interaction and engagement.</li>
          <li>Music Creation: Utilize AI to compose unique music pieces tailored to various moods and settings.</li>
          <li>Robust API Access: Integrate with our powerful APIs to enhance your applications with AI capabilities.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose MatrixAI?</h2>
        <p>MatrixAI not only provides robust tools for AI integration but also ensures top-notch security, scalability, and ease of use, making it the perfect choice for businesses looking to innovate and excel in the digital age.</p>
      </section>
    </div>
  );
};

export default Overview;
