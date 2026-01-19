import React from "react";

const Terms: React.FC = () => {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-10">
          Terms & Conditions
        </h1>

        {/* Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed font-medium">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Introduction
            </h2>
            <p>
              Welcome to <strong>BidSpark365</strong> (“we”, “our”, “us”). By
              accessing or using our website{" "}
              <strong>www.bidspark365.com</strong>, you agree to comply with and
              be bound by these Terms & Conditions. We recommend that you read
              them carefully before using our services.
            </p>
            <p className="mt-4">
              If you do not agree with any part of these terms, you should
              discontinue use of the website. We reserve the right to update or
              modify these Terms & Conditions at any time. Any changes will be
              posted on this page, and continued use of the website will
              constitute acceptance of those changes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              About Our Services
            </h2>
            <p>
              BidSpark365 provides professional consultancy and support services
              related to government tenders, e-procurement, GeM onboarding, OEM
              assistance, documentation support, training, and related advisory
              services.
            </p>
            <p className="mt-4">
              All services offered by BidSpark365 are provided on a paid
              consultancy basis, unless explicitly stated otherwise. Service
              details, scope, timelines, and fees are communicated separately
              and may vary based on client requirements.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Right to Amend, Reject, or Withdraw Services
            </h2>
            <p>
              BidSpark365 reserves the right to amend, reject, suspend, or
              withdraw any service at its sole discretion, with or without prior
              notice, including but not limited to cases of non-compliance,
              misuse, or operational limitations.
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              User Responsibilities & Indemnification
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Use the website and services only for lawful purposes</li>
              <li>
                Not misuse, copy, or exploit any part of the services without
                authorization
              </li>
            </ul>
            <p className="mt-4">
              You agree to indemnify and hold BidSpark365 harmless from any
              claims, losses, liabilities, damages, or expenses arising from
              your breach of these Terms & Conditions.
            </p>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              No Liability for Third-Party Content
            </h2>
            <p>
              BidSpark365 may reference or link to third-party platforms,
              portals, or resources (including government portals). We do not
              control or guarantee the accuracy, availability, or content of
              such third-party services and shall not be held responsible for
              them.
            </p>
          </div>

          {/* Confidentiality */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Confidentiality
            </h2>
            <p>
              Any information shared between BidSpark365 and its clients,
              including tender details, documents, credentials, or business
              data, shall be treated as confidential. Clients are advised to
              enter into mutual confidentiality agreements where appropriate.
            </p>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Privacy & Data Usage
            </h2>
            <p>
              By submitting your contact details (name, email, phone number,
              etc.) through our website, you consent to BidSpark365 collecting
              and processing your personal data for service-related
              communication and marketing purposes.
            </p>
            <p className="mt-4">
              You may opt out of marketing communications at any time by
              contacting us at{" "}
              <a
                href="mailto:bidspark365@gmail.com"
                className="text-orange-600 font-bold hover:underline"
              >
                bidspark365@gmail.com
              </a>
              .
            </p>
          </div>

          {/* IP */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Intellectual Property Rights
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              icons, and design elements, is the property of BidSpark365 and is
              protected by applicable intellectual property laws.
            </p>
            <p className="mt-4">
              You may view or print a single copy for personal, non-commercial
              use only. Any reproduction, redistribution, or commercial use
              without written permission is strictly prohibited.
            </p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p>
              BidSpark365 shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use or
              inability to use our website or services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Contact & Complaints
            </h2>
            <p>
              If you have any questions, concerns, or complaints regarding these
              Terms & Conditions or our services, please contact us at:
            </p>
            <p className="mt-3 font-bold">
              📧{" "}
              <a
                href="mailto:bidspark365@gmail.com"
                className="text-orange-600 hover:underline"
              >
            bidspark365@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
