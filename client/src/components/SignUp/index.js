import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  SignUpContainer,
  SignUpCard,
  Input,
  Button,
  Title,
  SelectInput,
} from "./SignUpStyle";
import { loggedIn, selectUser } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../utils/api";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [signUpDone, setSignUpDone] = useState(false);
  const userDetails = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!userDetails?._id) {
      const user = await signup(name, email, password, role);
      if (user?._id) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        dispatch(loggedIn(user));
        setSignUpDone(true);
      }
    }
  };

  return (
    <div>
      {!signUpDone ? (
        <SignUpContainer>
          <SignUpCard onSubmit={handleSignUp}>
            <Title>Sign Up</Title>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              required
            />
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
            <SelectInput onChange={(e) => setRole(e.target.value)} name="role">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </SelectInput>
            <Button type="submit">Sign Up</Button>
          </SignUpCard>
        </SignUpContainer>
      ) : (
        <Redirect to="/shop" />
      )}
    </div>
  );
}

export default SignUp;
