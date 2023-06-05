import { HeaderLinkProps } from "../../data/navData";
import Navigation from "./Navigation";
interface Props {
  isVisible?: boolean;
  data: HeaderLinkProps[];
}

export const Header = ({ data }: Props) => {
  return (
    <header className="sticky top-0 w-full z-10 bg-white">
      <nav className="container mx-auto">
        {/*<Topbar />*/}
        <Navigation data={data} />
      </nav>
    </header>
  );
};

export default Header;
