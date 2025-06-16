'use client';

import Image from 'next/image';
import whatsappIcon from '../../asset/Whatsapp-logo.jpeg';
import mailIcon from '../../asset/Mail-icon.jpeg';

export default function Contact() {
  return (
    <section className="text-white px-4 pt-4 pb-6 flex flex-col items-center bg-[#1c2226]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* WhatsApp */}
        <a
          href="https://wa.me/2347017097004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:scale-105 transition-transform duration-200 bg-[#2a2e33] p-4 rounded-xl"
        >
          <Image
            src={whatsappIcon}
            alt="WhatsApp"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-base sm:text-lg">Chat on WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="mailto:sammyalade4jesus@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:scale-105 transition-transform duration-200 bg-[#2a2e33] p-4 rounded-xl"
        >
          <Image
            src={mailIcon}
            alt="Email"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-base sm:text-lg">Send an Email</span>
        </a>
      </div>
    </section>
  );
}
