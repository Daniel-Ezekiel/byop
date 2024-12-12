import Card from "../global/Card";
import SectionHeading from "../global/SectionHeading";
import {
  HandshakeIcon,
  KeyRoundIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";

const featuresList = [
  {
    icon: <ZapIcon className='text-sky-600' />,
    name: "Lightweight and Fast",
    description:
      "Built for speed—load times are kept minimal, ensuring a seamless user experience.",
  },
  {
    icon: <MonitorSmartphoneIcon className='text-sky-600' />,
    name: "Modern and Responsive",
    description:
      "Designed with a modern, mobile-first approach, ensuring your portfolio looks great on any device.",
  },
  {
    icon: <RocketIcon className='text-sky-600' />,
    name: "Quick and Easy Setup",
    description:
      "Create your portfolio in just a few clicks. No technical expertise required.",
  },
  {
    icon: <TrendingUpIcon className='text-sky-600' />,
    name: "Excellent Lighthouse Performance",
    description:
      "Optimized for web performance, achieving high scores in Google Lighthouse audits for speed, accessibility, and more.",
  },
  {
    icon: <HandshakeIcon className='text-sky-600' />,
    name: "SEO Friendly",
    description:
      "Boost your online presence with SEO-optimized portfolio pages, helping you rank better in search engines with the right setup",
  },
  {
    icon: <KeyRoundIcon className='text-sky-600' />,
    name: "Privacy and Security",
    description:
      "Your data is stored securely, and you maintain full control over what is shared and displayed.",
  },
];

function Features() {
  return (
    <section id='features' className='mt-20 mb-20 flex flex-col gap-8'>
      <SectionHeading title='features' tagline='why use byop?' />

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {featuresList.map((feature, i) => (
          <Card
            key={i}
            icon={feature.icon}
            name={feature.name}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
