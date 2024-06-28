"use client";

import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { sendEmail } from "@/lib/actions";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const [
    {
      errors: { form },
    },
    formAction,
  ] = useFormState(sendEmail, {
    errors: {
      form: "",
    },
  });
  if (form)
    if (form === "success") toast.success("Message sent successfully");
    else toast.error(form);
  return (
    <form action={formAction} className="max-w-xl mx-auto mt-10 space-y-6">
      <div className="flex gap-6">
        <Input
          isRequired
          name="name"
          label="Name"
          variant="bordered"
          className="animate-slideInFromLeft opacity-0"
          classNames={{
            inputWrapper:
              "border-slate-400 focus-within:!border-slate-300 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
            input: "text-slate-300",
          }}
        />
        <Input
          isRequired
          className="animate-slideInFromRight opacity-0"
          name="email"
          label="Email"
          type="email"
          variant="bordered"
          classNames={{
            inputWrapper:
              "border-slate-400 focus-within:!border-slate-300 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
            input: "text-slate-300",
          }}
        />
      </div>
      <Textarea
        className="animate-slideInFromBottom opacity-0"
        isRequired
        name="message"
        label="Message"
        classNames={{
          inputWrapper:
            "border-slate-400 focus-within:!border-slate-300 !h-56 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
          input: "text-slate-300",
        }}
        variant="bordered"
      />
      <div className="flex justify-center pt-5">
        <SubmitButton />
      </div>
    </form>
  );
};

export default ContactForm;
