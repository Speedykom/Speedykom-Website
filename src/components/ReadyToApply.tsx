export default function ReadyToApply() {
  return (
    <section className="bg-gray-100 px-6 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Ready to Apply?</h2>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            We&apos;re excited to learn more about you! Please email your CV to{" "}
            <span className="font-medium">hello@speedykom.de</span> along with:
          </p>

          <ul className="space-y-3 ml-6">
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-2">•</span>
              <span>A brief description of your professional interests.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-2">•</span>
              <span>What you&apos;re seeking in your next role.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-2">•</span>
              <span>
                Why you&apos;re interested in joining the Speedykom team—specifically your interest in development
                cooperation and working at Speedykom.
              </span>
            </li>
          </ul>

          <p className="text-lg">
            <span className="font-semibold text-gray-900">Important:</span> Clear adherence to these instructions is
            part of our initial screening—failure to provide complete information will be considered a red flag.
          </p>

          <p className="text-lg pt-4">We look forward to building the digital future together!</p>
        </div>
      </div>
    </section>
  )
}
