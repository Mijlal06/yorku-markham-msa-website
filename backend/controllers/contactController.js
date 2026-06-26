import fs from "fs/promises";
import path from "path";

const messagesFilePath = path.join(
  process.cwd(),
  "data",
  "contactMessages.json"
);

const ensureMessagesFile = async () => {
  const dataFolderPath = path.dirname(messagesFilePath);

  try {
    await fs.mkdir(dataFolderPath, { recursive: true });
    await fs.access(messagesFilePath);
  } catch (error) {
    await fs.writeFile(messagesFilePath, "[]");
  }
};

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    await ensureMessagesFile();

    const newMessage = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    let messages = [];

    try {
      const fileData = await fs.readFile(messagesFilePath, "utf-8");
      messages = JSON.parse(fileData);
    } catch (error) {
      messages = [];
    }

    messages.push(newMessage);

    await fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2));

    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        subject: `New Contact Form Message: ${subject}`,
        from_name: "YorkU Markham MSA Website",
        message: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `,
      }),
    });

    const web3FormsData = await web3FormsResponse.json();

    if (!web3FormsResponse.ok || !web3FormsData.success) {
      console.error("Web3Forms email error:", web3FormsData);

      return res.status(500).json({
        success: false,
        message: "Message saved, but email could not be sent.",
      });
    }

    console.log("New Contact Message Saved and Emailed:");
    console.log(newMessage);

    return res.status(200).json({
      success: true,
      message: "Your message has been received and emailed successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong on the server.",
    });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    const adminPassword = req.headers["x-admin-password"];

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access.",
      });
    }

    await ensureMessagesFile();

    let messages = [];

    try {
      const fileData = await fs.readFile(messagesFilePath, "utf-8");
      messages = JSON.parse(fileData);
    } catch (error) {
      messages = [];
    }

    return res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error("Get messages error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to load messages.",
    });
  }
};

export const deleteContactMessage = async (req, res) => {
  try {
    const adminPassword = req.headers["x-admin-password"];

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access.",
      });
    }

    await ensureMessagesFile();

    const messageId = Number(req.params.id);

    let messages = [];

    try {
      const fileData = await fs.readFile(messagesFilePath, "utf-8");
      messages = JSON.parse(fileData);
    } catch (error) {
      messages = [];
    }

    const updatedMessages = messages.filter((msg) => msg.id !== messageId);

    await fs.writeFile(
      messagesFilePath,
      JSON.stringify(updatedMessages, null, 2)
    );

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully.",
      messages: updatedMessages,
    });
  } catch (error) {
    console.error("Delete message error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to delete message.",
    });
  }
};