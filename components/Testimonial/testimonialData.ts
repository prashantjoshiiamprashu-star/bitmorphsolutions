import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "CTO @FinanceFlow",
    image: image1,
    content:
      "TechNova Solutions transformed our legacy systems into a modern, scalable architecture. Their cloud migration expertise reduced our operational costs by 40% while improving performance dramatically.",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "CEO @HealthTech Solutions",
    image: image2,
    content:
      "The AI-powered analytics platform they built for us has revolutionized our patient care. We can now predict health outcomes with 95% accuracy, leading to better patient experiences.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "VP Engineering @RetailGiant",
    image: image1,
    content:
      "Their DevOps implementation cut our deployment time from hours to minutes. The automated CI/CD pipeline and monitoring solutions have made our development team 3x more productive.",
  },
  {
    id: 4,
    name: "David Wilson",
    designation: "Founder @StartupVenture",
    image: image2,
    content:
      "From concept to production in just 8 weeks! TechNova's enterprise development team delivered a robust, scalable platform that handles millions of transactions flawlessly.",
  },
];
