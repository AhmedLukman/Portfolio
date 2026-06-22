"use client"

import { sendEmail } from "@/lib/actions"
import { initialFormState } from "@/lib/constants"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Alert,
  Button,
  CloseButton,
  cn,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextArea,
  TextField,
} from "@heroui/react"
import { Ripple } from "m3-ripple"
import { useActionState, useEffect, useRef, useState } from "react"

const inputClassName =
  "box-border rounded-[12px] border-2 border-slate-400 bg-transparent px-3 py-2 text-body placeholder:text-body/70 shadow-[0_8px_16px_rgb(0_0_0/0.3)] focus:border-slate-300!"
const fieldErrorClassName = "text-[#f31260]"

const ContactForm = () => {
  const [errors, formAction, isPending] = useActionState(
    sendEmail,
    initialFormState,
  )
  const { db } = errors
  const [showAlert, setShowAlert] = useState(false)

  const isDBSuccess = db === "success"
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (db) {
      queueMicrotask(() => setShowAlert(true))
    }
    if (db === "success" && formRef.current) {
      formRef.current.reset()
    }
  }, [db])

  return (
    <>
      <Form
        ref={formRef}
        action={formAction}
        className="mx-auto mt-14 flex max-w-lg flex-col gap-6 sm:max-w-xl"
        validationErrors={errors}
      >
        <div className="flex w-full flex-col gap-6 sm:flex-row">
          <TextField
            isRequired
            name="name"
            className="w-full animate-slide-in-from-left gap-2 opacity-0 animation-delay-500 sm:animation-delay-0"
          >
            <Label className="sr-only">Name</Label>
            <Input
              className={cn("h-14", inputClassName)}
              placeholder="Name *"
            />
            <FieldError className={fieldErrorClassName} />
          </TextField>
          <TextField
            isRequired
            className="w-full animate-slide-in-from-right gap-2 opacity-0 animation-delay-1000 sm:animation-delay-0"
            name="recipientEmail"
            type="email"
          >
            <Label className="sr-only">Email</Label>
            <Input
              className={cn("h-14", inputClassName)}
              placeholder="Email *"
            />
            <FieldError className={fieldErrorClassName} />
          </TextField>
        </div>
        <TextField
          isRequired
          className="w-full animate-slide-in-from-bottom gap-2 opacity-0 animation-delay-1500 sm:animation-delay-0"
          name="message"
        >
          <Label className="sr-only">Message</Label>
          <TextArea
            className={cn("h-56", inputClassName, "px-3! py-2!")}
            placeholder="Message *"
          />
          <FieldError className={fieldErrorClassName} />
        </TextField>
        <div className="flex w-full justify-center">
          <Button
            type="submit"
            isPending={isPending}
            size="lg"
            className={cn(
              "h-12! w-[121.36px]! min-w-24! animate-slide-in-from-bottom gap-3! overflow-hidden rounded-[14px]! bg-slate-400 px-6! text-base! leading-6! font-bold! text-black! opacity-0 shadow-[0_8px_16px_rgb(0_0_0/0.3)] transition-[transform,scale,color,background,background-color,border-color,text-decoration-color,fill,stroke,opacity]! duration-[250ms]! animation-delay-2000 hover:opacity-80! sm:animation-delay-1000",
              {
                "w-[176px]! px-7! opacity-80!": isPending,
              },
            )}
          >
            <Ripple disabled={isPending} />
            {isPending ? (
              <>
                <Spinner color="current" size="sm" />
                Sending
              </>
            ) : (
              "Send"
            )}
            <FontAwesomeIcon icon={faEnvelope} className="h-4! w-5!" />
          </Button>
        </div>
      </Form>
      {!!db && showAlert && (
        <Alert
          status={isDBSuccess ? "success" : "danger"}
          className={cn(
            "mx-auto mt-10 max-w-xl rounded-[14px] border-2 bg-transparent px-4 py-3",
            isDBSuccess
              ? "border-[#17c964] text-[#17c964]"
              : "border-[#f31260] text-[#f31260]",
          )}
        >
          <Alert.Content>
            <Alert.Title className="text-current">
              {isDBSuccess ? "Success" : "Error"}
            </Alert.Title>
            <Alert.Description className="text-current">
              {db === "success"
                ? "Email successfully sent!"
                : "Error sending email, please try again."}
            </Alert.Description>
          </Alert.Content>
          <CloseButton
            aria-label="Close contact form alert"
            className="rounded-lg bg-transparent transition-colors hover:bg-current/10"
            onPress={() => setShowAlert(false)}
          />
        </Alert>
      )}
    </>
  )
}

export default ContactForm
