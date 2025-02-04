export const dynamic = "force-static"; // optional

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

const About = () => {
  return <div>About</div>;
};

export default About;
