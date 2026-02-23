import { useState, type FormEvent } from "react";
import { sanitizeFormData } from "../utils/sanitize.ts";
import ContactInput from "../components/ContactInput";
import SocialLinks from "../components/SocialLink.tsx";
import Button from "../components/Button";
import { Divider } from "../components/Divider";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (s: string) => {
    const emailRegex =
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return emailRegex.test(s);
  };
  const validateAll = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const e: typeof errors = {};
    if (!data.name) e.name = "Name is required";
    if (!data.email) e.email = "Email is required";
    else if (!isValidEmail(data.email)) e.email = "Invalid email format";
    if (!data.message || data.message.length < 5)
      e.message = "Message is too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const MIN_SUBMIT_INTERVAL = 30000;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime < MIN_SUBMIT_INTERVAL) {
      setErrorMessage("Please wait 30 seconds before submitting again.");
      return;
    }

    setSuccessMessage("");
    setErrorMessage("");
    setErrors({});

    const rawData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    if (!validateAll(rawData)) return;

    const sanitizedData = sanitizeFormData(rawData);

    setIsSubmitting(true);
    try {
      const resp = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });
      if (!resp.ok) {
        const body = await resp.text();
        throw new Error(`Server error: ${resp.status} ${body}`);
      }
      setLastSubmitTime(now);
      setSuccessMessage("Thank you! Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      if (import.meta.env.DEV) {
        console.error("Form submission error:", message);
      }
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contacts"
      className="relative z-10 mt-32 ml-3 h-auto mb-8 flex flex-col items-center"
    >
      <Divider
        widthPx={2}
        heightPx={56}
        leftPx={0}
        color="grey-medium"
        topPx={-68}
      />
      <h2 className=" relative self-start text-4xl text-accent-red font-bold">
        LET'S TALK?
      </h2>
      <Divider
        widthPx={2}
        heightPx={460}
        leftPx={0}
        color="grey-medium"
        topPx={52}
      />
      <div className="relative flex justify-center ">
        <div className=" max-w-md  ">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-2 mt-6 "
          >
            <div>
              <ContactInput
                id="input-name"
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                required
              />
              {errors.name && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <ContactInput
                id="input-email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputMode="email"
                disabled={isSubmitting}
                required
              />
              {errors.email && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="input-message"
                className="text-sm text-accent-grey mb-4 block "
              >
                Message
              </label>
              <textarea
                id="input-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                disabled={isSubmitting}
                className=" focus:border-grey-dark  mb-2 min-h-24 w-full resize-none rounded-md border border-accent-grey bg-transparent px-4 py-3 text-sm placeholder:opacity-100 focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.message && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="primary"
                size="small"
                disabled={isSubmitting}
                ariaLabel="Submit this form"
                className=" w-auto text-center font-semibold"
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </Button>
            </div>

            {successMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mt-4 rounded-md bg-green-100 p-3 text-center text-sm text-green-700"
              >
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div
                role="alert"
                className="mt-4 rounded-md bg-red-100 p-3 text-center text-sm text-red-700"
              >
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
      <SocialLinks
        size="md"
        className=" grid grid-rows-2 grid-cols-3 gap-y-2 gap-x-4 mt-8"
      />
    </section>
  );
};

export default ContactSection;
