"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import client1 from '../public/client1.png';
import client2 from '../public/client2.png';
import client3 from '../public/client3.png';
import client4 from '../public/client4.png';
import client5 from '../public/client5.png';

export const CLIENTS = [
  { alt: 'client1', logo: client1 },
  { alt: 'client2', logo: client2 },
  { alt: 'client3', logo: client3 },
  { alt: 'client4', logo: client4 },
  { alt: 'client5', logo: client5 },
];
const testimonials = [
  {
    name: "AJ",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Danny",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Jack",
    avatar: "M",
    title: "Web Weveloper",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Jen",
    avatar: "M",
    title: "Content Creator",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <>
    <section className="relative">
      <div
        className="overflow-hidden
        flex
        after:content-['']
        after:dark:from-brand-dark
        after:to-transparent
        after:from-background
        after:bg-gradient-to-l
        after:right-0
        after:bottom-0
        after:top-0
        after:w-20
        after:z-10
        after:absolute

        before:content-['']
        before:dark:from-brand-dark
        before:to-transparent
        before:from-background
        before:bg-gradient-to-r
        before:left-0
        before:top-0
        before:bottom-0
        before:w-20
        before:z-10
        before:absolute
      "
      >
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex
              flex-nowrap
              animate-slide-left-to-right
            "
          >
            {CLIENTS.map((client) => (
              <div
                key={client.alt}
                className="relative
                  w-[200px]
                  m-20
                  shrink-0
                  flex
                  items-center
                "
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={200}
                  className="object-contain max-w-none"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide-left-to-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-slide-left-to-right {
          animation: slide-left-to-right 18s linear infinite;
        }
      `}</style>
    </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="border-2 shadow-lg dark:shadow-yellow-500 dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
    </>
  )
}
