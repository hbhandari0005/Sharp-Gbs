import AnimatedPage from "./AnimatedPage";
import ContactShortcut from "./ContactShortcut";
import Image from "./Image";
export default function Terms() {
  return (
    <AnimatedPage>
      <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <hr className="mb-4" />

        <section className="bg-gray-50 p-6 rounded-xl mb-5 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
              Welcome to Sharp Gbs. These Terms of Service ("Terms") govern your
              access to and use of our website, services, and applications
              (collectively, the "Services"). By accessing or using our
              Services, you agree to be bound by these Terms. If you do not
              agree to these Terms, please do not use our Services.
            </p>

            <div className="max-w-fit rounded-xl  transition-normal duration-400 hover:scale-105">
              <Image src="https://static.vecteezy.com/system/resources/previews/009/268/574/non_2x/terms-and-conditions-legal-concept-design-man-checking-form-and-agree-with-the-terms-and-conditions-vector.jpg" alt="Sharp Gbs" />
            </div>
          </div>
        </section>
        <div className="space-y-6">
          <section>
            <h2 className="font-semibold text-lg mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using our Services, you affirm that you are at least 18 years
              old or have the consent of a parent or guardian. If you are using
              the Services on behalf of an organization, you represent that you
              have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. Changes to Terms</h2>
            <p>
              We may modify these Terms from time to time. We will notify you of
              any changes by posting the new Terms on our website and updating
              the "Last Updated" date at the top of this page. Your continued
              use of the Services after any changes constitutes your acceptance
              of the new Terms. We encourage you to review these Terms
              periodically.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. Privacy Policy</h2>
            <p>
              Your use of our Services is also governed by our Privacy Policy,
              which explains how we collect, use, and share your information. By
              using our Services, you consent to the collection and use of your
              information as outlined in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. User Accounts</h2>
            <p>
              To access certain features of our Services, you may be required to
              create an account. You agree to provide accurate, current, and
              complete information during the registration process and to update
              such information to keep it accurate, current, and complete. You
              are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized
              use of your account or any other breach of security.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. User Conduct</h2>
            <p>
              You agree to use our Services only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                Use the Services in any way that violates any applicable law or
                regulation.
              </li>
              <li>
                Engage in conduct that restricts or inhibits anyone's use or
                enjoyment of the Services.
              </li>
              <li>
                Use the Services to disable, overburden, damage, or impair the
                Services or interfere with others' use.
              </li>
              <li>
                Use robots, spiders, or automated devices to access the Services
                without permission.
              </li>
              <li>Introduce malicious software like viruses or trojans.</li>
              <li>
                Attempt to gain unauthorized access to any part of the Services
                or connected systems.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">
              6. Intellectual Property Rights
            </h2>
            <p>
              All content on the Services, including text, graphics, logos,
              images, and software, is the exclusive property of Sharp Gbs or
              its licensors and protected by intellectual property laws. You may
              not reproduce, distribute, modify, or transmit any material
              without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites or services
              not owned or controlled by Sharp Gbs. We are not responsible for
              their content or practices. Use them at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">8. Disclaimers</h2>
            <p>
              The Services are provided "as-is" and "as-available" without
              warranties of any kind. We do not guarantee uninterrupted or
              error-free operation.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Sharp Gbs and its
              affiliates shall not be liable for indirect or consequential
              damages, including lost profits, data, or goodwill resulting from
              your use of the Services.
            </p>
          </section>
          <ContactShortcut/>
        </div>
      </main>
    </AnimatedPage>
  );
}
