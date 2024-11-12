import { createBrowserRouter } from "react-router-dom";

import SignIn from "@/features/auth/pages/sign-in";
import SignUp from "@/features/auth/pages/sign-up";
import AuthLayout from "@/features/auth/layouts/auth-layout";
import AppLayout from "@/layouts/app-layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/sign-in",
      element: (
        <AuthLayout>
          <SignIn />
        </AuthLayout>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      ),
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
