import Image from "next/image";
import linkedInIcon from "../../asset/Frame 135.png";
import facebookIcon from "../../asset/Social Icons.png";
import twitterIcon from "../../asset/Social Icons (2).png";
import instagramIcon from "../../asset/Social Icons (1).png";
import myPicture from "../../asset/my-picture.png";
import DON from "../../asset/DON.png";

export default function Home() {
  return (
    <main className="m-0 p-6 text-white min-h-[calc(100vh-96px)]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-2/3 space-y-4">
          <p className="text-gray-400 text-lg">Hello, it&apos;s Me</p>
          <h1 className="text-3xl font-bold">ALADEYELU OLUFEMI SAMUEL</h1>
          <h2 className="text-xl text-blue-500 font-semibold">I'm a Software Engineer</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to my portfolio! Dive in to see how I blend 
            creativity and code to build impactful software solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-16 pt-4">
            <a href="https://www.linkedin.com/in/aladeyelu-olufemi-695350198" target="_blank" rel="noopener noreferrer">
              <Image src={linkedInIcon} alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="https://www.facebook.com/me/" target="_blank" rel="noopener noreferrer">
              <Image src={facebookIcon} alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/chef__fizzy/profilecard/?igsh=MXRnMWdjd2lrbjI0eA==" target="_blank" rel="noopener noreferrer">
              <Image src={instagramIcon} alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <Image src={twitterIcon} alt="Twitter" width={32} height={32} />
            </a>
          </div>

          {/* Download Button */}
          <div className="pt-6">
            <a
              href="/AladeyeluOlufemiSamuelCV.pdf"
              download
              className="inline-block hover:scale-105 transition-transform duration-300"
            >
              <Image src={DON} alt="Download CV" width={180} height={180} />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end -mt-4">
          <div className="bg-gradient-to-br from-blue-300 to-yellow-400 p-2 rounded-full shadow-lg">
            <Image
              src={myPicture}
              alt="Olufemi's Picture"
              width={220}
              height={220}
              priority
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
