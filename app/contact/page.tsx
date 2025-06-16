'use client';

import Image from 'next/image';
import whatsappIcon from '../../asset/Whatsapp-logo.jpeg';
import mailIcon from '../../asset/Mail-icon.jpeg';

export default function Contact() {
  return (
    <section className="text-white px-4 py-16 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <div className="flex flex-col items-center gap-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/2347017097004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:scale-105 transition"
        >
          <Image
            src={whatsappIcon}
            alt="WhatsApp"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-lg">Chat on WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="mailto:sammyalade4jesus@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:scale-105 transition"
        >
          <Image
            src={mailIcon}
            alt="Email"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-lg">Send an Email</span>
        </a>
      </div>
    </section>
  );
}
