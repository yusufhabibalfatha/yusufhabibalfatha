function ContactForm() {
  return (
    <>
      <form
        action="https://formspree.io/f/xbjnbndr"
        method="POST"
        className="flex flex-col gap-2 mt-8"
      >
        <h4>Send a request to me about your needs.</h4>
        <input
          type="email"
          placeholder="Email address"
          className="w-full input input-bordered input-sm"
        />
        <textarea
          name="message"
          className="textarea textarea-bordered"
          placeholder="Request"
        ></textarea>
        <button type="submit" className="btn btn-primary w-fit">
          Send
        </button>
      </form>
    </>
  );
}

export default ContactForm;
