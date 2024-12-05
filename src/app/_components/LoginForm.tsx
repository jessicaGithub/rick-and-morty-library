'use client';

import { useForm } from "react-hook-form";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { redirect } from 'next/navigation'

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

interface LoginFormContext {
  username: string;
  jobTitle: string;
}

export default function LoginForm() {

  const cookieExist = hasCookie("userInfo");
  const cookieVal = cookieExist ? getCookie("userInfo") : null;
  const userData = cookieExist ? JSON.parse(String(cookieVal)) : null;
  const toast = useToast();
  
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: userData?.username || "",
      jobTitle: userData?.jobTitle || "",
    },
  });

  async function onSubmit(values: LoginFormContext) {

    const valuesString = JSON.stringify(values);

    setCookie('userInfo', valuesString, {
      secure: true,
      sameSite: "strict",
    });

    if (!cookieExist) {
      redirect("/characters");
    } else {
      toast({
        title: "Info updated.",
        status: "success",
        duration: 2000,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.username}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          placeholder="Enter your username"
          {...register("username", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.jobTitle}>
        <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
        <Input
          id="jobTitle"
          placeholder="Enter your job title"
          {...register("jobTitle", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.jobTitle && errors.jobTitle.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        isLoading={isSubmitting}
        type="submit"
      >
        {cookieExist ? "Update info" : "Let's go!"}
      </Button>
    </form>
  );
}
