import Link from "next/link";

interface NavLinkProps {
    href?: string;
    children?: React.ReactNode;
}

const NavLink = ( { href, children } : NavLinkProps) => {
    return (
      <li>
        <Link href={href || "#"} className={` text-white transition hover:text-secondary/75 flex flex-col items-center gap-1`}>
          {children}
        </Link>
      </li>
    );
}

export default NavLink;
