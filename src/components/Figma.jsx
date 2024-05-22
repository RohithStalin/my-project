import React from "react";

const Figma = () => {
  return (
    <div className="card mb-5">
      <h1 className="heading">AnyUNI Refund Policy</h1>
      <div className="container" style={{ paddingLeft: "70px" }}>
        <div className="">
          <h2 className="subHeading">Purpose and Scope</h2>
          <p className="description">
            AnyUNI's Refund Policy delineates the terms under which refunds are
            issued for our chargeable services, noting that the majority of our
            offerings are free. This policy forms a crucial component of our
            agreement with users.
          </p>
        </div>
        <div className="">
          <h2 className="subHeading">Refund</h2>
          <p className="description">
            The process by which AnyUNI returns payments received from
            customers, contractors, or students for services rendered.
          </p>
        </div>
        <div className="">
          <h2 className="subHeading">Policy Details</h2>
          <p className="description">
            By registering for and utilizing AnyUNI's services, users implicitly
            agree to this Refund Policy. Users who do not agree may discontinue
            using our services and request the deletion of their accounts.
            However, this policy will continue to govern transactions made prior
            to account deletion.
          </p>
        </div>
      </div>
      <div className="rejectionContainer" style={{ paddingRight: "80px" }}>
        <h1 className="rejectionScenario">Exceptional Circumstances</h1>
        <ul className="rejectionDescripton" style={{ paddingBottom: "10px" }}>
          <li className="list">
            Service Not Provided: If AnyUNI fails to deliver the agreed-upon
            services within the specified timeframe or to the agreed-upon
            standard, the student may request a refund.
          </li>
          <li className="list">
            Cancellation Policy: If a student cancels their application or
            service request within a specified period, AnyUNI's cancellation
            policy applies.
          </li>
          <li className="list">
            Duplicate Payment: In instances of accidental duplicate payments.
          </li>
          <li className="list">
            Quality of Service: If a student can demonstrate that the service
            provided by AnyUNI was subpar and did not meet our promised
            standards, they may be eligible for a refund.
          </li>
          <li className="list">
            Change in Circumstances: Refunds may be considered if the client's
            circumstances change in a manner that renders the service
            unnecessary or impossible to utilize, subject to AnyUNI's policies
            on such matters.
          </li>
          <li className="list">
            Force Majeure: Refers to unforeseeable and uncontrollable events,
            encompassing natural disasters, acts of people (strikes, riots,
            wars), etc. In the context of service provision and contractual
            obligations, Force Majeure events are significant considerations,
            particularly concerning refunds.
          </li>
          <li className="list">
            It's important to note that refunds are not issued for mere changes
            of mind.
          </li>
        </ul>
      </div>
      <div style={{ paddingRight: "80px" }}>
        <h1 className="Services">Third-Party Services</h1>
        <p className="termsDescription">
          AnyUNI collaborates with third-party services (e.g., universities,
          accommodation providers, health cover vendors) and may receive
          referral commissions. AnyUNI does not handle direct refunds for these
          third-party payments, and clients are responsible for understanding
          and adhering to the refund policies of these entities.
        </p>
      </div>
      <div className="termsContainer">
        <h1 className="termsHeading">Additional terms</h1>
        <p className="description">
          <span className="mySpan">Exclusions:</span> AnyUNI's charges do not
          encompass external fees such as university application fees, courier
          charges, or score reporting fees. These are the responsibility of the
          student.
        </p>
        <br />
        <p>
          <span className="mySpan">Payment Terms: </span>Full payment is
          required within the specified timeframe for service continuity and
          editing work. The fee outlined in this agreement is non-refundable,
          except for enrollment fees, which may be refunded within 3 days of
          enrollment.
        </p>
        <br />
        <p>
          <span className="mySpan">Validity: </span>Fees are applicable for a
          single intake only. In the event of deferment, they are limited to the
          immediate subsequent intake.
        </p>
        <br />
        <p>
          <span className="mySpan">Liability:</span> AnyUNI bears no
          responsibility for delays or cancellations in applications due to
          non-payment, insufficient documentation, or incomplete information.
        </p>
        <br />
        <div>
          <h1 className="termsHeading">Policy Accesibility</h1>
          <p className="desription">
            This Refund Policy is available upon request and is prominently
            featured on all relevant documents pertaining to fee-based services
            within AnyUNI.
          </p>
        </div>
        <div>
          <h1 className="termsHeading">Inquiries:</h1>
          <p className="description">
            For any inquiries regarding this policy, please contact the
            directors at info@AnyUNI.io. We appreciate your interest in AnyUNI.{" "}
          </p>
          <br />
          <p>
            For further information, please visit
            <a href="https://www.anyuni.io/" style={{ color: "red" }}>
              {" "}
              www.AnyUNI.io.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Figma;
