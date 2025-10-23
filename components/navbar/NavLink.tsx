import Link from "next/link";

interface NavLinkProps {
    href?: string;
    children?: React.ReactNode;
}

const NavLink = ( { href, children } : NavLinkProps) => {
    return (
      <li>
        <Link href={href || "#"} className={`block text-white transition hover:text-secondary/75`}>
          {children}
        </Link>
      </li>
    );
}

export default NavLink;
