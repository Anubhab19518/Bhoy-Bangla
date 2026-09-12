"use server";

export async function submitForm(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const purpose = formData.get("purpose")?.toString();

  if (!name || !email || !phone || !purpose) {
    return { success: false, message: "All fields are required." };
  }

  try {
    // Forward to Google Apps Script Web App Endpoint
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/your_script_id/exec";
    
    // If we are using the placeholder URL, mock a successful response
    if (GOOGLE_SCRIPT_URL.includes("your_script_id")) {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true, message: "Application submitted successfully." };
    }

    // We send a POST request. Google Apps script receives this as POST event.
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, purpose }),
    });

    if (response.ok) {
      return { success: true, message: "Application submitted successfully." };
    } else {
      return { success: false, message: "Failed to submit application. Please try again." };
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "An error occurred during submission." };
  }
}
