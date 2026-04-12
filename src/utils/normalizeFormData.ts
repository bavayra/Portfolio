const EMAIL_REGEX =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

export const isValidEmail = (s: string): boolean => EMAIL_REGEX.test(s);

export function normalizeFormData(data: {
  name: string;
  email: string;
  message: string;
}): typeof data {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    message: data.message.trim(),
  };
}
