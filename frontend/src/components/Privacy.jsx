import AnimatedPage from "./AnimatedPage";
import ContactShortcut from "./ContactShortcut";
import Image from "./Image";
const Privacy = () => {
  return (
    <AnimatedPage>
      <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-2">
            Privacy Policy of Sharp Gbs
          </h1>
          <h3 className="text-lg font-semibold mb-2">
            Effective Date: 20 Apr 2025
          </h3>

          <p className="mb-4">
            Your privacy is of utmost importance to us at Sharp Gbs. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you interact with our services. By using
            our website and services, you consent to the practices described in
            this policy.
          </p>

          <h3 className="text-lg font-semibold mt-4">Information Collection</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              We collect personal information that you voluntarily provide to us
              when you interact with our website. This may include:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Contact Information:</strong> Such as your name, email
                  address, phone number, and any other details you provide when
                  filling out our contact form or subscribing to our newsletter.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, including your IP address, browser type, pages
                  visited, and the time and date of your visit.
                </li>
              </ul>
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-2">Use of Information</h3>
            <div>
              The information we collect is used for the following purposes:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  To Respond to Inquiries: Your contact info helps us respond to
                  your questions or requests.
                </li>
                <li>
                  To Provide Our Services: To deliver the services you request
                  and improve offerings.
                </li>
                <li>
                  To Communicate with You: We may send updates, promotions, or
                  other relevant information.
                </li>
              </ul>
            </div>

          <section className="bg-gray-50 p-6 rounded-xl shadow-xl" data-aos="fade-up">
            <h2 className="text-center text-3xl text-gray-800 drop-shadow-sm font-bold mb-7">
              Data Security
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="list-decimal pl-6 mb-4">
                  We take your security seriously. We implement measures
                  including:
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      Encryption: Protects sensitive info transmitted online.
                    </li>
                    <li>
                      Access Controls: Limits access to authorized personnel
                      only.
                    </li>
                    <li>
                      Regular Security Audits: Ensures ongoing protection.
                    </li>
                  </ul>
                </div>
              <div className="rounded-xl  transition-normal duration-400 hover:scale-105">
                <Image src="https://img.freepik.com/premium-vector/data-protection-concept-data-security-privacy-internet-security-flat-vector-illustration_199064-1167.jpg" alt="Sharp Gbs" obj="contain" />
              </div>
            </div>
          </section>
          <h3 className="text-lg font-semibold ">Cookies</h3>
            <li className=" pl-6 mb-2">
              Our site may use cookies to enhance your experience. You can
              choose to accept or decline via browser settings. Declining may
              limit features.
            </li>

          <ContactShortcut/>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Privacy;
