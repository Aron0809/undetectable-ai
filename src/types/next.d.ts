declare module 'next/head' {
  import { ReactNode } from 'react';
  
  export interface HeadProps {
    children: ReactNode;
  }
  
  export default function Head(props: HeadProps): JSX.Element;
}

declare module 'next/link' {
  import { LinkHTMLAttributes } from 'react';
  
  export interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    className?: string;
  }
  
  export default function Link(props: LinkProps): JSX.Element;
} 