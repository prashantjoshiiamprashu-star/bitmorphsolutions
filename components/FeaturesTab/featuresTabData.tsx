import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Scalable Cloud Infrastructure Solutions",
    desc1: `Deploy and manage your applications with confidence using our enterprise-grade cloud infrastructure. We provide automated scaling, load balancing, and multi-region deployment capabilities.`,
    desc2: `Our cloud solutions include AWS, Azure, and GCP integrations with 99.99% uptime SLA, disaster recovery, and comprehensive monitoring and alerting systems.`,
    image: "/images/features/cloud-infrastructure.svg",
    imageDark: "/images/features/cloud-infrastructure.svg",
  },
  {
    id: "tabTwo",
    title: "Advanced AI & Machine Learning Platforms",
    desc1: `Leverage cutting-edge AI/ML technologies to automate processes, predict outcomes, and gain valuable insights from your data. Our solutions include computer vision, NLP, and predictive analytics.`,
    desc2: `We implement custom ML models, real-time data processing pipelines, and intelligent automation systems that adapt and learn from your business patterns to drive efficiency.`,
    image: "/images/features/ai-ml-platform.svg",
    imageDark: "/images/features/ai-ml-platform.svg",
  },
  {
    id: "tabThree",
    title: "Enterprise-Grade Security & Compliance",
    desc1: `Protect your digital assets with our comprehensive security framework including zero-trust architecture, advanced threat detection, and compliance management.`,
    desc2: `Our security solutions meet SOC 2, GDPR, HIPAA, and PCI DSS requirements with continuous monitoring, vulnerability assessments, and incident response capabilities.`,
    image: "/images/features/enterprise-security.svg",
    imageDark: "/images/features/enterprise-security.svg",
  },
];

export default featuresTabData;
