import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How do I join YorkU Markham MSA?",
      answer:
        "You can join by attending our events, connecting with us through our contact page, or following our updates. Everyone is welcome to participate and get involved.",
    },
    {
      question: "Do I have to be Muslim to attend MSA events?",
      answer:
        "No. Our events are open to students from all backgrounds who are respectful and interested in learning, connecting, or supporting the community.",
    },
    {
      question: "Where can I find prayer space information?",
      answer:
        "Prayer space details and updates can be shared through the MSA website, announcements, and official communication channels. You can also contact the team for the latest information.",
    },
    {
      question: "How can I volunteer with the MSA?",
      answer:
        "You can volunteer by helping with events, setup, outreach, charity initiatives, social media, or student support. Contact us and let us know how you would like to contribute.",
    },
    {
      question: "Does the MSA host weekly events?",
      answer:
        "The MSA plans to host regular programs such as halaqas, socials, workshops, prayer updates, charity drives, and community events throughout the semester.",
    },
    {
      question: "How can another club collaborate with the MSA?",
      answer:
        "Clubs and organizations can reach out through the contact page with details about the collaboration idea, event purpose, date, and any support needed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-page">
      <div className="faq-hero">
        <p className="section-label">FAQ</p>
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about joining the MSA, attending
          events, prayer space updates, volunteering, and getting involved.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${openIndex === index ? "open" : ""}`} key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-contact-box">
        <h2>Still Have a Question?</h2>
        <p>
          Reach out to the YorkU Markham MSA team and we’ll do our best to help.
        </p>
        <a href="/contact" className="btn primary-btn">
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default FAQ;