import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const InternalLink: FC<InternalLinkProps> = ({ href, children, className }) => {
  return (
    <a href={href}>
      <span className={cx("underline text-primary", className)}>{children}</span>
    </a>
  );
};

export default InternalLink;
