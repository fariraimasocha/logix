import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="  text-4xl md:text-6xl font-extrabold text-blue-900 dark:text-white mb-4 max-sm:text-3xl">
            Empowering Startup Founders
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 max-sm:text-base">
            Discover free, open-source tools designed to help you build and
            launch your products with confidence.
          </p>
          <Link href="/tools">
            <Button className="bg-blue-600  font-bold text-white hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105 px-6 py-6">
              Explore Free Tools
            </Button>
          </Link>

          <div className="flex items-center justify-center mt-8">
            <Image
              src="/hero.jpg"
              width={900}
              height={700}
              alt="Hero"
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="mt-12 text-left max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6 text-center max-sm:text-2xl">
              Build with Confidence, Launch with Impact
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 text-center max-sm:text-base">
              Logix provides you with the essential tools to transform ideas
              into reality. From ideation to scaling, our resources are designed
              to accelerate your progress and enhance your impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700 dark:text-gray-400">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start">
                <h3 className="font-semibold text-blue-900 dark:text-white mb-2">
                  💡 Actionable Insights
                </h3>
                <p>
                  Get real-time data and feedback to validate ideas, refine
                  strategies, and make informed decisions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start">
                <h3 className="font-semibold text-blue-900 dark:text-white mb-2">
                  🌐 Open-Source Flexibility
                </h3>
                <p>
                  Access and customize tools freely. Adapt Logix to fit your
                  unique vision and goals.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start">
                <h3 className="font-semibold text-blue-900 dark:text-white mb-2">
                  🚀 Scale with Ease
                </h3>
                <p>
                  Streamlined tools and resources enable you to focus on growth
                  and expansion, not technical hurdles.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start">
                <h3 className="font-semibold text-blue-900 dark:text-white mb-2">
                  🤝 Supportive Community
                </h3>
                <p>
                  Connect, collaborate, and grow with a network of founders
                  sharing their experiences and insights.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start">
                <h3 className="font-semibold text-blue-900 dark:text-white mb-2">
                  📈 Growth-Focused
                </h3>
                <p>
                  Our tools are tailored to help validate, track, and scale your
                  startup effectively.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start">
                <h3 className="font-semibold text-blue-900 dark:text-white mb-2">
                  🔓 Free Access
                </h3>
                <p>
                  All tools and resources are available at no cost, empowering
                  you to build without barriers.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Link href="#">
                <Button className="bg-blue-600 px-6 py-6 font-bold text-white hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4 max-sm:text-2xl">
              Contributors
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-sm:text-base">
              Meet the contributors who make Logix possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-center items-center">
              {[
                {
                  name: "Farirai Masocha",
                  image: "",
                  linkedin: "https://linkedin.com/in/alice-johnson",
                  github: "https://github.com/fariraimasocha",
                  twitter: "#",
                },
                {
                  name: "Joseph Williams",
                  image: "/contributors/JosephWilliams.png",
                  linkedin:
                    "https://www.linkedin.com/in/joseph-williams-1a7533243/",
                  github: "https://github.com/smith911-tech",
                  twitter: "https://x.com/TheRealJoseph01",
                },
                {
                  name: "Nil",
                  image: "",
                  linkedin: "#",
                  github: "#",
                  twitter: "#",
                },
              ].map((contributor) => (
                <div
                  key={contributor.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                >
                  {contributor.image ? (
                    <Image
                      src={contributor.image}
                      width={120}
                      height={120}
                      alt={contributor.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
                    />
                  ) : (
                    <FaCircleUser className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg text-gray-500" />
                  )}
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                    {contributor.name}
                  </h3>
                  <div className="flex items-center justify-center mt-4 space-x-4">
                    <a
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href={contributor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href={contributor.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaSquareXTwitter className="text-2xl" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 py-12 mt-12  shadow-md">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4 max-sm:text-2xl">
                Join the Logix Community
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto max-sm:text-base">
                Connect with founders, share ideas, and access exclusive
                resources. The Logix community is here to support your journey.
              </p>
              <Link href="#">
                <Button className="bg-blue-600 px-6 py-6 font-bold text-white hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105">
                  Become a Member
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
