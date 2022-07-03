import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import supabase from "../utils/supabase";
import {
  Button,
  Title,
  Dialog,
  Text,
  MediaQuery,
  SegmentedControl,
  Loader,
  Input,
  PasswordInput,
  Stack,
  Container,
} from "@mantine/core";
import { useState } from "react";

const LoginPage: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [operationType, setOperationType] = useState("login");

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
      setSuccess(true);
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
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  };

  return (
    <>
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
      <MediaQuery
        query="(max-width: 500px) and (min-width: 0)"
        styles={{ display: "none" }}
      >
        <Dialog
          opened={success}
          withCloseButton
          onClose={() => setSuccess(false)}
          size="lg"
          radius="md"
          transition="slide-up"
          transitionDuration={300}
          transitionTimingFunction="ease"
          position={{ bottom: 20, left: 20 }}
        >
          <Text p="md">
            Check your email and click the link to be redirected to the site
            logged in.
          </Text>
        </Dialog>
      </MediaQuery>
      <MediaQuery query="(min-width: 501px)" styles={{ display: "none" }}>
        <Dialog
          opened={success}
          withCloseButton
          onClose={() => setSuccess(false)}
          size="sm"
          radius="md"
          transition="slide-up"
          transitionDuration={300}
          transitionTimingFunction="ease"
          position={{ bottom: 20, left: 20 }}
        >
          <Text p="md">
            Check your email and click the link to be redirected to the site
            logged in.
          </Text>
        </Dialog>
      </MediaQuery>
    </>
  );
};

export default LoginPage;
