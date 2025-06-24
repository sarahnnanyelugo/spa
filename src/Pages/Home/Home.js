import "./home.scss";

import React, { useEffect, useState } from "react";

import { TopNav } from "./TopNav/TopNav";
import Hero from "../../assets/images/hero.png";
import Map from "../../assets/images/map.png";
import Orange from "../../assets/images/orange.png";
import Blue from "../../assets/images/blue.svg";
import Blue2 from "../../assets/images/blue2.svg";
import Red from "../../assets/images/red.svg";
import Green from "../../assets/images/green.svg";
import Data from "../../assets/images/registration.png";
import Selection from "../../assets/images/selection.png";
import Assessment from "../../assets/images/assessment.png";
import Performance from "../../assets/images/performance.png";
import Testifier1 from "../../assets/images/testifier1.png";
import Testifier2 from "../../assets/images/testifier2.png";
import Testifier3 from "../../assets/images/testifier3.png";
import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { Footer } from "./Footer/Footer";

export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4); // 4 is the number of divs
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
      <TopNav />
      <div className="alpha-div">
        <div className="hero-outer">
          <img src={Hero} width="100%" />
          <div className="hero-overlay">
            <center>
              <div className="col-md-6">
                <h1>Evaluating Secondary School Performance in Nigeria.</h1>
                <p>
                  A national initiative that evaluates the academic performance
                  of secondary schools across Nigeria using standardized,
                  computer-based assessments. By generating objective, reliable
                  data, SAP empowers parents, educators, and policymakers to
                  make informed, future-focused decisions in education.
                </p>
              </div>
            </center>
          </div>
        </div>
        <div className=" d-md-flex col-md-10 offset-md-1" id="about">
          <div className="col-md-6 first-intro">
            <h6>About SPA</h6>
            <h1 className="col-md-10">
              A National Benchmark for Academic Excellence.
            </h1>
            <p>
              The School Assessment Program (SAP) is Nigeria’s first
              large-scale, system-level assessment framework for secondary
              education. Conducted annually, SAP evaluates Year 11 (SS2)
              students in a representative sample of schools using
              internationally aligned, curriculum-based assessments in core
              domains.
            </p>
            <p>
              The goal is to establish a high-quality, transparent data system
              that identifies educational strengths and gaps across all states
              fostering equity, accountability, and sustained improvement within
              Nigeria’s education sector.
            </p>

            <h4>Program Pillars:</h4>
            <ul>
              <li>
                Standardized Assessments: Computer-based, psychometrically
                validated tests
              </li>
              <li>
                Annual Implementation: Consistent benchmarking to track
                year-on-year trends
              </li>
              <li>
                Independent Oversight: Methodological rigor with academic
                governance
              </li>
              <li>
                Actionable Reporting: Insights for schools, state ministries,
                and families
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1">
            <img src={Map} width="100%" />
          </div>
        </div>
        <div className="stakeholders">
          <div className="choices">
            <center>
              <div className="col-md-4">
                <p>Why It Matters</p>
                <h2>
                  Enabling Smart Policy, Better Schools and Informed Choice.
                </h2>
                <p>4 Stakeholder Value Blocks:</p>
              </div>
            </center>
            {/* <div className="white-bg row row-cols-2 row-cols-lg-2 g-2 g-lg-5 col-md-10 offset-md-1">
          <div className="col">
            {" "}
            <div className="blk1"></div>
          </div>
          <div className="col">
            {" "}
            <div className="blk1"></div>
          </div>
          <div className="col">
            {" "}
            <div className="blk1"></div>
          </div>
          <div className="col">
            {" "}
            <div className="blk1"></div>
          </div>
        </div>
        <center>
          {" "}
          <div className="inner-circle"></div>
        </center> */}

            <div className="spa-grid col-md-10 offset-md-1">
              <div className="card top-left col-md-12">
                <h3>🎓 Students</h3>
                <p>...</p>
              </div>
              <div className="card top-right col-md-12">...</div>
              <div className="card bottom-left col-md-12">...</div>
              <div className="card bottom-right col-md-12">...</div>
              <div className="spa-circle col-md-12">SPA</div>
            </div>
          </div>

          <div className="how-it-works col-md-10 offset-md-1">
            <h6>How It Works</h6>
            <h2 className="col-md-6">
              From Sample to Score: A Transparent Assessment Lifecycle
            </h2>
            <h6>A 5-Step Process:</h6>
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 steps ">
              <div className="col">
                <div className="d-flex">
                  <div>
                    {" "}
                    <img src={Orange} width="84px" height="144px" />{" "}
                  </div>
                  <div className="">
                    <h5 className="col-md-7">
                      1. Sampling & School Engagement
                    </h5>

                    <div className="d-flex">
                      <p>
                        Representative sample design ensures statistical
                        validity and coverage across all geopolitical zones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex">
                  <div>
                    {" "}
                    <img src={Blue} width="94px" height="144px" />{" "}
                  </div>
                  <div className="">
                    <h5 className="col-md-7">Test Design & Alignment</h5>

                    <div className="d-flex">
                      <p>
                        Assessments are co-developed with subject-matter experts
                        and aligned to both national curriculum and global
                        competency frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="d-flex">
                  <div>
                    {" "}
                    <img src={Red} width="94px" height="144px" />{" "}
                  </div>
                  <div className="">
                    <h5 className="col-md-7">Secure Digital Administration</h5>

                    <div className="d-flex">
                      <p>
                        Computer-based tests are deployed in controlled
                        environments, with strict adherence to assessment
                        protocols and security guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-5 row row-cols-1 row-cols-lg-2 g-2 g-lg-3 steps mt-5 col-md-8 offset-md-2">
              <div className="col">
                <div className="d-flex">
                  <div>
                    {" "}
                    <img src={Green} width="84px" height="144px" />{" "}
                  </div>
                  <div className="">
                    <h5 className="col-md-7">Data Analysis & Validation</h5>

                    <div className="d-flex">
                      <p>
                        Independent analysts use established psychometric models
                        to ensure reliability and fairness in scoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex">
                  <div>
                    {" "}
                    <img src={Blue2} width="94px" height="144px" />{" "}
                  </div>
                  <div className="">
                    <h5 className="col-md-7">Reporting & Dissemination</h5>

                    <div className="d-flex">
                      <p>
                        Results are shared via dashboards, policy briefs, and
                        summary reports tailored to diverse stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="d-md-flex col-md-10 offset-md-1" id="methodology">
          <div className="col-md-6 global-standard">
            <h6>Methodology & Integrity</h6>
            <h2 className="col-md-10">
              A Global-Standard Approach to Educational Measurement
            </h2>
            <p className="col-md-11">
              SAP’s assessment framework is grounded in global best practices
              drawn from leading international benchmarks such as PISA, TIMSS,
              and Uwezo. It combines international rigour with contextual
              relevance to Nigeria’s educational landscape, ensuring that the
              process is both globally comparable and locally meaningful.
            </p>
            <p className="col-md-11">
              Oversight of the methodology is entrusted to an independent
              Technical Advisory Group composed of statisticians, education
              researchers, and policy experts. This ensures objectivity,
              transparency, and continuous improvement of the assessment
              process.
            </p>
            <h5>Quality Assurance Features:</h5>
            <ul className="list-unstyled">
              <li>
                {" "}
                ✅ Cross-state comparability through common-item equating
              </li>
              <li>
                {" "}
                🔒 Confidential and anonymized handling of student and school
                data
              </li>
              <li>
                {" "}
                📖 Transparent documentation of methodology and assessment
                protocols
              </li>
              <li>
                {" "}
                🧑‍🏫 Capacity building for local education officers and data
                managers
              </li>
            </ul>
            <div className="d-flex last-quote">
              <h1>“</h1>
              <p className="col-md-9">
                SAP represents a significant step toward evidence-based
                education in Nigeria.”
                <br />{" "}
                <strong>
                  Dr. Amina Yusuf, Lead Researcher, Centre for Education Data
                  Analytics
                </strong>
              </p>
            </div>
          </div>
          <div className="outer col-md-6">
            <div className="methodology">
              <h5>Methodology Overview</h5>
              <div
                className={`method d-md-flex ${
                  activeIndex === 0 ? "highlight" : ""
                }`}
              >
                <div className="col-md-4">
                  <img src={Data} width="100%" alt="Step 1" />
                </div>
                <div>
                  <h6>School Registration & Data Collection</h6>
                  <p>
                    Participating schools complete a standardized registration
                    form and submit academic and demographic data for all Year
                    11 (SS2) students. This step ensures complete visibility of
                    the assessment population and enables representative
                    sampling.
                  </p>
                </div>
              </div>

              <div
                className={`method d-md-flex ${
                  activeIndex === 1 ? "highlight" : ""
                }`}
              >
                <div className="col-md-4">
                  <img src={Selection} width="100%" alt="Step 2" />
                </div>
                <div>
                  <h6>2. Student Selection</h6>
                  <p>
                    Using a randomization algorithm, the SAP system selects five
                    students per school:For co-educational schools, a
                    gender-balanced mix is requiredFor single-sex schools, any
                    five students are selected
                  </p>
                </div>
              </div>

              <div
                className={`method d-md-flex ${
                  activeIndex === 2 ? "highlight" : ""
                }`}
              >
                <div className="col-md-4">
                  <img src={Assessment} width="100%" alt="Step 3" />
                </div>
                <div>
                  <h6>Intervention Implementation</h6>
                  <p>
                    A centralized, computer-based test (CBT) is conducted in
                    selected regional centers across the country. All
                    assessments are administered simultaneously under secure,
                    standardized conditions, with strict adherence to testing
                    protocols and supervision guidelines.
                  </p>
                </div>
              </div>

              <div
                className={`method d-md-flex ${
                  activeIndex === 3 ? "highlight" : ""
                }`}
              >
                <div className="col-md-4">
                  <img src={Performance} width="100%" alt="Step 4" />
                </div>
                <div>
                  <h6>4. Performance Scoring & Ranking</h6>
                  <p>
                    Each school is evaluated based on two key metrics:Average
                    test scores across the five selected studentsAverage
                    completion time, serving as an efficiency benchmark
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="change">
          <center>
            <div className="col-md-4">
              <p>Insights & Reports</p>
              <h2>Data That Drives Change</h2>
              <p>
                SAP publishes disaggregated performance data across subjects,
                states, gender, and school types. Reports are complemented by
                easy-to-use dashboards, interactive maps, and downloadable
                briefs designed to support education actors at every level.
              </p>
            </div>{" "}
          </center>
          <div
            className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-3 g-2 g-lg-4 "
            id="get-involved"
          >
            <div className="col">
              <div className="changes">
                <h3>📥️ 2025 Executive Summary</h3>
                <p>
                  Coming soon. A concise briefing for policymakers & partners.
                </p>
                <Link>
                  Learn More <RxCaretRight />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="changes">
                <h3>📘️ 2024 National Trends Report</h3>
                <p>
                  Explore nationwide subject-level & gender-based performance.
                </p>
                <Link>
                  Learn More <RxCaretRight />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="changes">
                <h3>📊 State-Level Performance Explorer</h3>
                <p>
                  Interactive tool for diving into regional and school-level
                  data.
                </p>
                <Link>
                  Learn More <RxCaretRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="voice col-md-10 offset-md-1 " id="results">
          <p>Stakeholder Perspectives</p>
          <h2>Voices from the Field</h2>
          <p>What they say..</p>
          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
            <div className="col">
              <div className="voices">
                <p>
                  This is the clearest performance snapshot we’ve ever received.
                  SAP has changed how we approach planning.
                </p>
                <div className="d-flex">
                  <img src={Testifier1} />
                  <div>
                    {" "}
                    <h5>Mr. John Uche Emmanuel</h5>
                    <small>Principal</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="voices">
                <p>
                  Parents now have facts, not rumors. That’s a powerful shift.
                </p>
                <div className="d-flex">
                  <img src={Testifier2} />
                  <div>
                    {" "}
                    <h5>Mrs. Lydia Adaeze</h5>
                    <small>Parent</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="voices">
                <p>
                  SAP offers data that can shape funding, teacher deployment,
                  and curriculum focus. We’ve needed this for years
                </p>
                <div className="d-flex">
                  <img src={Testifier3} />
                  <div>
                    {" "}
                    <h5>Mrs. Teliza Baba</h5>
                    <small>Mrs. Teliza Baba</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="faqs">
          <center>
            <div className="col-md-4">
              <p>Got Questions?</p>
              <h2>FAQs</h2>
              <p>
                Frequently asked questions ordered by popularity. Remember that
                if the visitor has not committed to the call to action, they may
                still have questions (doubts) that can be answered.
              </p>
            </div>
          </center>

          <div className="col-md-10 offset-md-1 faq-div">
            <div className="faq-row d-md-flex">
              <div className="col-md-4">
                <h4>Is SAP part of WAEC or NECO?</h4>
              </div>
              <div className="col-md-7 offset-md-1">
                <p>
                  No. SAP is a separate benchmarking tool and does not replace
                  national exams. It is designed for systemic <br />
                  evaluation, not certification.
                </p>
              </div>
            </div>
            <div className="faq-row d-md-flex">
              <div className="col-md-4">
                <h4>Will individual student results be shared?</h4>
              </div>
              <div className="col-md-7 offset-md-1">
                <p>
                  No. All student responses are anonymized and only used for
                  aggregated, school-level reporting.
                </p>
              </div>
            </div>
            <div className="faq-row d-md-flex">
              <div className="col-md-4">
                <h4>What subjects are covered?</h4>
              </div>
              <div className="col-md-7 offset-md-1">
                <p>
                  SAP assessments typically include Mathematics, English
                  Literacy, and General Science.
                </p>
              </div>
            </div>
            <center>
              <div className="col-md-4 ">
                <h2>Still have a questions?</h2>
                <p>
                  If you haven't found the information you're looking for,{" "}
                  <br />
                  don’t hesitate to reach out to us.
                </p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
