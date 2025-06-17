import Image from "next/image";
import linkedInIcon from "../../asset/Frame 135.png";
import facebookIcon from "../../asset/Social Icons.png";
import githubIcon from "../../asset/github.png";
import instagramIcon from "../../asset/Social Icons (1).png";
import myPicture from "../../asset/my-picture.png";
import DON from "../../asset/DON.png";

export default function Home() {
  return (
    <main className="px-4 py-12 text-white">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl mx-auto gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-4">
          <p className="text-gray-400 text-base sm:text-lg">Hello, it&apos;s Me</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            ALADEYELU OLUFEMI SAMUEL
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-blue-500 font-semibold">
            I&apos;m a Software Engineer
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Welcome to my portfolio! Dive in to see how I blend creativity and code
            to build impactful software solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-8 pt-2 [&_a]:hover:scale-100 [&_a]:focus:outline-none [&_a]:outline-none">
            <a
              href="https://tinyurl.com/AOS-linkedln"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:outline-none focus:outline-none"
            >
              <Image src={linkedInIcon} alt="LinkedIn" width={28} height={28} />
            </a>
            <a
              href="https://tinyurl.com/AOS-facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:outline-none focus:outline-none"
            >
              <Image src={facebookIcon} alt="Facebook" width={28} height={28} />
            </a>
            <a
              href="https://tinyurl.com/AOS-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:outline-none focus:outline-none"
            >
              <Image src={instagramIcon} alt="Instagram" width={28} height={28} />
            </a>
            <a
              href="https://tinyurl.com/AOS-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:outline-none focus:outline-none"
            >
              <Image src={githubIcon} alt="GitHub" width={28} height={28} />
            </a>
          </div>

          {/* Download Button */}
          <div className="pt-4">
            <a
              href="/AladeyeluOlufemiSamuelCV.pdf"
              download
              className="inline-block hover:scale-105 transition-transform duration-300"
            >
              <Image src={DON} alt="Download CV" width={150} height={150} />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="bg-gradient-to-br from-blue-300 to-yellow-400 p-1.5 sm:p-2 rounded-full shadow-lg">
            <Image
              src={myPicture}
              alt="Olufemi's Picture"
              width={200}
              height={200}
              priority
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
