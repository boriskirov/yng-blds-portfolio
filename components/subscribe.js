export default function SubscribeForm() {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <form class="subscribe-form" action="https://assets.mailerlite.com/jsonp/1480450/forms/152739926495987184/subscribe" method="post" target="_blank">
          <div>
              <input type="email" name="fields[email]" placeholder="Enter your email" required />
              <div class="subscribe-selection">
                <label>
                  <input type="checkbox" name="fields[subscribe_blog]" value="Yes" /> Blog Posts
                </label>
                <label>
                  <input type="checkbox" name="fields[subscribe_daynotes]" value="Yes" /> Daynotes
                </label>
              </div>
          </div>
            <button type="submit">Subscribe</button>
          </form>
        `,
        }}
      />
    </div>
  );
}
