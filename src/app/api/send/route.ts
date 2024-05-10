import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
  email: string;
  message: string;
}

export async function POST({ Response }: { Response: any }, request: Request) {}
