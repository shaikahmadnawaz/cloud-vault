import AuthLayout from "@/features/auth/layouts/auth-layout";
import SignIn from "@/features/auth/pages/sign-in";
import SignUp from "@/features/auth/pages/sign-up";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/sign-in" replace={true} />,
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "sign-in", element: <SignIn /> },
        { path: "sign-up", element: <SignUp /> },
      ],
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
