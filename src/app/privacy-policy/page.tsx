import React from "react";

const page = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: 02 May, 2025
        </p>

        <p className="mb-4">
          This Privacy Policy describes how we collect, use, and protect your
          personal information when you use our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          contact details, and any other information you provide voluntarily. We
          may also collect non-personal data like browser type, IP address, and
          usage data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc ml-5 mb-4">
          <li>Provide and maintain our services</li>
          <li>Communicate with you</li>
          <li>Improve our website and user experience</li>
          <li>
            Send updates, newsletters, and promotional content (only if you
            opt-in)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Cookies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance your
          experience. You can choose to disable cookies through your browser
          settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Third-Party Services
        </h2>
        <p className="mb-4">
          We may use third-party services for analytics, advertising, or payment
          processing. These providers may collect information as governed by
          their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your personal
          data. However, no method of transmission over the internet is 100%
          secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. To exercise these rights, contact us at the email below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, contact us at{" "}
          <a
            href="mailto:shazid.dev@gmail.com"
            className="text-blue-600 underline"
          >
            shazid.dev@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default page;
