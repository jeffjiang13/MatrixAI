"use client"
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

const plans = [
  {
    id: 'free',
    name: 'Free Plan',
    price: 'Free',
    features: [
      '5 Tokens per month',
      'Access to basic features',
      'Community Support'
    ],
    description: 'A perfect start for individuals to explore our basic features.'
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: '$20/month',
    features: [
      'Unlimited AI Generations',
      'Priority Email Support',
      'Access to advanced features'
    ],
    description: 'Ideal for professionals and businesses that need more power and support.'
  }
];

const PricingPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map(plan => (
          <div key={plan.id} className="flex flex-col border rounded-lg dark:shadow-yellow-500 p-4 shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-lg mb-4">{plan.price}</p>
            <ul className="mb-auto">
              {plan.features.map(feature => (
                <li key={feature} className="text-gray-400">{feature}</li>
              ))}
            </ul>
            <p className="mb-4">{plan.description}</p>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className='self-center'>

            <button
              onClick={() => console.log(`Subscribe to ${plan.id}`)}
              className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4 self-center"
            >
              {plan.id === 'free' ? 'Get Started' : 'Subscribe'}
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
