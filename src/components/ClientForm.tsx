"use client";

import { useState } from "react";
import { submitForm } from "@/app/actions";
import styles from "@/app/page.module.css";

export default function ClientForm() {
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(e.currentTarget);
    const result = await submitForm(formData);

    if (result.success) {
      setStatus({ type: "success", message: result.message });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: "error", message: result.message });
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.exactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">FULL NAME <span className={styles.asterisk}>*</span></label>
        <input type="text" id="name" name="name" required placeholder="Your full name" />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="email">EMAIL <span className={styles.asterisk}>*</span></label>
        <input type="email" id="email" name="email" required placeholder="Your email address" />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="phone">PHONE <span className={styles.asterisk}>*</span></label>
        <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" maxLength={10} minLength={10} title="Please enter exactly 10 digits" placeholder="Your phone number" />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="purpose">STATEMENT OF PURPOSE <span className={styles.asterisk}>*</span></label>
        <textarea id="purpose" name="purpose" rows={3} required placeholder="Why do you want to join?"></textarea>
      </div>
      
      <div className={styles.formFooter}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" required />
          <span>I agree that my personal data will be processed in accordance with the privacy policy</span>
        </label>
        <button type="submit" className={styles.submitBtnExact} disabled={loading}>
          {loading ? "..." : "Apply Now"}
        </button>
      </div>

      {status.message && (
        <div className={`${styles.formStatus} ${status.type === "success" ? styles.formSuccess : styles.formError}`}>
          {status.message}
        </div>
      )}
    </form>
  );
}
