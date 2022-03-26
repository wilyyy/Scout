import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Form = styled.div`
   width: 50%;
   height: 500px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   justify-content: space-evenly;
   background: pink;
`;

const Input = styled.input`
   width: 80%;
   height: 50px;
   padding: 5%;
`;

const AuthSignup = () => {
   const router = useRouter();
   const [username, setUsername] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const SignUpAccount = async () => {
      try {
         const result = await axios.post(
            "https://scout-serverside.herokuapp.com/signup",
            {
               email,
               password,
            }
         );
         router.push("/");
      } catch (e) {
         console.log("Sign Up failed: " + e);
      }
   };

   return (
      <Container>
         <Form>
            <Input
               type="email"
               placeholder="Email..."
               onChange={(e) => setEmail(e.target.value)}
            />
            <Input
               type="password"
               placeholder="Password..."
               onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={SignUpAccount}>Sign Up</button>
         </Form>
      </Container>
   );
};

export default AuthSignup;
