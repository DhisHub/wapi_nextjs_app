import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description={
          <>
            If you encounter any issues with the API or have technical
            questions, please fill out the form below or report them on our{" "}
            <a
              href="https://github.com/DhisHub/wapi_nextjs_app/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub Issues page
            </a>
            .
          </>
        }
      />

      <Contact />
    </>
  );
};

export default ContactPage;
