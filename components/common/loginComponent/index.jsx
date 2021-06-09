import { LoginOptions } from "./loginOptions";
import { EmailLogin } from "./emailLogin";
import { EmailSignup } from "./emailSignup";

const LoginComponent = ({ view, setView }) => {
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
