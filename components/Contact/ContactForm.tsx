"use client";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    
    // Basic validation
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const messageText = formData.get('message') as string;
    const consent = formData.get('consent') as string;

    if (!fullName || !email || !messageText) {
      setMessage("Please fill in all required fields (Name, Email, Message)");
      setIsSubmitting(false);
      return;
    }

    if (!consent) {
      setMessage("Please agree to our Privacy Policy and Terms of Service");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        setMessage("✅ " + result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage("❌ " + result.message);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
        Let's Build Something Amazing Together
      </h2>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${message.startsWith('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
          <input
            name="fullName"
            type="text"
            placeholder="Full name"
            required
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />
        </div>

        <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
          <input
            name="company"
            type="text"
            placeholder="Company"
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />
        </div>

        <div className="mb-11.5 flex">
          <textarea
            name="message"
            placeholder="Tell us about your project requirements and goals"
            rows={4}
            required
            className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
          ></textarea>
        </div>

        <div className="flex flex-wrap gap-4 xl:justify-between">
          <div className="mb-4 flex items-start gap-3 md:mb-0">
            <div className="relative flex items-center">
              <input
                id="default-checkbox"
                name="consent"
                type="checkbox"
                value="agreed"
                required
                className="h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-300 bg-white checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-primary"
              />
              <svg
                className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <label
              htmlFor="default-checkbox"
              className="cursor-pointer select-none text-sm leading-relaxed text-black dark:text-white"
            >
              I agree to Bitmorph's Privacy Policy and Terms of Service, and consent to being contacted about our services.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="send message"
            className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <svg
              className="fill-white"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;