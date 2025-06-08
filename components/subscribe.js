import { useState } from "react";

export default function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get("fields[email]");
    const subscribeBlog = formData.get("fields[subscribe_blog]");
    const subscribeDaynotes = formData.get("fields[subscribe_daynotes]");

    // Build the URL for MailerLite JSONP request
    const params = new URLSearchParams();
    params.append("fields[email]", email);
    if (subscribeBlog) params.append("fields[subscribe_blog]", subscribeBlog);
    if (subscribeDaynotes)
      params.append("fields[subscribe_daynotes]", subscribeDaynotes);

    const url = `https://assets.mailerlite.com/jsonp/1480450/forms/152739926495987184/subscribe?${params.toString()}`;

    // Submit using fetch with no-cors (because it's JSONP)
    await fetch(url, { method: "GET", mode: "no-cors" });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <small className="subscribe-sucesss">✅ Thank you for subscribing!</small>
    );
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <div className="subscribe-content">
        <input
          type="email"
          name="fields[email]"
          placeholder="Enter your email"
          required
        />

        <div className="subscribe-selection">
          <label>
            <input
              type="checkbox"
              defaultChecked={true}
              name="fields[subscribe_blog]"
              value="Yes"
            />{" "}
            Third Place
          </label>
          <label>
            <input
              type="checkbox"
              defaultChecked={true}
              name="fields[subscribe_daynotes]"
              value="Yes"
            />{" "}
            Daynotes
          </label>
        </div>
      </div>

      <button type="submit">Subscribe</button>
    </form>
  );
}
