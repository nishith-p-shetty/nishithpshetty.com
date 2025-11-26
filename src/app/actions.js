"use server";

import { SendMail } from "@/lib/SendMail";

async function validateTurnstile(token, remoteip, secretKey) {
  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);
  formData.append("remoteip", remoteip);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Turnstile validation error:", error);
    return { success: false, "error-codes": ["internal-error"] };
  }
}

export async function submitContactForm(prevState, formData) {
  void prevState;

  const token =
    formData.get("turnstileToken") || formData.get("cf-turnstile-response");

  if (!token) {
    return { message: "error", error: "Verification required" };
  }

  const { TURNSTILE_SECRET_KEY } = process.env;

  if (!TURNSTILE_SECRET_KEY) {
    return { message: "error", error: "Server configuration error" };
  }

  const validation = await validateTurnstile(
    token,
    "unknown",
    TURNSTILE_SECRET_KEY,
  );

  if (!validation.success) {
    return {
      message: "error",
      error: "Verification failed. Please try again.",
    };
  }

  const result = await SendMail(formData);
  return result;
}
