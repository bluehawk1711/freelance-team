/**
 * API utilities and helper functions
 */

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
  subject: string;
}) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function subscribeNewsletter(email: string) {
  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to subscribe");
    }

    return await response.json();
  } catch (error) {
    console.error("Error subscribing:", error);
    throw error;
  }
}
