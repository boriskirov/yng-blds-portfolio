import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting email:", email);
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycby9Ub05MGxjc6uhmlmy4mu9JBMmDqfCarLDKKUglKAAhHZ-ch37DVKhY431f1ukc8YxPA/exec",
        {
          email,
        }
      );
      console.log("Response:", response);
      if (response.data.result === "success") {
        setStatus("Email successfully submitted!");
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatus("Submission failed. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default EmailForm;
