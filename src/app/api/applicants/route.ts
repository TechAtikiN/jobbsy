import { createTransport } from 'nodemailer'
import { NextResponse } from 'next/server';


const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD,
    },
});

const handler = async (req: Request) => {
    const { email, name, summary, location, company } = await req.json();

  // html template for mail being sent to organization
  const orgMailFormattedHtml = `
  <h2>Job Application Request</h2>
  <h4>Personal Information</h4>
  <p><strong>Name:</strong>${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>City:</strong> ${location}</p>
  <p><strong>State:</strong> ${summary}</p>
  `

  // html template for mail being sent to the user
  const userMailFormattedHtml = `
    <p>Dear <strong>${name}</strong>,</p>
    <p>Your application was received! ✨<br>We are glad you decided to take some time out and apply for the role!</p>
    <p>Our team will go through the details you have entered and reach out to you shortly.</p>
    <p>Regards,<br>${company}</p>
  `

  const orgMailData = {
    from: process.env.user, // sender address
    to: 'nikitakhabya03@Gmail.com',
    cc: 'techatikin@gmail.com',
    subject: `[Job Application]: Submitted By ${name}`, // subject line
    html: orgMailFormattedHtml, // html body
  }

  const userMailData = {
    from: process.env.user, // sender address
    to: email,
    subject: `Thank You for Applying | ${company}.`, // subject line
    html: userMailFormattedHtml, // html body
  }

  try {
    const orgMailInfo = await transporter.sendMail(orgMailData) // trigger mail request to us

    const userMailInfo = await transporter.sendMail(userMailData) // trigger mail request to user
    
    return new NextResponse(
            JSON.stringify({
                message: "Success",
                reqMessageId: orgMailInfo.messageId,
                resMessageId: userMailInfo.messageId,
            }),
            { status: 200 }
        )

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
