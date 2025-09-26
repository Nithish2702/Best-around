import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Data Deletion | BestAround',
  description: 'Instructions to delete your BestAround account and personal data.',
}

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">User Data Deletion</h1>
            <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
              Learn how to request deletion of your BestAround account and personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How to delete your account & data</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Email <a href="mailto:support@bestaround.in" className="text-primary-600 underline">support@bestaround.in</a> from the same email used for your BestAround account.
              </li>
              <li>
                Use the subject: <span className="font-medium">“Delete my BestAround account.”</span>
              </li>
              <li>
                We’ll verify ownership and permanently delete your account and associated personal data.
              </li>
              <li>
                Deletion is completed within 30 days (usually much sooner). We’ll confirm by email once done.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">What we delete</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Profile information and authentication identifiers</li>
              <li>Saved places, bookmarks, likes/favorites</li>
              <li>Reviews and ratings (or we may anonymize if required)</li>
              <li>App analytics tied to your user ID</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">What we may retain</h2>
            <p className="text-gray-700">
              Minimal records needed for fraud prevention, security, or legal compliance, kept for up to 90 days, then deleted.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}


