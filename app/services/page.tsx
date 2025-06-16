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
      key: 'frontend',
      title: 'Frontend Engineering',
      shortText: 'Building responsive and accessible user interfaces using modern frameworks.',
      fullText:
        'Building responsive and accessible user interfaces using modern frameworks like React, Vue, and Angular. I focus on performance, usability, and pixel-perfect design implementation.',
    },
    {
      key: 'backend',
      title: 'Backend Engineering',
      shortText: 'Designing scalable APIs and server-side logic with Node.js, Django, and more.',
      fullText:
        'Designing scalable APIs and server-side logic with Node.js, Django, and more. I prioritize security, efficiency, and integration with databases and third-party services.',
    },
    {
      key: 'mobile',
      title: 'Mobile App Development',
      shortText: 'Creating cross-platform mobile apps with React Native and Flutter.',
      fullText:
        'Creating cross-platform mobile apps with React Native and Flutter that offer seamless user experiences, smooth performance, and native-like look and feel.',
    },
    {
      key: 'devops',
      title: 'DevOps & Cloud Engineering',
      shortText: 'Implementing CI/CD pipelines, infrastructure as code, and cloud deployments.',
      fullText:
        'Implementing CI/CD pipelines, infrastructure as code using tools like Terraform, and deploying scalable applications on cloud platforms like AWS, Azure, and GCP.',
    },
    {
      key: 'design',
      title: 'Design Thinking',
      shortText: 'Applying user-centered design to solve problems and innovate solutions.',
      fullText:
        'Applying user-centered design principles to understand user needs deeply, brainstorm creative solutions, and prototype effective products with iterative feedback.',
    },
  ];

  return (
    <div className={`${inter.className} max-w-5xl mx-auto p-6 mt-8`}>
      <h1 className="text-center text-4xl font-bold mb-10">
        <span className="text-white">Our </span>
        <span className="text-blue-500">Services</span>
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
