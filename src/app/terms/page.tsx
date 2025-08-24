'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FileText, Calendar, Shield, Users, Scale, Phone, Mail
} from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 shadow-sm">
            <FileText className="h-9 w-9 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Terms & <span className="text-primary-600">Conditions</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Please read these terms carefully before using BestAround.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white px-5 py-2 rounded-full shadow border border-gray-200 text-sm font-medium text-gray-700">
            <Calendar className="h-5 w-5 text-primary-600" />
            <span>Last Updated: 15 August 2025</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          <Section
            icon={<Shield />}
            title="1. Introduction"
            content={[
              `Welcome to BestAround ("Company," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of the BestAround mobile application and website (collectively, the "Platform").`,
              `By downloading, accessing, or using BestAround, you agree to comply with and be bound by these Terms. If you do not agree, you must not use the Platform.`,
            ]}
          />

          <Section
            icon={<FileText />}
            title="2. Definitions"
            list={[
              { heading: `"App" or "Platform"`, items: ["means the BestAround mobile application and website."] },
              { heading: `"User"`, items: ["means any individual accessing or using the Platform."] },
              { heading: `"Content"`, items: ["means text, images, reviews, videos, or other material uploaded by Users or BestAround."] },
              { heading: `"Services"`, items: ["means features provided by BestAround, including food discovery, reviews, ratings, recommendations, and personalization."] },
            ]}
          />

          <Section
            icon={<Users />}
            title="3. Eligibility"
            items={[
              "You must be at least 13 years old (or the legal age in your jurisdiction) to use BestAround.",
              "By using the Platform, you represent and warrant that you meet these requirements."
            ]}
          />

          <Section
            icon={<Shield />}
            title="4. Use of the Platform"
            items={[
              "Use BestAround for lawful purposes only.",
              "Submit genuine and accurate reviews.",
              "Refrain from uploading harmful, defamatory, offensive, or fraudulent content.",
              "Not use automated bots, scrapers, or other unauthorized tools to access the Platform.",
            ]}
          />

          <Section
            icon={<Users />}
            title="5. User Accounts"
            items={[
              "You may be required to create an account to use certain features.",
              "You are responsible for maintaining the confidentiality of your account credentials.",
              "BestAround reserves the right to suspend or terminate accounts for violation of these Terms.",
            ]}
          />

          <Section
            icon={<FileText />}
            title="6. User Content"
            items={[
              "By submitting content, you grant BestAround a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, and display such content for operational and marketing purposes.",
              "You retain ownership of your content, but BestAround reserves the right to remove any content that violates these Terms.",
            ]}
          />

          <Section
            icon={<Shield />}
            title="7. Intellectual Property"
            items={[
              "All intellectual property rights in BestAround, including its logo, brand, software, and features, remain the property of BestAround.",
              "Unauthorized use of our intellectual property is prohibited.",
            ]}
          />

          <Section
            icon={<Shield />}
            title="8. Third-Party Services"
            items={[
              "BestAround may contain links to third-party websites or services.",
              "We are not responsible for third-party content, services, or policies.",
            ]}
          />

          <Section
            icon={<Scale />}
            title="9. Disclaimers & Limitation of Liability"
            items={[
              "BestAround provides food discovery services and does not guarantee food quality, restaurant service, or user experience.",
              "BestAround shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the Platform.",
            ]}
          />

          <Section
            icon={<Scale />}
            title="10. Governing Law & Dispute Resolution"
            items={[
              "These Terms shall be governed by and construed in accordance with the laws of India.",
              "Any disputes shall be resolved through arbitration in [City, India], under the Arbitration and Conciliation Act, 1996.",
            ]}
          />

          <Section
            icon={<FileText />}
            title="11. Amendments"
            content={[
              "BestAround reserves the right to amend these Terms at any time. Updated Terms will be posted on the Platform and will become effective immediately upon posting.",
            ]}
          />

          <Section
            icon={<Phone />}
            title="12. Contact Us"
            content={["For questions about these Terms, contact us at:"]}
            extra={
              <div className="flex items-center space-x-2 text-primary-600 font-medium mt-2">
                <Mail className="h-5 w-5" />
                <span>support@bestaround.in</span>
              </div>
            }
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Section({ icon, title, content, list, items, extra }: any) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <span className="p-2 bg-primary-100 rounded-lg mr-3 text-primary-600">
          {icon}
        </span>
        {title}
      </h2>

      {content && content.map((para: string, i: number) => (
        <p key={i} className="text-lg text-gray-700 mb-4 leading-relaxed">{para}</p>
      ))}

      {list && list.map((block: any, i: number) => (
        <div key={i} className="mb-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{block.heading}</h3>
          <ul className="space-y-2 text-gray-700">
            {block.items.map((pt: string, j: number) => (
              <li key={j} className="flex items-start">
                <span className="text-primary-600 font-semibold mr-2">•</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {items && (
        <ul className="space-y-3 text-gray-700">
          {items.map((pt: string, i: number) => (
            <li key={i} className="flex items-start text-lg">
              <span className="text-primary-600 font-semibold mr-2">•</span>
              {pt}
            </li>
          ))}
        </ul>
      )}

      {extra && <div>{extra}</div>}
    </div>
  );
}
