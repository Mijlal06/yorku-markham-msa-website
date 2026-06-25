function Events() {
    const events = [
      {
        title: "Weekly Halaqa Night",
        date: "Every Thursday",
        time: "6:00 PM - 7:30 PM",
        location: "YorkU Markham Campus",
        type: "Learning",
        description:
          "A weekly gathering for Islamic reminders, discussion, reflection, and building stronger brotherhood and sisterhood.",
      },
      {
        title: "Jummah Prayer Updates",
        date: "Every Friday",
        time: "TBA",
        location: "Campus Prayer Space",
        type: "Prayer",
        description:
          "Stay updated with Jummah prayer location, timing, and important announcements for students on campus.",
      },
      {
        title: "MSA Welcome Social",
        date: "Coming Soon",
        time: "TBA",
        location: "Student Lounge",
        type: "Social",
        description:
          "Meet other students, connect with the MSA team, and learn how to get involved with upcoming programs.",
      },
      {
        title: "Charity & Volunteer Drive",
        date: "Coming Soon",
        time: "TBA",
        location: "YorkU Markham",
        type: "Service",
        description:
          "A chance to give back through volunteering, fundraising, and supporting meaningful community causes.",
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
            <p className="section-label">Featured</p>
            <h2>Weekly Halaqa Night</h2>
            <p>
              A welcoming space for students to learn, reflect, ask questions, and
              grow together through Islamic reminders and discussion.
            </p>
          </div>
  
          <div className="featured-details">
            <span>📅 Every Thursday</span>
            <span>🕕 6:00 PM - 7:30 PM</span>
            <span>📍 YorkU Markham Campus</span>
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