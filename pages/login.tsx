import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import supabase from "../utils/supabase";
import {
  Button,
  Title,
  SegmentedControl,
  Loader,
  Input,
  PasswordInput,
  Stack,
  Container,
} from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [operationType, setOperationType] = useState("login");

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      router.push("/");
    }
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert(
        "Please check your inbox and click on the link to confirm your email"
      );
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="xs">
      <Head>
        <title>Login</title>
      </Head>
      <Stack align="center" style={{ width: "" }}>
        <Title my={20} order={1}>
          Login or Signup
        </Title>
        <SegmentedControl
          value={operationType}
          onChange={setOperationType}
          data={[
            { label: "Login", value: "login" },
            { label: "Signup", value: "signup" },
          ]}
        />
        {loading ? (
          <Loader />
        ) : operationType === "login" ? (
          <form style={{ width: "100%" }} onSubmit={handleLogin}>
            <Input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required
              onChange={(e: any) => setEmail(e.target.value)}
              mb="sm"
            />
            <PasswordInput
              id="password"
              placeholder="Your password"
              value={password}
              required
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <Button mt="sm" type="submit" style={{ width: "100%" }}>
              Sign In
            </Button>
          </form>
        ) : (
          <form style={{ width: "100%" }} onSubmit={handleSignup}>
            <Input
              id="email"
              className="inputField"
              type="email"
              placeholder="New email"
              value={email}
              required
              onChange={(e: any) => setEmail(e.target.value)}
              mb="sm"
            />
            <PasswordInput
              id="password"
              placeholder="New password"
              value={password}
              required
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <Button mt="sm" type="submit" style={{ width: "100%" }}>
              Sign Up
            </Button>
          </form>
        )}
      </Stack>
    </Container>
  );
};

export default LoginPage;
