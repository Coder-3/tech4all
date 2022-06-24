import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import supabase from "../utils/supabase";
import { Button, List, TextInput, Title, Dialog, Text } from "@mantine/core";
import { useState } from "react";

const LoginPage: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const email = target.email.value;

    await supabase.auth.signIn({ email });
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        margin: "auto",
        padding: "20px",
      }}
    >
      <Head>
        <title>Login</title>
      </Head>
      <Title my={20} order={1}>
        Login
      </Title>
      <List type="ordered" mb={20}>
        <List.Item>Type your email</List.Item>
        <List.Item>Click login</List.Item>
        <List.Item>
          Click link in your email which will take you back to the website but
          you will be logged in
        </List.Item>
      </List>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          description="Enter your email address that you'd like to use to login"
          type="email"
          name="email"
          mb={10}
        />
        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>
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
    </div>
  );
};

export default LoginPage;
