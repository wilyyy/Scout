import styled from "styled-components";
import { useState } from "react";

import AuthSignup from "@/components/AuthSignup";

const Auth = () => {
   const [email, setEmail] = useState();
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   return (
      <>
         <AuthSignup />
      </>
   );
};

export default Auth;
