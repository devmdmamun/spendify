import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setError(null);
    setIsPending(true);

    try {
      //sign up user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!res) {
        throw new Error("Could not compleate the sign up");
      }
      // add name

      await res.user.updateProfile({ displayName: name });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { error, isPending, signup };
};
