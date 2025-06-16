'use client';

import Image from 'next/image';
import Link from 'next/link';
import hamoni from '../../asset/Hamoni.jpeg';
import dentalAlumni from '../../asset/DentalAlumni.jpeg';
import healthEase from '../../asset/HealthEase.jpeg';
import mavericksHub from '../../asset/MavericksHub.jpeg';
import otp from '../../asset/OneTrillionPips.jpeg';
import taskManagement from '../../asset/TaskManagement.webp';
import nexcent from '../../asset/Nexcent.jpeg';
import contact from '../../asset/ContactMng.jpeg';

const projects = [
  {
    title: 'Task Management Service',
    image: taskManagement,
    description: 'A productivity tool with task tracking and Postman documentation.',
    hasDocs: true,
    docsUrl:
      'https://postman.co/workspace/My-Workspace~474229f6-3a36-412e-8f7e-2061bf6e2fe8/collection/33704092-cc455580-a3e5-4803-a710-1ec36241ea80?action=share&creator=33704092',
  },
  {
    title: 'One Trillion Pips Backend',
    image: otp,
    description: 'Trading platform backend. Postman documentation coming soon.',
    hasDocs: true,
    docsUrl:
      'https://postman.co/workspace/My-Workspace~474229f6-3a36-412e-8f7e-2061bf6e2fe8/collection/33704092-677935bf-a753-48b1-9cf5-43fcbb3872c3?action=share&creator=33704092',
  },
  {
    title: 'Hamoni Backend',
    image: hamoni,
    description: 'AI-powered note-taking backend. In progress.',
    hasDocs: false,
  },
  {
    title: 'Dental Alumni Backend',
    image: dentalAlumni,
    description: 'Backend service with alumni management and documentation.',
    hasDocs: true,
    docsUrl:
      'https://postman.co/workspace/My-Workspace~474229f6-3a36-412e-8f7e-2061bf6e2fe8/collection/33704092-b48d610e-0982-483f-8908-bafd2dc6a158?action=share&creator=33704092',
  },
  {
    title: 'HealthEase (Backend + Flutter)',
    image: healthEase,
    description: 'Healthcare platform with full-stack Flutter frontend.',
    hasDocs: false,
  },
  {
    title: 'MavericksHub',
    image: mavericksHub,
    description: 'Media upload platform backend.',
    hasDocs: false,
  },
  {
    title: 'Nexcent Frontend (React)',
    image: nexcent,
    description: 'Responsive UI built with React.',
    hasDocs: false,
    liveUrl: 'https://nexcent-4x36.vercel.app/',
  },
  {
    title: 'Contact Management Service',
    image: contact,
    description: 'Service for managing and organizing contacts.',
    hasDocs: true,
    docsUrl:
      'https://postman.co/workspace/My-Workspace~474229f6-3a36-412e-8f7e-2061bf6e2fe8/collection/33704092-c1ea630d-9251-4872-bf0f-af97d4f25b2f?action=share&creator=33704092',
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#25282A] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">My </span>
          <span className="text-blue-500">Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map(({ title, image, description, hasDocs, docsUrl, liveUrl }, index) => (
            <div
              key={index}
              className="bg-[#1e1f22] text-white rounded-xl overflow-hidden shadow-md w-full max-w-md mx-auto"
            >
              <Image src={image} alt={title} className="w-full h-36 object-cover" />

              <div className="p-4 flex flex-col justify-between h-56">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-sm flex-grow">{description}</p>

                <div className="mt-4 flex gap-2 justify-center flex-wrap">
                  {hasDocs && docsUrl && (
                    <Link
                      href={docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition"
                    >
                      View Docs
                    </Link>
                  )}

                  {liveUrl && (
                    <Link
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition"
                    >
                      View Live
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
