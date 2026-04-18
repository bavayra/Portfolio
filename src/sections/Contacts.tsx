import { useEffect, useReducer, useRef, type FormEvent } from "react";
import { normalizeFormData, isValidEmail } from "../utils/normalizeFormData.ts";
import TextInput from "../components/TextInput.tsx";
import SocialLinks from "../components/SocialLink.tsx";
import Button from "../components/Button";
import Divider from "../components/Divider";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormFields>;

type FormState = {
  fields: FormFields;
  errors: FormErrors;
  isSubmitting: boolean;
  successMessage: string;
  errorMessage: string;
};

type FormAction =
  | { type: "SET_FIELD"; field: keyof FormFields; value: string }
  | { type: "SET_ERRORS"; errors: FormErrors }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_FAILURE"; message: string };

const initialState: FormState = {
  fields: { name: "", email: "", message: "" },
  errors: {},
  isSubmitting: false,
  successMessage: "",
  errorMessage: "",
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SUBMIT_START":
      return {
        ...state,
        isSubmitting: true,
        successMessage: "",
        errorMessage: "",
        errors: {},
      };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        successMessage: "Thank you! Your message has been sent.",
        fields: { name: "", email: "", message: "" },
      };
    case "SUBMIT_FAILURE":
      return { ...state, isSubmitting: false, errorMessage: action.message };
    default:
      return state;
  }
}

const MIN_SUBMIT_INTERVAL = 30000;

function getLastSubmitTime(): number {
  return parseInt(sessionStorage.getItem("lastFormSubmit") ?? "0", 10);
}

function saveLastSubmitTime(): void {
  sessionStorage.setItem("lastFormSubmit", Date.now().toString());
}

function validateFields(data: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!data.name) errors.name = "Name is required";
  if (!data.email) errors.email = "Email is required";
  else if (!isValidEmail(data.email)) errors.email = "Invalid email format";
  if (!data.message || data.message.length < 5)
    errors.message = "Message is too short";
  return errors;
}

const Contacts = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { fields, errors, isSubmitting, successMessage, errorMessage } = state;

  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (successMessage && successRef.current) {
      successRef.current.focus();
    }
  }, [successMessage]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const normalizedData = normalizeFormData(fields);
    const validationErrors = validateFields(normalizedData);
    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: validationErrors });
      return;
    }

    const now = Date.now();
    if (now - getLastSubmitTime() < MIN_SUBMIT_INTERVAL) {
      dispatch({
        type: "SUBMIT_FAILURE",
        message: "Please wait 30 seconds before submitting again.",
      });
      return;
    }

    dispatch({ type: "SUBMIT_START" });

    try {
      const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
      if (!FORMSPREE_ID) {
        throw new Error("VITE_FORMSPREE_ID is not set");
      }
      const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(normalizedData),
      });

      if (!resp.ok) {
        let errBody = await resp.text();
        if (!errBody) {
          errBody = resp.statusText || `HTTP ${resp.status}`;
        } else {
          try {
            const json = JSON.parse(errBody);
            errBody = json.error || JSON.stringify(json);
          } catch (parseErr) {
            if (import.meta.env.DEV)
              console.warn("Failed to parse error body:", parseErr);
          }
        }
        throw new Error(`Server error: ${resp.status} ${errBody}`);
      }

      saveLastSubmitTime();
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      if (import.meta.env.DEV) {
        console.error("Form submission error:", msg);
      }
      dispatch({
        type: "SUBMIT_FAILURE",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section
      id="contacts"
      aria-labelledby="contacts-heading"
      className="relative z-10 mt-20 ml-3 h-auto flex pb-8 flex-col items-center tablet-sm:ml-12 desktop-lg:ml-10 desktop-xl:h-[60vh]"
    >
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx={58}
        //58px = height of the top divider; doesn't depend on screen size
        leftPx={0}
        color="grey-2"
        topPx={-68} //-68px = top position of the top divider; doesn't depend on screen size
      />
      <h2
        className="relative self-start text-(length:--contact-title-size) text-accent-red font-bold"
        id="contacts-heading"
      >
        LET'S TALK?
      </h2>
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--contacts-div-bot-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--contacts-div-bot-top)"
      />
      <div className="flex flex-col desktop-sm:grid desktop-sm:grid-cols-2 desktop-sm:gap-x-20 desktop-md:gap-x-48">
        <div className="relative flex justify-center">
          <div>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-2 mt-6 phone-md:w-72 tablet-sm:w-88"
            >
              <div>
                <TextInput
                  id="input-name"
                  label="Name"
                  type="text"
                  value={fields.name}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "name",
                      value: e.target.value,
                    })
                  }
                  disabled={isSubmitting}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="-mt-6 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <TextInput
                  id="input-email"
                  label="Email"
                  type="email"
                  value={fields.email}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "email",
                      value: e.target.value,
                    })
                  }
                  inputMode="email"
                  disabled={isSubmitting}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="-mt-6 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="input-message"
                  className="text-sm block text-grey-3 mb-4 phone-md:text-lg desktop-xl:text-xl"
                >
                  Message
                </label>
                <textarea
                  id="input-message"
                  value={fields.message}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "message",
                      value: e.target.value,
                    })
                  }
                  placeholder="Write your message..."
                  required
                  disabled={isSubmitting}
                  className="focus:border-text mb-2 min-h-24 w-full resize-none rounded-md border border-grey-2 bg-transparent px-4 py-3 text-sm placeholder:opacity-100 focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 desktop-xl:min-h-36 desktop-xl:text-lg"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="-mt-6 text-sm text-red-600"
                    role="alert"
                  >
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
                  className="w-auto text-center"
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </Button>
              </div>

              {successMessage && (
                <div
                  ref={successRef}
                  role="status"
                  tabIndex={-1}
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
          className="grid grid-rows-2 grid-cols-3 gap-2 mt-8 tablet-sm:gap-x-10 tablet-sm:mx-auto tablet-sm:gap-y-4 desktop-xl:my-28 desktop-xl:mx-4"
        />
      </div>
    </section>
  );
};

export default Contacts;
