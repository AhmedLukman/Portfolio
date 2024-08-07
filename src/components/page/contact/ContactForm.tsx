"use client";

import React, { useRef } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { sendEmail } from "@/lib/actions";
import toast from "react-hot-toast";
import SubmitButton from "../../ui/SubmitButton";
import { initialFormState } from "@/lib/constants";

const ContactForm = () => {
  const [{ db, email, message, name }, formAction] = useFormState(
    sendEmail,
    initialFormState
  );

  const formRef = useRef<HTMLFormElement>(null);

  if (db)
    if (db === "success") {
      toast.success("Message sent successfully");
      formRef.current?.reset();
    } else toast.error(db);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="max-w-xl mx-auto mt-14 space-y-6"
    >
      <div className="flex gap-6">
        <Input
          isRequired
          name="name"
          label="Name"
          variant="bordered"
          className="animate-slideInFromLeft opacity-0"
          isInvalid={!!name}
          errorMessage={name}
          classNames={{
            inputWrapper:
              "border-slate-400 focus-within:!border-slate-300 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
            input: "text-slate-300",
          }}
        />
        <Input
          isRequired
          className="animate-slideInFromRight opacity-0"
          isInvalid={!!email}
          errorMessage={email}
          name="email"
          label="Email"
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
        isInvalid={!!message}
        errorMessage={message}
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
