import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";

const LoginModel = () => {
  const loginModel = useLoginModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(() => {}, []);

  return <div>LoginModel</div>;
};

export default LoginModel;
