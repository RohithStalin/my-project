import React from "react";
import "../styles/Terms.css";
import Footer from "../components/Footer";
import LastFooter from "../components/LastFooter";

const TermsConditionsPage = () => {
  return (
    <div className="">
      <div className="card">
        <div>
          <h1 className="title">AnyUNI Terms & Conditions</h1>
          <p className="text">Effective Date: May 1, 2024</p>
        </div>
        <div>
          <p className="text">
            Welcome to Anyuni.io! By accessing our website, mobile application,
            or any of our services{" "}
            <span className="redText">(collectively, "Services")</span>, you
            agree to be bound by these Terms and Conditions{" "}
            <span className="redText">("Terms")</span>. Please read them
            carefully. If you do not agree with any part of these Terms, you
            should not use our Services.
          </p>
        </div>
        <div>
          <h3 className="rules">1. Use of Services</h3>
          <p className="rulesDescription">
            Anyuni.io provides a platform for educational discovery, counseling,
            and application assistance. Our Services are intended for personal
            and non-commercial use.
          </p>
        </div>
        <div>
          <h3 className="redText">a. Eligibility</h3>
          <ul className="text">
            <li>
              You must be at least 18 years old to create an account or use our
              Services without parental or guardian consent. By using our
              Services, you represent that you meet this age requirement.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="redText">b.Account Registration</h3>
          <ul className="text">
            <li>
              You must be at least 18 years old to create an account or use our
              Services without parental or guardian consent. By using our
              Services, you represent that you meet this age requirement.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="redText">
            c. Prohibited Activities
            <span className="text"> You are prohibited from:</span>
          </h3>
          <ul className="text">
            <li>Using our Services for any unlawful purpose.</li>
            <li>
              Soliciting others to perform or participate in any unlawful acts.
            </li>
            <li>
              Violating any international, federal, provincial, or state
              regulations, rules, laws, or local ordinances.
            </li>
            <li>
              Infringing upon or violating our intellectual property rights or
              the intellectual property rights of others.
            </li>
            <li>
              Harassing, abusing, insulting, harming, defaming, slandering,
              disparaging, intimidating, or discriminating based on gender,
              sexual orientation, religion, ethnicity, race, age, national
              origin, or disability.
            </li>
            <li>Submitting false or misleading information.</li>
            <li>
              Uploading or transmitting viruses or any other type of malicious
              code.
            </li>
            <li>
              Interfering with or circumvent the security features of the
              Service or any related website, other websites, or the Internet.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="rules">2. Intellectual Property Rights</h3>
          <p className="rulesDescription">
            The content, arrangement, and layout of our Services, including but
            not limited to the text, software, scripts, graphics, photos,
            sounds, music, videos, and interactive features, are owned by
            Anyuni.io, its licensors, or other providers of such material and
            are protected by intellectual property rights and other laws.
          </p>
        </div>
        <div>
          <h3 className="rules">3. Third-Party Links</h3>
          <p className="rulesDescription">
            Our Services may contain links to third-party web sites or services
            that are not owned or controlled by Anyuni.io. We have no control
            over, and assume no responsibility for, the content, privacy
            policies, or practices of any third party web sites or services.
          </p>
        </div>
        <div>
          <h3 className="rules">4. Termination</h3>
          <p className="rulesDescription">
            We may terminate or suspend your account and bar access to the
            Services immediately, without prior notice or liability, for any
            reason whatsoever, including without limitation if you breach the
            Terms.
          </p>
        </div>
        <div>
          <h3 className="rules">5. Disclaimer of Warranties</h3>
          <p className="rulesDescription">
            Our Services are provided "AS IS" and "AS AVAILABLE." Anyuni.io
            makes no representations or warranties of any kind, express or
            implied, as to the operation of their Services, or the information,
            content, materials, or products included on this service.
          </p>
        </div>
        <div>
          <h3 className="rules">6. Limitation of Liability</h3>
          <p className="rulesDescription">
            In no event shall Anyuni.io, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential or punitive damages resulting
            from your access to or use of, or inability to access or use the
            Services.
          </p>
        </div>
        <div>
          <h3 className="rules">7. Indemnification</h3>
          <p className="rulesDescription">
            You agree to indemnify, defend, and hold harmless Anyuni.io and its
            licensee and licensors, and their employees, contractors, agents,
            officers, and directors from any and all claims, damages,
            obligations, losses, liabilities, costs or debt, and expenses.
          </p>
        </div>
        <div>
          <h3 className="rules">8. Changes to Terms</h3>
          <p className="rulesDescription">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days' notice prior to any new terms taking effect.
          </p>
        </div>
        <div>
          <h3 className="rules">9. Governing Law</h3>
          <p className="rulesDescription">
            These Terms shall be governed and construed in accordance with the
            laws of [Your Jurisdiction], without regard to its conflict of law
            provisions.
          </p>
        </div>
        <div>
          <h3 className="rules">10. Contact Us</h3>
          <p className="rulesDescription">
            If you have any questions about these Terms, please contact us at{" "}
            <span className="redText">contact@anyuni.io.</span>
          </p>
        </div>
        <div style={{ padding: "20px" }}>
          <h2
            className="redText"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Thank you for using Anyuni.io!
          </h2>
          <p className="wellWishMessage">
            We hope our Services assist you in navigating your educational
            journey successfully.
          </p>
        </div>
      </div>
      <div className="my-5 border-top">
        <Footer />
      </div>
      <div>
        <LastFooter />
      </div>
    </div>
  );
};

export default TermsConditionsPage;
