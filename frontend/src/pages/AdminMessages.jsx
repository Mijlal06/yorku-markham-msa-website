import { useState } from "react";

function AdminMessages() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loadMessages = async () => {
    try {
      const response = await fetch(`${API_URL}/api/contact/messages`, {
        headers: {
          "x-admin-password": password,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Access denied.");
        return;
      }

      setMessages(data.messages);
      setIsLoggedIn(true);
      setError("");
    } catch (error) {
      setError("Unable to load messages. Make sure the backend is running.");
    }
  };

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${API_URL}/api/contact/messages/${id}`,
        {
          method: "DELETE",
          headers: {
            "x-admin-password": password,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Unable to delete message.");
        return;
      }

      setMessages(data.messages);
    } catch (error) {
      alert("Unable to delete message. Make sure the backend is running.");
    }
  };

  const logout = () => {
    setPassword("");
    setMessages([]);
    setError("");
    setIsLoggedIn(false);
  };

  return (
    <section className="admin-page">
      <div className="admin-hero">
        <p className="section-label">Admin</p>
        <h1>Contact Messages</h1>
        <p>View messages submitted through the YorkU Markham MSA contact form.</p>
      </div>

      {!isLoggedIn && (
        <div className="admin-login">
          <h2>Admin Access</h2>
          <p>Enter the admin password to view messages.</p>

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={loadMessages} className="submit-btn">
            View Messages
          </button>

          {error && <p className="admin-error">{error}</p>}
        </div>
      )}

      {isLoggedIn && (
        <>
          <div className="admin-toolbar">
            <p>
              Showing <strong>{messages.length}</strong> message
              {messages.length === 1 ? "" : "s"}
            </p>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>

          <div className="messages-list">
            {messages.length === 0 ? (
              <div className="message-card">
                <p>No messages yet.</p>
              </div>
            ) : (
              messages
                .slice()
                .reverse()
                .map((msg) => (
                  <div className="message-card" key={msg.id}>
                    <div className="message-top">
                      <div>
                        <h3>{msg.subject}</h3>
                        <span>{new Date(msg.createdAt).toLocaleString()}</span>
                      </div>

                      <button
                        className="delete-message-btn"
                        onClick={() => deleteMessage(msg.id)}
                      >
                        Delete
                      </button>
                    </div>

                    <p>
                      <strong>Name:</strong> {msg.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {msg.email}
                    </p>
                    <p>
                      <strong>Message:</strong>
                    </p>
                    <p>{msg.message}</p>
                  </div>
                ))
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default AdminMessages;