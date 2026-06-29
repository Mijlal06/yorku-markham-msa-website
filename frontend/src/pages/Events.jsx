function Events() {
  const events = [
    {
      title: "Jummah Prayer Updates",
      date: "Every Friday",
      time: "Timing TBA",
      location: "YorkU Markham Campus",
      type: "Prayer",
      description:
        "Stay updated with Jummah prayer timing, location, and important announcements for students on campus.",
      action: "Follow Instagram for updates",
      link: "https://www.instagram.com/york_markham_msa/",
    },
    {
      title: "Weekly Halaqa Night",
      date: "Coming Soon",
      time: "TBA",
      location: "YorkU Markham Campus",
      type: "Learning",
      description:
        "A welcoming gathering for Islamic reminders, reflection, discussion, and building stronger brotherhood and sisterhood.",
      action: "Ask about Halaqa",
      link: "/contact",
    },
    {
      title: "MSA Welcome Social",
      date: "Coming Soon",
      time: "TBA",
      location: "Student Lounge",
      type: "Social",
      description:
        "Meet other students, connect with the MSA team, and learn how to get involved with upcoming programs and initiatives.",
      action: "Contact Us",
      link: "/contact",
    },
    {
      title: "Volunteer Opportunities",
      date: "Open Throughout the Year",
      time: "Flexible",
      location: "YorkU Markham",
      type: "Volunteer",
      description:
        "Help with event planning, setup, outreach, charity work, social media, and student support initiatives.",
      action: "Get Involved",
      link: "/contact",
    },
    {
      title: "Charity Drive",
      date: "Coming Soon",
      time: "TBA",
      location: "YorkU Markham Campus",
      type: "Service",
      description:
        "Support meaningful causes through fundraising, donation drives, and community service projects.",
      action: "Suggest a Cause",
      link: "/contact",
    },
    {
      title: "Executive Applications",
      date: "2026-2027",
      time: "TBA",
      location: "Online",
      type: "Leadership",
      description:
        "Information about future MSA executive roles, applications, and leadership opportunities will be shared when available.",
      action: "Ask About Roles",
      link: "/contact",
    },
  ];

  return (
    <section className="events-page">
      <div className="events-hero">
        <p className="section-label">Events & Programs</p>
        <h1>Stay Connected Through MSA Events</h1>
        <p>
          Join us for prayer updates, halaqas, socials, volunteer opportunities,
          charity initiatives, and community-building programs at YorkU Markham.
        </p>
      </div>

      <div className="featured-event">
        <div>
          <p className="section-label">Featured Program</p>
          <h2>Follow Us for Event Updates</h2>
          <p>
            Our Instagram is the best place to find the latest announcements,
            event reminders, Jummah updates, volunteer opportunities, and MSA
            news.
          </p>
        </div>

        <div className="featured-details">
          <span>📸 @york_markham_msa</span>
          <span>📅 Events posted throughout the semester</span>
          <span>📍 YorkU Markham Campus</span>
          <a
            href="https://www.instagram.com/york_markham_msa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary-btn"
          >
            Visit Instagram
          </a>
        </div>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-top">
              <span className="event-type">{event.type}</span>
              <span className="event-number">0{index + 1}</span>
            </div>

            <h3>{event.title}</h3>
            <p>{event.description}</p>

            <div className="event-info">
              <span>📅 {event.date}</span>
              <span>🕒 {event.time}</span>
              <span>📍 {event.location}</span>
            </div>

            <div className="event-actions">
              <a
                href={event.link}
                target={event.link.startsWith("http") ? "_blank" : "_self"}
                rel={event.link.startsWith("http") ? "noopener noreferrer" : ""}
                className="event-link"
              >
                {event.action}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="events-cta">
        <h2>Have an Event Idea?</h2>
        <p>
          Want to suggest a workshop, speaker, collaboration, fundraiser, or
          community event? Reach out to the MSA team and share your idea.
        </p>
        <a href="/contact" className="btn primary-btn">
          Suggest an Event
        </a>
      </div>
    </section>
  );
}

export default Events;