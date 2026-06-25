function Contact() {
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = e.currentTarget;
  
      const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      };
  
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert(
            "Thank you for contacting YorkU Markham MSA. Your message was sent successfully."
          );
          form.reset();
          return;
        }
  
        alert("Something went wrong. Please try again.");
      } catch (error) {
        console.error("Contact form error:", error);
        alert(
          "Unable to send message. Please make sure the backend server is running."
        );
      }
    };
  
    return (
      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-info">
            <p className="section-label">Get in Touch</p>
  
            <h1>Let’s Connect</h1>
  
            <p className="contact-intro">
              Have a question about events, prayer spaces, volunteering,
              collaborations, or joining the MSA? Send us a message and our team
              will get back to you.
            </p>
  
            <div className="contact-cards">
              <div className="contact-card">
                <span>📧</span>
                <div>
                  <h3>Email</h3>
                  <p>yorku.markhammsa@gmail.com</p>
                </div>
              </div>
  
              <div className="contact-card">
                <span>📍</span>
                <div>
                  <h3>Markham</h3>
                  <p>York University Markham Campus</p>
                </div>
              </div>
  
              <div className="contact-card">
                <span>🤝</span>
                <div>
                  <h3>Collaborations</h3>
                  <p>Reach out for events, partnerships, and community work.</p>
                </div>
              </div>
            </div>
          </div>
  
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
  
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="yourname@email.com"
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
            </div>
  
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;