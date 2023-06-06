import Link from "next/link";
import { useRouter } from "next/router";
import { cx } from "../../../common/cx";
import { HeaderLinkProps } from "../../../data/navData";
import { Icon } from "../../Icon/Icon";
import Logo from "../Logo/Logo";

interface Props {
  data: HeaderLinkProps[];
}

export default function Navigation({ data }: Props) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center h-[90px]">
      <Logo />
      <ul className="flex h-full items-center">
        {data.map((item, index) => {
          return (
            <li
              key={item.name}
              className={cx(
                "h-full flex items-center p-4 flex-col justify-center gap-2",
                item.href === router.asPath && "active bg-green-500"
              )}
            >
              <Icon name={item.icon} />
              <Link
                href={item.href}
                className={cx(
                  "text-black inline-block text-md",
                  item.href === router.asPath && "text-white"
                )}
              >
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
