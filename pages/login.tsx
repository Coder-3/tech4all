import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import supabase from "../utils/supabase";
import { Button, List, TextInput, Title } from "@mantine/core";

const LoginPage: NextPage = () => {
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const email = target.email.value;

    const response = await supabase.auth.signIn({ email });
    console.log("this is the response", response);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 400,
        margin: "auto",
      }}
    >
      <Head>
        <title>Login</title>
      </Head>
      <Title my={20} order={1}>
        Login (dev purposes)
      </Title>
      <List type="ordered" mb={20}>
        <List.Item>Run app on localhost:3000</List.Item>
        <List.Item>Type your email</List.Item>
        <List.Item>Click login</List.Item>
        <List.Item>
          Click link in your email which will take you back to localhost:3000
          but youll be logged in
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
