"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert(result.message);
        setEmail("");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🚀 Bitmorph Solutions - Innovation Driven Development
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Transforming Ideas into {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Digital Solutions
                </span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-black dark:text-white">
                We empower enterprises with cutting-edge technology solutions including cloud infrastructure, AI/ML services, custom software development, and digital transformation strategies that drive growth and innovation.
              </p>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Get Started Today
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Our Services
                </a>
              </div>

              <div className="mt-8 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary"></div>
                    <div className="h-10 w-10 rounded-full bg-blue-500"></div>
                    <div className="h-10 w-10 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <div className="font-semibold">500+ Projects Delivered</div>
                    <div>Trusted by leading enterprises</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute   z-90 "
                />
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l"
                    src="/images/hero/tech-hero.svg"
                    alt="Bitmorph Tech Solutions"
                    fill
                  />
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
