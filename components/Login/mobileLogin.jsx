import { useState } from "react";
import { LoginComponent } from "../common";

const Mobilelogin = () => {
  const [view, setView] = useState({
    options: true,
    login: false,
  });

  return (
    <main>
      <LoginComponent view={view} setView={setView} />
    </main>
  );
};

export { Mobilelogin };
