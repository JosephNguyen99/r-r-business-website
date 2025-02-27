import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page for R|N Services LLC",
  description: "Contact Page for R|N Services LLC",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Needs work, will refactor this in later when have more time."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
