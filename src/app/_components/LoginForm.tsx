"use client";

import { useForm } from "react-hook-form";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { redirect } from "next/navigation";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
  Flex,
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

    setCookie("userInfo", valuesString, {
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // one day
    });

    if (cookieExist) {
      toast({
        title: "Info updated.",
        status: "success",
        duration: 2000,
      });
    }

    redirect("/characters");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
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
          {errors?.username?.message &&
            typeof errors.username.message === "string" && (
              <FormErrorMessage>{errors.username.message}</FormErrorMessage>
            )}
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
          {errors?.jobTitle?.message &&
            typeof errors.jobTitle.message === "string" && (
              <FormErrorMessage>{errors.jobTitle.message}</FormErrorMessage>
            )}
        </FormControl>
        <Button
          mt={4}
          w={"100%"}
          colorScheme="green"
          isLoading={isSubmitting}
          type="submit"
        >
          {cookieExist ? "Update info" : "Let's go!"}
        </Button>
      </Flex>
    </form>
  );
}
