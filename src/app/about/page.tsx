

import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 mb-4 animate__animated animate__fadeIn">
            <div className="card-body text-center">
              <Image
                src="/profile-placeholder.png"
                alt="Profile picture"
                width={120}
                height={120}
                className="rounded-circle border border-3 mb-3 shadow-sm"
                priority
              />
              <h1 className="display-5 fw-bold mb-2">Mel Chi</h1>
              <p className="lead mb-3">
                Software Architect, entrepreneur, and technology leader with a passion for building innovative solutions and empowering teams. Experienced in AI, cloud, and digital transformation across multiple industries.
              </p>
              <div className="mb-4">
                <a
                  href="https://www.linkedin.com/in/chimel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm me-2"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:mel.chi@outlook.com"
                  className="btn btn-outline-secondary btn-sm"
                >
                  mel.chi@outlook.com
                </a>
              </div>
              <h2 className="h4 fw-semibold text-start mt-4 mb-3">Professional Experience</h2>
              <div className="accordion" id="experienceAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="slalomHeading">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#slalomCollapse" aria-expanded="true" aria-controls="slalomCollapse">
                      Software Architect — Slalom (Dec 2025 - Present)
                    </button>
                  </h2>
                  <div id="slalomCollapse" className="accordion-collapse collapse show" aria-labelledby="slalomHeading" data-bs-parent="#experienceAccordion">
                    <div className="accordion-body text-start">
                      <div className="mb-1 text-muted">Detroit Metropolitan Area · Hybrid</div>
                      <ul>
                        <li>Architected an AI-powered solution assistant for a utility company, integrating OpenAI with Azure Vision, Speech, and AI Search.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="regardingHeading">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regardingCollapse" aria-expanded="false" aria-controls="regardingCollapse">
                      President & Vintner — Regarding LLC (Jul 2022 - Present)
                    </button>
                  </h2>
                  <div id="regardingCollapse" className="accordion-collapse collapse" aria-labelledby="regardingHeading" data-bs-parent="#experienceAccordion">
                    <div className="accordion-body text-start">
                      <div className="mb-1 text-muted">Carsonville, Michigan, United States</div>
                      <ul>
                        <li>Lead family-owned vineyard and winery (Re:Vineyard), overseeing operations and regulatory compliance.</li>
                        <li>Currently applying for TBB and Michigan Alcohol Permits to launch wine production.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="uniqueHeading">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#uniqueCollapse" aria-expanded="false" aria-controls="uniqueCollapse">
                      Co-Founder & CEO — Unique Software Solutions LLC (Jun 2015 - Present)
                    </button>
                  </h2>
                  <div id="uniqueCollapse" className="accordion-collapse collapse" aria-labelledby="uniqueHeading" data-bs-parent="#experienceAccordion">
                    <div className="accordion-body text-start">
                      <ul>
                        <li>Deliver software solutions for individuals and businesses, including web development and 3D printing services.</li>
                        <li>Manage business operations, contracts, and client relationships.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="fordHeading">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fordCollapse" aria-expanded="false" aria-controls="fordCollapse">
                      Ford Motor Company (Jun 2016 - Dec 2025)
                    </button>
                  </h2>
                  <div id="fordCollapse" className="accordion-collapse collapse" aria-labelledby="fordHeading" data-bs-parent="#experienceAccordion">
                    <div className="accordion-body text-start">
                      <div className="fw-semibold">Technical Product Manager & Lead Software Engineer (2021 - 2025)</div>
                      <ul>
                        <li>Directed the full lifecycle of digital manufacturing products, including the Manufacturing Digital Twin and plant-wide applications at REVC.</li>
                        <li>Led cross-functional teams to deploy real-time dashboards and software at scale.</li>
                        <li>Developed custom KPIs and dashboards to drive product strategy and decision-making.</li>
                      </ul>
                      <div className="fw-semibold">Software Engineer (2020 - 2021)</div>
                      <ul>
                        <li>Integrated Teamcenter API and IBM Maximo for advanced asset management and digital twin capabilities.</li>
                        <li>Enhanced plant data visibility and maintenance tracking.</li>
                      </ul>
                      <div className="fw-semibold">AI Software Engineer / Project Manager (2019 - 2020)</div>
                      <ul>
                        <li>Delivered AI proof-of-concept projects using TensorFlow and IBM Watson.</li>
                        <li>Managed Agile teams and supported global AI initiatives for manufacturing and labor programs.</li>
                      </ul>
                      <div className="fw-semibold">IT Research Engineer (2018)</div>
                      <ul>
                        <li>Explored and integrated cognitive services, chatbots, and digital assistants for digital transformation.</li>
                      </ul>
                      <div className="fw-semibold">Database Security Compliance Analyst (2016 - 2017)</div>
                      <ul>
                        <li>Automated compliance reporting and database monitoring using Qlikview, Tableau, and IBM Guardium.</li>
                        <li>Led successful database upgrade and audit initiatives.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="ezclaimHeading">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ezclaimCollapse" aria-expanded="false" aria-controls="ezclaimCollapse">
                      Software Developer — EZClaim Medical Billing Software (2014 - 2016)
                    </button>
                  </h2>
                  <div id="ezclaimCollapse" className="accordion-collapse collapse" aria-labelledby="ezclaimHeading" data-bs-parent="#experienceAccordion">
                    <div className="accordion-body text-start">
                      <div className="mb-1 text-muted">Rochester, Michigan</div>
                      <ul>
                        <li>Converted legacy VB5/VBA programs to C# and customized SQL reports for clients.</li>
                        <li>Automated software testing with Smartbear Test-Complete.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
