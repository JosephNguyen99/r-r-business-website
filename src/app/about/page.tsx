import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSections from "@/components/About/AboutSections";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About R|N Services, LLC"
        description="RN Services, LLC provides residential general contractor services including installation, service and repair for roofing, privacy fences, painting, windows, doors, garage doors and more. They also offer kitchen, bathroom and basement remodeling and backflow testing."
      /> */}

      <AboutSections />
      {/* Insert "Our Process Section component" */}
      {/* Insert "Our Quality Section component" */}
      {/* Insert "Our BBB Credited Section component" */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Contact />
    </>
  );
};

export default AboutPage;
