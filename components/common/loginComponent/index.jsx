import { LoginOptions } from "./loginOptions";
import { EmailLogin } from "./emailLogin";
import { EmailSignup } from "./individualSignup";
import { AccountType } from "./accountType";
import { BusinessSignup } from "./businessSignup";

const LoginComponent = ({ view, setView }) => {
  return (
    <>
      {view.options ? (
        <LoginOptions view={view} setView={setView} />
      ) : view.login ? (
        <EmailLogin />
      ) : view.choose ? (
        <AccountType view={view} setView={setView} />
      ) : view.businessSignup ? (
        <BusinessSignup />
      ) : (
        <EmailSignup />
      )}
    </>
  );
};

export { LoginComponent };
