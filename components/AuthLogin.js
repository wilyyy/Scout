import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";

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
   border-radius: 16px;
   border: 1px solid #6d7992;
   backdrop-filter: blur(20px) saturate(164%);
   -webkit-backdrop-filter: blur(20px) saturate(164%);
   font-family: ${(props) => props.fontFamily};
   background: linear-gradient(
      135deg,
      ${(props) => props.gradient1} 20%,
      ${(props) => props.gradient2} 100%
   );
`;

const Input = styled.input`
   width: 80%;
   height: 50px;
   padding: 5%;
`;

const AuthLogin = ({ onSignUpClick }) => {
   const router = useRouter();
   const [username, setUsername] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const { theme } = useTheme();

   const LoginAccount = async () => {
      try {
         const result = await axios.post(
            "https://scout-serverside.herokuapp.com/signup",
            {
               email,
               password,
            }
         );
         router.push("/home");
         localStorage.setItem("email", result.data.email);
         localStorage.setItem("password", result.data._id);
      } catch (e) {
         console.log("Log In failed: " + e);
      }
   };
   return (
      <Container>
         <Form
            gradient1={ThemeConfig[theme].cardGradient}
            gradient2={ThemeConfig[theme].cardGradient2}
         >
            <h1>Log In</h1>
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
            <button onClick={LoginAccount}>Log In</button>
            <p>Dont have an account?</p>
            <a onClick={onSignUpClick}>Create an account</a>
         </Form>
      </Container>
   );
};

export default AuthLogin;
