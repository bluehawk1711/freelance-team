"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Container,
  Section,
  Heading,
  Text,
  Button,
  FloatingInput,
  Textarea,
} from "@/components/ui";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  updateFormData,
  setSubmitting,
  setSuccess,
  setError,
} from "@/redux/slices/contactSlice";
import { contactFormSchema, type ContactFormData } from "@/schemas/contact.schema";
import { Mail, MapPin, Share2, Camera, MessageSquare } from "lucide-react";
import { Toaster, toast } from "sonner";

export function ContactSection() {
  const dispatch = useAppDispatch();
  const { formData, isSubmitting, isSuccess } = useAppSelector(
    (state) => state.contact
  );
  const { email, address } = useAppSelector((state) => state.site);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: formData,
  });

  const onSubmit = async (data: ContactFormData) => {
    dispatch(setSubmitting(true));
    dispatch(setError(null));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      dispatch(updateFormData(data));
      dispatch(setSuccess(true));
      toast.success("Message sent successfully! We'll be in touch soon.");
      reset();

      setTimeout(() => {
        dispatch(setSuccess(false));
      }, 3000);
    } catch {
      dispatch(setError("Failed to send message. Please try again."));
      toast.error("Failed to send message. Please try again.");
    } finally {
      dispatch(setSubmitting(false));
    }
  };

  return (
    <>
      <Toaster />
      <Section size="lg" className="relative" id="contact">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <p className="text-xs sm:text-sm font-mono font-semibold tracking-[0.2em] text-primary uppercase">
                Get In Touch
              </p>

              <Heading level={2} className="text-foreground leading-tight">
                Let&apos;s Build Something
                <br />
                Amazing Together.
              </Heading>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <p className="text-muted-foreground">{email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {[Share2, Camera, MessageSquare].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border hover:bg-muted transition-colors"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <FloatingInput
                        label="Name"
                        {...register("name")}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <Text size="xs" className="mt-1 text-destructive">
                          {errors.name.message}
                        </Text>
                      )}
                    </div>
                    <div>
                      <FloatingInput
                        label="Email"
                        type="email"
                        {...register("email")}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <Text size="xs" className="mt-1 text-destructive">
                          {errors.email.message}
                        </Text>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Project Details
                    </label>
                    <Textarea
                      placeholder="Tell us about your vision..."
                      {...register("message")}
                      disabled={isSubmitting}
                      className="min-h-[120px]"
                    />
                    {errors.message && (
                      <Text size="xs" className="mt-1 text-destructive">
                        {errors.message.message}
                      </Text>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    className="w-full"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : isSuccess
                        ? "Message Sent!"
                        : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
