import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <span>{message}</span>
  </div>
);
