import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
  email: string;
  message: string;
}

export async function POST({ Response }: { Response: any }, request: Request) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({
        email: "naxdev75@gmail.com",
        message: "Welcome to the Resend family!",
      }) as React.ReactElement<EmailTemplateProps>,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
