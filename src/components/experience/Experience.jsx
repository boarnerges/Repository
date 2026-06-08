import "./experience.css";

const workExperience = [
  {
    company: "Ullweb",
    title: "Technical Product Manager",
    dateRange: "Sep 2024 – Present",
    bulletPoints: [
      "Drove 20% productivity gain aligning sprint cycles to business goals",
      "Led React SaaS UI with API-integrated features; cut integration rework by 30%",
      "Tracked adoption and retention using Mixpanel and Google Analytics",
    ],
    tech: ["React", "TypeScript", "REST APIs", "Mixpanel", "Google Analytics", "Jira"],
  },
  {
    company: "eHealth4everyone",
    title: "TPM / Project Manager",
    dateRange: "Nov 2022 – Jul 2024",
    bulletPoints: [
      "Delivered OpenMRS EMR across hospitals — improved data accessibility by 25%",
      "Co-led VR neonatal training app (University of Washington partnership)",
      "Launched multi-tenant SaaS platform with LLM-powered EHR clinical assistant",
      "Coordinated Botswana Health Innovation System for WHO AFRO",
    ],
    tech: ["OpenMRS", "React", "LLM/AI integration", "VR (Unity)", "Agile/Scrum"],
  },
  {
    company: "NITDA",
    title: "TPM Intern",
    dateRange: "Feb – Sep 2021",
    bulletPoints: [
      "Contributed to internal software tools using JavaScript",
      "Applied Agile methods to improve delivery coordination",
    ],
    tech: ["JavaScript", "Agile"],
  },
];

const notablePartnerships = [
  {
    name: "WHO AFRO",
    description: "Botswana Health Innovation Management System",
  },
  {
    name: "University of Washington",
    description: "vENC VR Neonatal Training App",
  },
];

const Experience = ({ withHeader = false }) => {
  return (
    <section id="experience" className={`experience-section container ${withHeader ? 'experience-section--subpage' : ''}`} data-reveal>
      {!withHeader && (
        <>
          <p className="section-kicker">History</p>
          <h2>Strategic history: Orchestrating growth across product and engineering.</h2>
        </>
      )}

      <div className="experience-list">
        {workExperience.map((job, index) => (
          <article key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-main-info">
                <h3 className="experience-role-title">{job.title}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
              <p className="experience-date">{job.dateRange}</p>
            </div>
            
            <ul className="experience-bullets">
              {job.bulletPoints.map((point, idx) => {
                // Symmetrically bold metrics like "20%" or "3.2s"
                const boldedPoint = point.replace(/(\d+%|\d+\.\d+s|\d+\s?days|\d+k)/g, "<strong>$1</strong>");
                return (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: boldedPoint }} />
                );
              })}
            </ul>
            
            <div className="experience-tags" aria-label="Technologies used">
              {job.tech.map((t) => (
                <span key={t} className="experience-tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {notablePartnerships.length > 0 && (
        <div className="notable-partnerships">
          <h3>Notable Partnerships</h3>
          <ul>
            {notablePartnerships.map((partner, index) => (
              <li key={index}>
                <strong>{partner.name}:</strong> {partner.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Experience;
