import React, { FC, ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  follow?: boolean;
  children: ReactNode;
}

const ExternalLink: FC<ExternalLinkProps> = ({ href, children, follow }) => {
  return (
    <a href={href} target="_blank" rel={follow ? "" : "noopener noreferrer"}>
      <span className="underline text-primary">{children}</span>
    </a>
  );
};

export default ExternalLink;
