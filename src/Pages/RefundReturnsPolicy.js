import React from "react";
import { Helmet } from "react-helmet";
import BannerSection from "../Components/HeroSection";

const RefundAndReturn = () => {
  return (
    <>
      {/* SEO TITLE + META DESCRIPTION */}
      <Helmet>
        <title>Refund And Return | Digital Partner</title>
        <meta
          name="description"
          content="Read Digital Partner’s Refund And Return to understand your rights, obligations, and our policies regarding services, payments, data handling, and website usage."
        />
      </Helmet>

      {/* Banner Section */}
      <BannerSection
        title="Refund And Return"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Refund And Return" },
        ]}
      />

      {/* Main Content */}
      <div style={{ width: "1200px", margin: "0 auto", padding: "20px" }}>
        <h2>Refund and Return Policy</h2>

        <p>
          At Digital Partner, we strive to provide high-quality services and products. However, we understand that there may be occasions when you are not completely satisfied. This Refund and Return Policy outlines your rights and obligations.
        </p>

        <h3>1. Refunds</h3>
        <p>
          a) Digital Partner does not offer a money-back guarantee on services purchased. All sales and services are final unless otherwise stated in a specific agreement.
        </p>
        <p>
          b) If there is an issue with a service provided, please contact our support team immediately. We will assess the situation and may provide a partial refund, credit, or alternative solution at our discretion.
        </p>

        <h3>2. Chargebacks</h3>
        <p>
          a) Customers agree not to initiate chargebacks for transactions processed by Digital Partner. Any dispute or concern should be addressed directly with our customer support team to reach a resolution.
        </p>

        <h3>3. Dispute Resolution</h3>
        <p>
          a) In the event of a dispute regarding services or payments, customers are encouraged to contact Digital Partner’s support team at <a href="mailto:info@digitalpartner.ca">info@digitalpartner.ca</a> for prompt assistance and resolution.
        </p>

        <h3>4. Terms Acceptance</h3>
        <p>
          a) By purchasing services from Digital Partner, you acknowledge and agree to abide by the terms outlined in this Refund and Return Policy.
        </p>

        <h3>5. Modification of Policy</h3>
        <p>
          a) Digital Partner reserves the right to modify or update this Refund and Return Policy at any time without prior notice. Customers are responsible for reviewing this policy periodically for any changes.
        </p>

        <h3>6. Legal Recourse</h3>
        <p>
          a) Any attempt to circumvent the terms of this policy, including unwarranted chargebacks, may result in legal action to recover damages and associated costs.
        </p>

        <h3>7. Contact Information</h3>
        <p>
          a) For any questions regarding this Refund and Return Policy, please contact us at <a href="mailto:info@digitalpartner.ca">info@digitalpartner.ca</a>.
        </p>
      </div>
    </>
  );
};

export default RefundAndReturn;
