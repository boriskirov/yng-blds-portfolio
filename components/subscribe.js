export default function SubscribeForm() {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          
          <form class="subscribe-form" action="https://assets.mailerlite.com/jsonp/1480450/forms/152739926495987184/subscribe" method="post" target="_blank">
            <input type="email"  name="fields[email]" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          
        `,
        }}
      />
    </div>
  );
}
