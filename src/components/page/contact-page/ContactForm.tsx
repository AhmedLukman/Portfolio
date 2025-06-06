"use client";

import { startTransition, useActionState, useState } from "react";
import { Input, Textarea } from "@heroui/input";
import { Alert } from "@heroui/alert";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { initialFormState } from "@/lib/constants";
import { cn } from "@heroui/theme";
import { sendEmail } from "@/lib/actions";
import { useRef, useEffect } from "react";

const ContactForm = () => {
  const [errors, formAction, isPending] = useActionState(
    sendEmail,
    initialFormState
  );
  const { db } = errors;
  const [showAlert, setShowAlert] = useState(false);

  const isDBSuccess = db === "success";
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(db){
      setShowAlert(true);
    }
    if (db === "success" && formRef.current) {
      formRef.current.reset();
    }
  }, [db]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <>
      <Form
        ref={formRef}
        onSubmit={onSubmit}
        className="max-w-lg sm:max-w-xl mx-auto mt-14 flex flex-col gap-6"
        validationErrors={errors}
      >
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          <Input
            isRequired
            name="name"
            label="Name"
            variant="bordered"
            className="animate-slideInFromLeft opacity-0 delay-500 sm:delay-0"
            classNames={{
              inputWrapper:
                "border-slate-400 focus-within:!border-slate-300 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
              input: "text-body",
            }}
          />
          <Input
            isRequired
            className="animate-slideInFromRight opacity-0 delay-1000 sm:delay-0"
            name="recipientEmail"
            type="email"
            label="Email"
            variant="bordered"
            classNames={{
              inputWrapper:
                "border-slate-400 focus-within:!border-slate-300 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
              input: "text-body",
            }}
          />
        </div>
        <Textarea
          isRequired
          className="animate-slideInFromBottom opacity-0 delay-1500 sm:delay-0"
          name="message"
          label="Message"
          classNames={{
            inputWrapper:
              "border-slate-400 focus-within:!border-slate-300 !h-56 shadow-[0_8px_16px_rgb(0_0_0/0.3)]",
            input: "text-body",
          }}
          variant="bordered"
        />
        <div className="flex justify-center w-full">
          <Button
            type="submit"
            isLoading={isPending}
            size="lg"
            className={cn(
              "bg-slate-400 font-bold animate-slideInFromBottom opacity-0 delay-2000 sm:delay-1000 shadow-[0_8px_16px_rgb(0_0_0/0.3)] hover:!opacity-80",
              {
                "!opacity-80": isPending,
              }
            )}
            endContent={<FontAwesomeIcon icon={faEnvelope} />}
          >
            Send
          </Button>
        </div>
      </Form>
      <Alert
        variant="bordered"
        isClosable
        className="max-w-xl mx-auto mt-10"
        isVisible={!!db && showAlert}
        onClose={() => setShowAlert(false)}
        color={isDBSuccess ? db : "danger"}
        description={
          db === "success"
            ? "Email successfully sent!"
            : "Error sending email, please try again."
        }
        title={isDBSuccess ? "Success" : "Error"}
        hideIconWrapper
      />
    </>
  );
};

export default ContactForm;
