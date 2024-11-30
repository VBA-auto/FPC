import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const { email, phone, name, message, code, souhaite } = req.body;

    const transporter = nodemailer.createTransport({
      host: "mail.france-puits-canadien.fr",
      port: 465,
      secure: true,
      auth: {
        user: "contact@france-puits-canadien.fr",
        pass: "Test008//@@",
      },
      tls: {
        rejectUnauthorized: false, // Ignore certificate errors
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "contact@france-puits-canadien.fr",
      subject: "New devis gratuit Form Submission",
      text: `Un utilisateur a rempli le formulaire sur le site france-puits-canadien.fr :\n\nEmail: ${email}\n\nTéléphone: ${phone}\n\nNom et prénom: ${name}\n\n souhaite: ${souhaite}\n\n code: ${code} \n\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    // Use the res object to send the response
    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);

    // Use the res object to send the response
    res
      .status(500)
      .json({ message: "Failed to Send Email", error: error.message });
  }
}
