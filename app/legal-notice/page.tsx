import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Notice | fgross.cloud",
  description:
    "Legal notice in accordance with German law (Impressum). Provider identification, contact, responsible person, liability notes, copyright.",
}

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Legal Notice (Impressum)</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Information pursuant to § 5 TMG</h2>
            <div className="space-y-1">
              <p><span className="text-gray-400">Provider</span>: Fabian Gross</p>
              <p>
                <span className="text-gray-400">Address</span>: <span className="italic">Piesbacher Straße 38, 66839 Schmelz, Germany</span>
              </p>
              <p>
                <span className="text-gray-400">Email</span>: <a href="mailto:contact@fgross.cloud" className="underline decoration-gray-600 hover:decoration-gray-300">contact@fgross.cloud</a>
              </p>
              <p>
                <span className="text-gray-400">Phone</span>: <span className="italic">+49 15560858836</span>
              </p>
              {/* <p>
                <span className="text-gray-400">VAT ID</span>: <span className="italic">If applicable, add here</span>
              </p> */}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Responsible for content</h2>
            <p>
              according to § 18 (2) MStV: <span className="font-medium">Fabian Gross</span>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">EU dispute resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR): {""}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-600 hover:decoration-gray-300"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Liability for contents</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. However, according to § 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. Liability in this respect is only possible from the time of knowledge of a specific infringement. If we become aware of any such infringements, we will remove the content immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Liability for links</h2>
            <p>
              Our website contains links to external websites of third parties over whose content we have no control. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the sites is always responsible for the content of the linked sites. The linked sites were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked sites is not reasonable without concrete evidence of a violation of the law. If we become aware of any legal violations, we will remove such links immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Copyright</h2>
            <p>
              The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected and such content is marked accordingly. If you nevertheless become aware of a copyright infringement, please notify us accordingly. If we become aware of any legal infringements, we will remove such content immediately.
            </p>
          </section>

          <p className="text-sm text-gray-500">Last updated: {new Date().toISOString().slice(0, 10)}</p>

          {/* <div className="pt-4 text-sm">
            <a href="/impressum" className="underline decoration-gray-600 hover:decoration-gray-300">
              Deutsche Version
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}


