import { useState } from "react";
import { LoginOptions } from "./loginOptions";
import { EmailLogin } from "./emailLogin";
import { EmailSignup } from "./emailSignup";

const LoginComponent = () => {
  const [view, setView] = useState({
    options: true,
    login: false,
  });

  return (
    <>
      {view.options ? (
        <LoginOptions setView={setView} />
      ) : view.login ? (
        <EmailLogin />
      ) : (
        <EmailSignup />
      )}
    </>
  );
};

export { LoginComponent };
