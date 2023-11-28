"use client";

import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import useRegisterModel from "../../hooks/useRegisterModel";

const RegisterModel = () => {
  const loginModel = useLoginModel();
  const registerModel = useRegisterModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO ADD REGISTER AND LOGIN

      registerModel.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModel]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Model
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default RegisterModel;
