'use client';
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { contactFormSchema, contactFormType } from "@/schemas/contact-form-schema";
import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { InputGroup, InputGroupTextarea, InputGroupAddon, InputGroupText } from "../ui/input-group";
import { Spinner } from "../ui/spinner";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactForm() {
    const form = useForm({
        defaultValues: {
            user_name: "",
            user_email: "",
            message: ""
        },
        resolver: zodResolver(contactFormSchema)
    });
    const onSubmit = async (formData: contactFormType) => {
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, {
                publicKey: PUBLIC_KEY,
            });
            toast.success('Message sent successfully!');
            form.reset();
        } catch (error) {
            console.error('EmailJS error:', error);
            toast.error('Failed to send the message. Please try again.');
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FieldGroup className="gap-y-4">
                    <Controller
                        name="user_name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-full-name">
                                    Full name
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-full-name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="your name"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="user_email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-email">
                                    Email address
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-title"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="m@example.com"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="message"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-message">
                                    Description
                                </FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea
                                        {...field}
                                        id="form-rhf-demo-message"
                                        placeholder="Hello there"
                                        rows={6}
                                        className="min-h-24 resize-none placeholder:text-muted-foreground/60"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    <InputGroupAddon align="block-end">
                                        <InputGroupText className="tabular-nums">
                                            {field.value.length}/200 characters
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <Field>
                    <Button type="submit" className="w-full dark:hover:bg-accent hover:bg-accent-foreground" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ?
                            <>
                                <Spinner />
                                Sending...
                            </>
                            : "Send Message"
                        }
                    </Button>
                </Field>
            </form>
        </div>
    );
}