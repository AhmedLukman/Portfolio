"use client";

import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { sendEmail } from "@/lib/actions";

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
  return (
    <form action={formAction} className="max-w-xl mx-auto mt-10 space-y-5">
      <div className="flex gap-5">
        <Input
          isRequired
          name="name"
          label="Name"
          size="sm"
          variant="bordered"
          classNames={{
            inputWrapper:
              "border-slate-400 focus-within:!border-slate-300 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
            input: "text-slate-300",
          }}
        />
        <Input
          isRequired
          name="email"
          label="Email"
          size="sm"
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
        // isRequired
        name="message"
        label="Message"
        minRows={10}
        classNames={{
          inputWrapper:
            "border-slate-400 focus-within:!border-slate-300 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
          input: "text-slate-300",
        }}
        variant="bordered"
      />
      <div className="flex justify-center pt-5">
        <Button
          type="submit"
          size="lg"
          className="bg-slate-400 shadow-[0_8px_16px_rgb(0_0_0/0.3)]"
        >
          Send
        </Button>
        {form && <p className="text-red-500">{form}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
