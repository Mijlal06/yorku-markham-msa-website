import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="arabic-greeting" dir="rtl">
          <p className="bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
          <p className="salam">اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ</p>
        </div>

        <div className="hero-content">
          <p className="tagline">Faith • Community • Service</p>
          <h1>Welcome to YorkU Markham MSA</h1>
          <p>
            A student-led Muslim Student Association dedicated to building a
            welcoming space for prayer, events, learning, volunteering, and
            meaningful community on campus.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="btn primary-btn">
              Learn More
            </Link>
            <Link to="/contact" className="btn secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="section-label">What We Do</p>
          <h2>Serving Students Through Faith and Community</h2>
          <p>
            Our MSA is here to support Muslim students and create a welcoming
            space for everyone interested in learning, connecting, and serving.
          </p>
        </div>

        <div className="home-card-grid">
          <div className="home-card">
            <span className="card-icon">🕌</span>
            <h3>Prayer Support</h3>
            <p>
              Helping students stay connected with prayer, campus resources,
              and a peaceful environment for worship.
            </p>
          </div>

          <div className="home-card">
            <span className="card-icon">📚</span>
            <h3>Islamic Learning</h3>
            <p>
              Organizing reminders, halaqas, workshops, and discussions that
              help students grow in knowledge and character.
            </p>
          </div>

          <div className="home-card">
            <span className="card-icon">🤝</span>
            <h3>Brotherhood & Sisterhood</h3>
            <p>
              Building friendships, mentorship, and a strong support system for
              students on campus.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-content">
          <p className="section-label">Our Mission</p>
          <h2>Creating a Space Where Students Feel Connected</h2>
          <p>
            YorkU Markham MSA aims to create a safe, respectful, and uplifting
            environment where students can strengthen their faith, support one
            another, and contribute positively to campus life.
          </p>

          <div className="mission-points">
            <div>
              <strong>01</strong>
              <span>Faith-centered programming</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Student support and belonging</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Service, charity, and outreach</span>
            </div>
          </div>
        </div>

        <div className="highlight-box">
          <h3>Get Involved</h3>
          <p>
            Join events, volunteer with the team, share ideas, or collaborate
            with us to help build a stronger campus community.
          </p>
          <Link to="/contact" className="btn primary-btn">
            Join the Community
          </Link>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="section-label">Upcoming Focus</p>
          <h2>Programs We Can Feature</h2>
        </div>

        <div className="program-grid">
          <div className="program-card">
            <h3>Jummah & Prayer Updates</h3>
            <p>Share prayer space details, Jummah information, and reminders.</p>
          </div>

          <div className="program-card">
            <h3>Events & Workshops</h3>
            <p>Promote halaqas, socials, Ramadan programs, and guest speakers.</p>
          </div>

          <div className="program-card">
            <h3>Volunteer Opportunities</h3>
            <p>Allow students to help with setup, events, charity, and outreach.</p>
          </div>

          <div className="program-card">
            <h3>Student Resources</h3>
            <p>Provide helpful links, campus contacts, and community support.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;