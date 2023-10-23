import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const handler = async (req: Request) => {
    const body = await req.json();
    const { email, name } = body;

    // html template for mail being sent to organization
    const orgMailFormattedHtml = `
    <h2>Subscribed to newsletter</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong> ${name} has subscribed to your newsletter.</strong></p>
  `;

    // html template for mail being sent to user
    const userMailFormattedHtml = `
    <p>Dear <strong>${email}</strong>,</p>
    <p>
    Thank you for signing up for our newsletter. We will keep you updated with the latest news and updates.
    </p>
  `;

    const orgMailData = {
        from: process.env.EMAIL, // sender address
        to: "nikitakhabya03@gmail.com",
        cc: "techatikin@gmail.com",
        subject: `[Subscribed to Newsletter]: ${email}`, // subject line
        html: orgMailFormattedHtml, // html body
    };

    const userMailData = {
        from: process.env.EMAIL, // sender address
        to: email,
        subject: "Thank you for subscribing to our newsletter", // subject line
        html: userMailFormattedHtml, // html body
    };

    try {
        const orgMailInfo = await transporter.sendMail(orgMailData); // trigger mail request to us

        const userMailInfo = await transporter.sendMail(userMailData); // trigger mail request to user

        return new NextResponse(
            JSON.stringify({
                message: "Success",
                reqMessageId: orgMailInfo.messageId,
                resMessageId: userMailInfo.messageId,
            }),
            { status: 200 }
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify({
                message: "Something went wrong",
            }),
            { status: 500 }
        );
    }
};

export { handler as POST };
