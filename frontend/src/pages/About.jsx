import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <p className="section-label">About Our MSA</p>
        <h1>Faith, Community, and Service at YorkU Markham</h1>
        <p>
          YorkU Markham MSA is a student-led Muslim Student Association created
          to support Muslim students, build meaningful connections, and provide
          a welcoming space for learning, prayer, service, and community.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card large-card">
          <h2>Who We Are</h2>
          <p>
            We are a community of students working together to make campus life
            more welcoming, supportive, and spiritually uplifting. Our goal is
            to help students feel connected to their faith while also building
            friendships and serving the wider campus community.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">🕌</span>
          <h3>Prayer & Worship</h3>
          <p>
            Supporting students with prayer reminders, prayer space information,
            and Islamic programming.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">🤲</span>
          <h3>Community Support</h3>
          <p>
            Creating a safe and respectful environment where students can find
            support and belonging.
          </p>
        </div>
      </div>

      <div className="mission-vision-section">
        <div className="mission-box">
          <p className="section-label">Our Mission</p>
          <h2>Building a Stronger Muslim Student Community</h2>
          <p>
            Our mission is to serve students by organizing beneficial events,
            encouraging Islamic learning, supporting prayer on campus, and
            creating opportunities for charity, service, and leadership.
          </p>
        </div>

        <div className="vision-box">
          <p className="section-label">Our Vision</p>
          <h2>A Campus Where Every Student Feels Welcome</h2>
          <p>
            We aim to become a trusted space where students can strengthen their
            identity, connect with others, and contribute positively to campus
            life through faith, character, and service.
          </p>
        </div>
      </div>

      <div className="values-section">
        <div className="section-heading">
          <p className="section-label">Our Values</p>
          <h2>What Guides Us</h2>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Faith</h3>
            <p>Keeping Islam at the center of our purpose and programming.</p>
          </div>

          <div className="value-card">
            <h3>Respect</h3>
            <p>Creating a welcoming space for students from all backgrounds.</p>
          </div>

          <div className="value-card">
            <h3>Service</h3>
            <p>Helping others through charity, volunteering, and outreach.</p>
          </div>

          <div className="value-card">
            <h3>Leadership</h3>
            <p>Giving students opportunities to grow, lead, and contribute.</p>
          </div>
        </div>
      </div>

      <div className="team-preview">
        <div>
          <p className="section-label">Our Team</p>
          <h2>Led by Students, Built for Students</h2>
          <p>
            Our executive team and volunteers work together to plan events,
            support student needs, and build a stronger MSA community at YorkU
            Markham.
          </p>
        </div>

        <Link to="/contact" className="btn primary-btn">
          Get Involved
        </Link>
      </div>
    </section>
  );
}

export default About;