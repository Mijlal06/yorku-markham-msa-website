function Resources() {
    const prayerItems = [
      {
        title: "Prayer Space",
        icon: "🕌",
        detail: "Multi-Faith and Reflection Room",
        info: "Located at MK 2000.",
      },
      {
        title: "Daily Prayer Timings",
        icon: "🕋",
        detail: "Timings: TBA",
        info: "Prayer times change throughout the year, so students should check updated schedules regularly.",
      },
      {
        title: "Jummah Prayer",
        icon: "📿",
        detail: "Timing: TBA",
        info: "Jummah updates, timing, and location details will be shared when confirmed.",
      },
      {
        title: "Latest Updates",
        icon: "📸",
        detail: "Follow Instagram",
        info: "Follow our Instagram for the latest prayer updates, events, and announcements.",
      },
    ];
  
    return (
      <section className="resources-page">
        <div className="resources-hero">
          <p className="section-label">Prayer & Resources</p>
          <h1>Prayer Space and Student Resources</h1>
          <p>
            Find information about the prayer space, daily prayer timing updates,
            Jummah updates, and important MSA resources for students at YorkU
            Markham.
          </p>
        </div>
  
        <div className="prayer-location-box">
          <div>
            <p className="section-label">Prayer Space Location</p>
            <h2>Multi-Faith and Reflection Room</h2>
            <p>
              Students can use the Multi-Faith and Reflection Room for prayer,
              reflection, and quiet spiritual space on campus.
            </p>
          </div>
  
          <div className="location-badge">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>MK 2000</p>
            </div>
          </div>
        </div>
  
        <div className="resources-grid">
          {prayerItems.map((item, index) => (
            <div className="resource-card" key={index}>
              <span className="resource-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <h4>{item.detail}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
  
        <div className="timing-note">
          <div>
            <p className="section-label">Important Note</p>
            <h2>Prayer Times Change Throughout the Year</h2>
            <p>
              Daily prayer times are not fixed and change based on the season and
              prayer schedule. For the most accurate updates, students should
              follow YorkU Markham MSA announcements and Instagram posts.
            </p>
          </div>
  
          <a
            href="https://www.instagram.com/york_markham_msa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary-btn"
          >
            Follow Instagram
          </a>
        </div>
  
        <div className="resources-support">
          <h2>Need Help or Have a Question?</h2>
          <p>
            If you have questions about prayer space, Jummah, events, volunteering,
            or getting involved with the MSA, contact us anytime.
          </p>
          <a href="/contact" className="btn primary-btn">
            Contact the MSA
          </a>
        </div>
      </section>
    );
  }
  
  export default Resources;