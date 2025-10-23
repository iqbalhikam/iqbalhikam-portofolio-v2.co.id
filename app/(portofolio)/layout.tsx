import NavBar from '@/components/navbar/NavBar';
import NavLink from '@/components/navbar/NavLink';
import { FiHome, FiInfo } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa6';

const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <NavBar>
        <NavLink href="/">
          <FiHome />
        </NavLink>
        <NavLink href="/about">
          <FiInfo />
        </NavLink>
        <NavLink href="/contact">
          <FaRegEnvelope />
        </NavLink>
      </NavBar>
    </>
  );
};

export default PortofolioLayout;
