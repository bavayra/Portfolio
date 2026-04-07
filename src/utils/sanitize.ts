export function sanitizeFormData(data: {
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
