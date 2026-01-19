import React from "react";

const Privacy: React.FC = () => {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-500 font-semibold mb-12">
          Last updated: 19 January 2025
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed font-medium">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Introduction
            </h2>
            <p>
              BidSpark365 (“we”, “our”, or “us”) is committed to protecting the
              privacy of its users in accordance with applicable laws in India,
              including data protection and information technology regulations.
            </p>
            <p className="mt-4">
              This Privacy Policy explains how we collect, use, store, process,
              and disclose your personal data when you access or use our website{" "}
              <strong>www.bidspark365.com</strong>, associated portals,
              applications, or when you engage with our services.
            </p>
            <p className="mt-4">
              By using our website or services, you agree to the terms of this
              Privacy Policy. If you do not agree, please refrain from using our
              platform.
            </p>
          </div>

          {/* Information You Provide */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Information You Provide to Us
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accepting this Privacy Policy</li>
              <li>Filling out contact or enquiry forms</li>
              <li>Subscribing to our services</li>
              <li>
                Communicating with us via email, phone, or other channels
              </li>
              <li>Entering into service or consultancy agreements</li>
            </ul>
            <p className="mt-4">
              This information may include personal, professional, business,
              financial, or service-related data necessary to deliver our
              services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
              Personal Data
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and address</li>
              <li>Business or company details</li>
              <li>Account credentials (if applicable)</li>
              <li>Payment-related details (if enabled)</li>
              <li>Queries, feedback, and documents voluntarily shared</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              Non-Personal Data
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type, device type, operating system</li>
              <li>Website usage and interaction data</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              Cookies & Tracking Technologies
            </h3>
            <p>
              We use cookies and similar technologies to improve functionality,
              analyze traffic, and enhance user experience. You may manage
              cookies through your browser settings.
            </p>
          </div>

          {/* Other Sources */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Information from Other Sources
            </h2>
            <p>
              We may receive information from business partners, service
              providers, analytics tools, payment processors, or other platforms
              operated by BidSpark365 strictly for service delivery and
              improvement.
            </p>
          </div>

          {/* Usage */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing consultancy and customer support</li>
              <li>Responding to enquiries and communications</li>
              <li>Improving website and service quality</li>
              <li>Complying with legal and regulatory obligations</li>
              <li>
                Marketing communications (you may opt out at any time)
              </li>
            </ul>
            <p className="mt-4 font-semibold">
              We do not sell your personal data to third parties.
            </p>
          </div>

          {/* Sharing */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Sharing of Information
            </h2>
            <p>
              Data may be shared only as required by law or with trusted
              third-party service providers assisting in hosting, analytics,
              payments, or communications, under strict confidentiality
              obligations.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Data Security
            </h2>
            <p>
              We implement industry-standard safeguards including access
              controls, secure servers, and encryption where applicable.
              However, no internet transmission is completely secure and data is
              shared at your own risk.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access, correct, or delete your data</li>
              <li>Right to withdraw consent</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right against automated decision-making</li>
              <li>
                Right to escalate complaints to regulatory authorities such as
                CERT-In or the Data Protection Board of India
              </li>
            </ul>
          </div>

          {/* Retention */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Data Retention
            </h2>
            <p>
              Personal data is retained only as long as necessary for service
              delivery or legal compliance and is securely deleted thereafter.
            </p>
          </div>

          {/* External Links */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              External Websites
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their content or privacy practices and encourage
              you to review their policies separately.
            </p>
          </div>

          {/* Legal Disclosure */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Legal Disclosure
            </h2>
            <p>
              We may disclose information if required by law or necessary to
              protect rights, ensure safety, investigate fraud, or comply with
              legal proceedings.
            </p>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Updates to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated periodically. Changes will be
              reflected on this page with a revised “Last Updated” date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at:
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

export default Privacy;
