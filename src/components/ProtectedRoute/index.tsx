import { useSession } from "next-auth/react";
import { Router } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { Fragment, PropsWithChildren, useMemo } from "react";
import { adminRoutingData, clientRoutingData } from "../../data/navData";
import Header from "../Header";

interface Props {
  router: Router;
}

export default function ProtectedRoute({
  router,
  children,
}: PropsWithChildren<Props>) {
  const isAdminRoute = router.asPath.includes("/admin/");
  const authRoute = router.asPath === "/admin";

  const createNavigationItems = useMemo(() => {
    return isAdminRoute ? adminRoutingData : clientRoutingData;
  }, [isAdminRoute]);

  return (
    <Fragment>
      <NextNProgress />
      {!authRoute && <Header data={createNavigationItems} />}
      <main className="min-h-screen">{children}</main>
    </Fragment>
  );
}
