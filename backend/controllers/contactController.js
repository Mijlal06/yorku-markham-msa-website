import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailInfo = await transporter.sendMail({
      from: `"YorkU Markham MSA Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("New Contact Message Saved:");
    console.log(newMessage);

    console.log("Email sent successfully:");
    console.log(emailInfo.messageId);

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