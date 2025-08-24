'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Shield, Calendar, Eye, Users, Database, Globe,
  Mail, Phone, FileText, Lock, Scale, AlertCircle, CheckCircle2
} from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 shadow-sm">
            <Shield className="h-9 w-9 text-primary-600" />
            </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Privacy <span className="text-primary-600">Policy</span>
            </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            BestAround values your privacy and is committed to protecting your
            personal information in accordance with industry standards.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white px-5 py-2 rounded-full shadow border border-gray-200 text-sm font-medium text-gray-700">
            <Calendar className="h-5 w-5 text-primary-600" />
            <span>Last Updated: 15 August 2025</span>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-20">
          
          {/* Section Component */}
          <Section
            icon={<FileText />}
            title="1. Introduction"
            content={[
              `BestAround ("Company," "we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you use our mobile application and website (collectively, the "Platform").`,
              `By using BestAround, you consent to the practices described in this Privacy Policy.`,
            ]}
          />

          <Section
            icon={<Eye />}
            title="2. Information We Collect"
            content={[
              "We may collect the following types of information:"
            ]}
            list={[
              {
                heading: "a. Personal Information",
                items: ["Name, email address, phone number, and login credentials."],
              },
              {
                heading: "b. Usage Information",
                items: ["Device details, IP address, browser type, app interactions, and crash reports."],
              },
              {
                heading: "c. Location Data",
                items: ["GPS-based location (with your consent) to recommend nearby dishes and restaurants."],
              },
              {
                heading: "d. Content",
                items: ["Reviews, photos, videos, taste tags, and other user-generated content."],
              },
              {
                heading: "e. Cookies & Tracking Technologies",
                items: ["We use cookies and analytics tools to improve user experience and personalize recommendations."],
              }
            ]}
          />

          <Section
            icon={<Database />}
            title="3. How We Use Your Information"
            content={[
              "We use your information to:"
            ]}
            items={[
              "Provide and improve our Services.",
              "Personalize food recommendations.",
              "Verify authenticity of reviews.",
              "Send service-related notifications and updates.",
              "Conduct analytics and research.",
              "Ensure compliance with legal obligations.",
            ]}
          />

          <Section
            icon={<Scale />}
            title="4. Legal Basis for Processing"
            content={[
              "We process personal data under the following bases:"
            ]}
            items={[
              "Consent (e.g., personalized recommendations).",
              "Contractual necessity (to provide Services).",
              "Legal obligations (data retention, law enforcement requests).",
              "Legitimate interests (improving Services, fraud prevention).",
            ]}
          />

          <Section
            icon={<Users />}
            title="5. Sharing of Data"
            content={[
              "We may share data with:"
            ]}
            items={[
              "Service providers (analytics, hosting, customer support).",
              "Legal authorities if required by law.",
              "Third parties in case of mergers, acquisitions, or restructuring.",
            ]}
            extra={<p className="mt-4 text-green-600 font-semibold flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2"/> We never sell personal data to advertisers.
            </p>}
          />

          <Section
            icon={<Lock />}
            title="6. Data Retention & Security"
            items={[
              "We retain data only as long as necessary for the purposes stated.",
              "Data is protected using encryption, firewalls, and industry-standard security measures.",
            ]}
          />

          <Section
            icon={<Globe />}
            title="7. International Data Transfers"
            content={[
              "If you access BestAround outside India, your information may be transferred across borders in compliance with applicable data protection laws.",
            ]}
          />

          <Section
            icon={<Shield />}
            title="8. User Rights"
            content={[
              "Depending on your jurisdiction, you may have rights to:"
            ]}
            items={[
              "Access, correct, or delete your data.",
              "Restrict or object to processing.",
              "Withdraw consent at any time.",
              "File a complaint with a data protection authority.",
            ]}
            extra={
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Requests can be made at <span className="text-primary-600 font-medium">support@bestaround.in</span></p>
              </div>
            }
          />

          <Section
            icon={<AlertCircle />}
            title="9. Children's Privacy"
            content={[
              "BestAround is not intended for users under 13 years of age. We do not knowingly collect data from children.",
            ]}
          />

          <Section
            icon={<FileText />}
            title="10. Changes to this Policy"
            content={[
              "We may update this Privacy Policy from time to time. Changes will be effective once posted on the Platform.",
            ]}
          />

          <Section
            icon={<Phone />}
            title="11. Contact Us"
            content={[`For questions about this Privacy Policy, contact us at:`]}
            extra={
              <div className="flex items-center space-x-3 mt-4 text-primary-600 font-medium">
                <Mail className="h-5 w-5" />
                <span>privacy@bestaround.in</span>
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
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="p-2 bg-primary-100 rounded-lg mr-3 text-primary-600">
          {icon}
        </span>
        {title}
      </h2>
      {content && content.map((para: string, i: number) => (
        <p key={i} className="text-lg text-gray-700 mb-4 leading-relaxed">{para}</p>
      ))}

      {list && list.map((block: any, i: number) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{block.heading}</h3>
          <ul className="space-y-2">
            {block.items.map((point: string, j: number) => (
              <li key={j} className="flex items-start text-gray-700">
                <span className="text-primary-600 font-semibold mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {items && (
        <ul className="space-y-3">
          {items.map((point: string, i: number) => (
            <li key={i} className="flex items-start text-gray-700 text-lg">
              <span className="text-primary-600 font-semibold mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>
      )}

      {extra && <div>{extra}</div>}
    </div>
  );
}
