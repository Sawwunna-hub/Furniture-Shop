import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldContent,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Icon } from "@/Icons/Icons";
import { useState } from "react";

const formEmail = z.object({
  email: z.email("Please input invalid email."),
});

export default function FormForEmail() {
  const [waitFlag, setWaitFlag] = useState(false);

  const form = useForm<z.infer<typeof formEmail>>({
    resolver: zodResolver(formEmail),
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof formEmail>) {
    setWaitFlag(true);

    toast("You submitted email successfully.", {
      duration: 1000,
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
    console.log(data.email);
  }

  return (
    <div className="relative mr-10 md:mr-5 lg:mr-0">
      <form id="form-rhf-textarea" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldContent className="relative w-full">
                  <Input
                    className="h-8 w-full pr-10"
                    {...field}
                    type="email"
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    autoCapitalize="off"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />
        </FieldGroup>
      </form>

      <Button
        size="icon"
        variant="ghost"
        className="top-1 right-1 absolute bg-white h-6 "
        type="submit"
        form="form-rhf-textarea"
        // onClick={() => setWaitFlag(true)}
      >
        {!waitFlag ? (
          <Icon.paper_plain className="size-4 " />
        ) : (
          <Spinner className="size-4 " />
        )}
      </Button>
    </div>
  );
}
