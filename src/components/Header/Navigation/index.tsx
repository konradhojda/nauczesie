import Link from "next/link";
import { HeaderLinkProps } from "../../../data/navData";
import Logo from "../Logo/Logo";

interface Props {
  data: HeaderLinkProps[];
}

export default function Navigation({ data }: Props) {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <ul className="flex gap-3">
        {data.map((item, index) => {
          return (
            <li key={item.name}>
              <Link href={item.href} className="text-black">
                {item.name}
              </Link>
            </li>
          );
        })}
        {/*<li>*/}
        {/*  <button className="text-black" onClick={() => signOut()}>*/}
        {/*    Logout*/}
        {/*  </button>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}
