'use client';

import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Services() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const services = [
    {
      key: 'backend',
      title: 'Backend Engineering',
      shortText: 'Building scalable APIs and microservices with Java, Python, and Node.js.',
      fullText:
        'Expert in designing and developing scalable backend systems and microservices using Java (Spring Boot), Python (Django), and Node.js. I focus on system architecture, API design, secure integrations, and optimizing performance for reliable and maintainable software.',
    },
    {
      key: 'web3',
      title: 'Web3 & Blockchain Programming',
      shortText: 'Developing decentralized applications and smart contracts.',
      fullText:
        'Building secure and efficient decentralized applications using blockchain platforms such as Sui and Ethereum. Experienced in smart contract development, blockchain integrations, and leveraging Web3 technologies to bring transparency and innovation to financial products.',
    },
    {
      key: 'designthinking',
      title: 'Design Thinking & Product Strategy',
      shortText: 'Applying user-centered design and lean startup methodologies.',
      fullText:
        'Applying design thinking and lean startup principles to deeply understand user needs, frame problems, ideate solutions, and build minimum viable products. Skilled in user research, rapid prototyping, and iterative validation to deliver impactful, user-centric software.',
    },
    {
      key: 'devops',
      title: 'DevOps & Cloud Engineering',
      shortText: 'Implementing CI/CD, containerization, and cloud infrastructure.',
      fullText:
        'Hands-on experience with Docker, Kubernetes, Helm, and cloud platforms including Google Cloud Platform and AWS. I build and maintain CI/CD pipelines, infrastructure as code, and scalable deployments to ensure fast, reliable delivery and operational excellence.',
    },
    {
      key: 'entrepreneurship',
      title: 'Entrepreneurship & Business Innovation',
      shortText: 'Driving business model innovation and strategic planning.',
      fullText:
        'Trained in entrepreneurship with a focus on business model innovation, market analysis, and strategic execution. Experienced in startup operations, value proposition design, and aligning technology solutions with business goals for sustainable growth.',
    },
  ];

  return (
    <div className={`${inter.className} max-w-5xl mx-auto p-6 mt-8`}>
      <h1 className="text-center text-4xl font-bold mb-10">
        <span className="text-white">What </span>
        <span className="text-blue-500">I do</span>
      </h1>

      <div className="flex gap-8 overflow-x-auto max-w-full px-2 py-4">
        {services.map(({ key, title, shortText, fullText }) => {
          const isExpanded = expanded[key] || false;
          return (
            <div
              key={key}
              className="bg-[#1e1f22] text-white p-5 rounded-lg shadow-md flex flex-col justify-between flex-shrink-0"
              style={{ aspectRatio: '1 / 1', width: '250px', minWidth: '250px' }}
            >
              <h2 className="text-white text-lg font-semibold mb-2 font-inter">{title}</h2>
              <p className="text-sm flex-grow">{isExpanded ? fullText : shortText}</p>
              <button
                onClick={() => toggleExpand(key)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mx-auto transition text-sm"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
