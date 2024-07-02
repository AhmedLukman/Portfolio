import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      isLoading={pending}
      size="lg"
      className="bg-slate-400 font-bold animate-slideInFromBottom opacity-0 delay-1000 shadow-[0_8px_16px_rgb(0_0_0/0.3)] hover:!opacity-80"
    >
      Send
    </Button>
  );
};

export default SubmitButton;
