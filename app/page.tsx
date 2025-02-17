"use client"; // Add this line at the top to mark this file as a Client Component

import React, { useEffect, useState } from "react";
import { Bot } from "lucide-react";
import { BioGenerator } from "./components/BioGenerator";
import Image from "next/image";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set state to true once the component mounts
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 font-sans antialiased relative overflow-hidden">
      {/* Background particles effect, only on client-side */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-300/20 dark:bg-purple-600/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="container max-w-4xl mx-auto px-4 py-8 relative">
        <div className="mt-5 text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4 hover:scale-105 transition-transform duration-300">
            Craft Your Perfect Bio
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-md md:text-xl max-w-2xl mx-auto mb-8 transform hover:translate-y-1 transition-transform duration-300 antialiased">
            Transform your professional story into an engaging bio that captures
            attention and showcases your unique value on LinkedIn, your personal
            website, or portfolio
          </p>

          <div className="flex flex-col items-center space-y-5">
            <span className="text-sm  antialiased">Powered by</span>
            <div className="mt-1 flex items-center justify-center gap-3 opacity-0 animate-slide-up">
              <div className="-mt-2 flex items-center gap-3 px-4 py-1 rounded-full bg-purple-200 dark:bg-purple-900/30">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/img/llama.png"
                    alt="Meta"
                    width={80}
                    height={0}
                    className="object-contain  transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/img/mistral.svg"
                    alt="Mistral"
                    width={80}
                    height={50}
                    className="object-contain  transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="-mt-0 -ml-1.5 flex items-center justify-center">
                  <Image
                    src="/assets/img/cloudflare.png"
                    alt="Cloudflare"
                    width={90}
                    height={80}
                    className="object-contain  transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-10 opacity-0 animate-fade-in-delayed">
          <BioGenerator />
        </div>
      </div>
      <footer className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-4 mt-12">
        <div className="container max-w-4xl mx-auto text-center">
          <hr className="border-gray-300 dark:border-gray-700 mb-4" />
          <p className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-300">
            Crafted with ❤️ by{" "}
            <span className="font-semibold">Aldo Tobing</span>
          </p>
          <div className="flex justify-center items-center mt-2">
            <a
              href="https://github.com/aldotobing"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="/assets/img/github-mark.png"
                alt="GitHub"
                className="h-4 w-4 hover:opacity-80 transition-opacity duration-300"
                loading="lazy"
              />
            </a>
            <a
              href="https://twitter.com/aldo_tobing"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="/assets/img/x.png"
                alt="Twitter"
                className="h-3.5 w-4 hover:opacity-80 transition-opacity duration-300"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
