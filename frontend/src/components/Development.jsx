import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function Development() {
  return (
    <AnimatedPage>
      <main className="px-6 py-2 mb-4 text-gray-800 max-w-5xl space-y-4 mx-auto leading-relaxed">
        <h3 className="text-4xl font-semibold">Development</h3>

        <div>
          <Image src="/wordpressManagement.png" alt="Wordpress Management" />
        </div>

        <section className="space-y-4">
          <p className="text-xl font-semibold">📌 Comprehensive WebSite Development</p>
          <p>
            Your website is often the first impression potential customers have of your business. Our WordPress management services cover all critical aspects of your site, including theme maintenance, plugin updates, uptime monitoring, and performance optimization. We ensure that your website remains fast, reliable, and secure — giving you peace of mind while you focus on your business.
          </p>
          <p>
            We handle daily backups, implement advanced firewall protection, and keep your CMS and plugins up to date — eliminating vulnerabilities and enhancing security. With our proactive monitoring and support, we detect and resolve issues before they impact your site or users.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xl font-semibold">🚀 Speed & Performance Optimization</p>
          <p>
            Slow websites hurt user experience and SEO rankings. That’s why we optimize loading speeds by compressing images, leveraging caching strategies, minimizing code, and fine-tuning server settings. Whether you're running an eCommerce platform or a content-driven blog, we'll ensure your site performs efficiently across all devices.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xl font-semibold">🔍 SEO & Visibility</p>
          <p>
            What good is a website if no one can find it? Our team applies on-page SEO best practices, improves metadata, integrates structured data, and ensures your content is indexed properly. We also set up and manage SEO plugins like RankMath or Yoast to give your site a competitive edge in search engine rankings.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xl font-semibold">🎨 Customization & Content Updates</p>
          <p>
            Need to refresh your brand or redesign a section of your site? From customizing themes to adding new content, we handle it all. Whether it's updating product listings, posting blogs, adding images, or tweaking layouts — we make sure everything aligns with your brand’s voice and vision.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xl font-semibold">💼 Why Choose Us?</p>
          <p>
            Managing a WordPress site can be time-consuming and technically demanding. Our expert team provides personalized, scalable solutions for businesses of all sizes. With transparent communication, fast turnaround, and dependable support — we’re your trusted partner for digital success.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ongoing maintenance and 24/7 uptime monitoring</li>
            <li>Security audits and malware protection</li>
            <li>Responsive updates and page improvements</li>
            <li>Integrated analytics and performance reporting</li>
            <li>Affordable monthly management plans</li>
          </ul>
        </section>

        <section className="text-center pt-6">
          <p className="text-lg font-medium mb-2">Ready to leave your Website in expert hands?</p>
          <Link to="/contact">
            <Button variant="contained" className="!bg-gray-800">
              Get in Touch
            </Button>
          </Link>
        </section>
      </main>
    </AnimatedPage>
  );
}
