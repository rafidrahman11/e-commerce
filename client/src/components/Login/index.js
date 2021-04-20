import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { LoginContainer, LoginCard, Input, Button, Title } from "./LoginStyle";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn, selectUser } from "../../features/user/userSlice";
import { login } from "../../utils/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userDetails = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userDetails?._id) {
      const user = await login(email, password);
      if (user?._id) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        dispatch(loggedIn(user));
        setIsLoggedIn(true);
      }
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginContainer>
          <LoginCard onSubmit={handleLogin}>
            <Title>Login</Title>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              required
            />
            <Button type="submit">Login</Button>
          </LoginCard>
        </LoginContainer>
      ) : (
        <Redirect to="/shop" />
      )}
    </div>
  );
}

export default Login;
