import styled from "styled-components";
import { useState } from "react";

import AuthSignup from "@/components/AuthSignup";
import AuthLogin from "@/components/AuthLogin";

const Page = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
`;

const Auth = () => {
   const [status, setStatus] = useState("signup");

   return (
      <Page>
         <h1>Welcome to Scout</h1>
         {status === "signup" && <AuthSignup onLoginClick={() => setStatus("login")} />}
         {status === "login" && <AuthLogin onSignUpClick={() => setStatus("signup")} />}
      </Page>
   );
};

export default Auth;
