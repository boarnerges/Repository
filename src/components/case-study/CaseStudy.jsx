import './case-study.css';

const caseStudies = [
  {
    id: 1,
    title: "SmarterCare",
    subtitle: "Offline-First EMR for Low-Connectivity Healthcare",
    role: "Product Lead — Architecture & MVP",
    organization: "eHealth4everyone · 2023",
    sections: [
      {
        heading: "Overview",
        content: "SmarterCare is an offline-first Electronic Medical Record (EMR) built for primary healthcare centres operating in low-connectivity, low-power environments — the kind of clinics that standard cloud-based EMRs simply can't serve."
      },
      {
        heading: "The Problem",
        content: "Most cloud-based EMRs assume reliable internet and power. In practice, many primary health centres — especially in underserved areas — have neither. This meant clinic staff either couldn't use digital records at all, or lost access at exactly the moments care delivery mattered most."
      },
      {
        heading: "Constraints",
        points: [
          "Very limited engineering resources — no dedicated in-house team was available for a new MVP",
          "Many target hospitals lack even a local intranet, ruling out network-dependent architectures",
          "Power and internet outages are routine, not exceptional"
        ]
      },
      {
        heading: "Key Decisions",
        subsections: [
          {
            subheading: "1. Desktop application over intranet-based system",
            content: "Because many hospitals don't have a local intranet, a network-dependent system was off the table. I chose Electron.js to build a standalone desktop application — install it on one machine, and it works immediately, with no network configuration required."
          },
          {
            subheading: "2. Local-first database with deferred cloud sync",
            content: "Patient records needed to remain accessible and writable during outages. I researched and selected a database architecture that stores all data locally by default, automatically syncing to the cloud whenever connectivity is restored — so no data is lost and no workflow is interrupted."
          },
          {
            subheading: "3. Lean MVP delivery via freelance partnership",
            content: "With no in-house team available, I defined the full system architecture and scope myself, then partnered with a freelance developer to build and test the MVP — proving the concept without requiring a large team."
          }
        ]
      },
      {
        heading: "My Role",
        points: [
          "Defined the offline-first system architecture from the ground up",
          "Evaluated and selected the local-storage/cloud-sync database approach",
          "Chose Electron.js as the application framework based on real deployment constraints",
          "Scoped the MVP and managed delivery through a freelance developer"
        ]
      },
      {
        heading: "Why It Mattered",
        content: "The architecture was designed around how clinics actually operate, not how infrastructure 'should' work. SmarterCare's offline-first foundation later became the base for the LLM-powered EHR assistant — extending the same design philosophy into AI-assisted care."
      }
    ]
  },
  {
    id: 2,
    title: "LLM-Powered EHR Assistant",
    subtitle: "AI Decision Support for Resource-Constrained Healthcare",
    role: "Product Manager",
    organization: "eHealth4everyone · Follow-up to SmarterCare",
    sections: [
      {
        heading: "Overview",
        content: "An AI assistant built on top of SmarterCare, designed to support health practitioners at primary health centres — many of which operate with very few doctors — by helping them think through symptoms and clinical decisions, without replacing their judgment."
      },
      {
        heading: "The Problem",
        content: "Primary health centres are frequently understaffed, with health workers facing cases beyond their typical training without immediate access to a doctor for a second opinion. The goal wasn't to automate diagnosis, but to give practitioners a thinking partner — surfacing relevant considerations they could weigh themselves."
      },
      {
        heading: "My Role",
        points: [
          "Worked cross-functionally with the AI engineer, backend developer, designers, and frontend developer to scope and build a testable MVP",
          "Ran discovery conversations with public health teams and end users to understand real use cases and how practitioners wanted the tool to fit into their workflow",
          "Used expert-authored prompting (no model training) to generate symptom-based confidence scores — giving practitioners a structured way to weigh possibilities",
          "Framed the product positioning carefully throughout: this is a decision-support tool, not a decision-making one"
        ]
      },
      {
        heading: "Key Design Principle",
        content: "The product was deliberately scoped to assist, not replace clinical judgment. Every design and prompting decision reinforced this — confidence scores were framed as inputs to a practitioner's thinking, not as answers."
      },
      {
        heading: "Why It Mattered",
        content: "This project sat at the intersection of AI capability and real clinical responsibility. Getting the UX framing right — making sure practitioners understood the tool as a support system, not an oracle — was as important as the underlying AI logic itself. It demonstrated how thoughtful product and UX decisions can make AI genuinely useful in high-stakes, resource-constrained environments."
      }
    ]
  }
];

const CaseStudyPage = ({ withHeader = false }) => {
  return (
    <section className="case-study-page" data-reveal>
      <div className="container">
        {!withHeader && (
          <div className="case-study-header" data-reveal>
            <p className="section-kicker">Case Studies</p>
            <h2>Shipping real products to real constraints.</h2>
            <p className="case-study-intro">
              Deep dives into product and engineering decisions made under real-world constraints. Each demonstrates how thoughtful architecture and user-centered thinking solve hard problems.
            </p>
          </div>
        )}

        <div className="case-study-grid">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              className="case-study-card"
              data-reveal
              style={{ "--reveal-delay": `${index * 100}ms` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="case-study-card__header">
                <div>
                  <p className="case-study-card__kicker">{study.role}</p>
                  <h3 className="case-study-card__title">{study.title}</h3>
                  <p className="case-study-card__subtitle">{study.subtitle}</p>
                  <p className="case-study-card__org">{study.organization}</p>
                </div>
              </div>

              <div className="case-study-card__content">
                {study.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="case-study-section">
                    <h4 className="case-study-section__heading">{section.heading}</h4>

                    {section.content && (
                      <p
                        className="case-study-section__text"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    )}

                    {section.points && (
                      <ul className="case-study-section__list">
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {section.subsections && (
                      <div className="case-study-section__subsections">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="case-study-subsection">
                            <h5 className="case-study-subsection__heading">
                              {subsection.subheading}
                            </h5>
                            <p className="case-study-subsection__text">
                              {subsection.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;
