<form name="contact-form" action="/contact" netlify-honeypot="bot-field" method="POST" id="contact" netlify>
  <input type="hidden" name="form-name" value="contact-form" />
  <div class="font-display text-3xl mb-6">
    <label class="mt-4 block text-sm font-body text-textGray">Name
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="name"
        class="mt-1 mb-2 p-1 text-charcoal focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
      />
    </label>
      <label class="mt-4 block text-sm font-body text-textGray">Email address
      <input
          type="text"
          name="email"
          id="email"
          autoComplete="email-address"
          class="mt-1 mb-2 p-1 text-charcoal focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
        />
    </label>
    <label class="mt-4 block text-sm font-body text-textGray">Reason for contacting
      <select
        name="reason"
        id="reason"
        class="mt-1 mb-2 p-1 bg-white focus:ring-purple-500 focus:border-purple-500 font- block w-full text-sm shadow-sm text-charcoal border-gray-300 rounded-md"
      >
        <option value="general" selected>General Info</option>
        <option value="media-inq">Media Inquiry</option>
        <option value="streamer-inq">Streamer/Influencer Inquiry</option>
      </select>
    </label>
    <label class="mt-4 block text-sm font-body text-textGray">Message
      <textarea 
        class="mt-1 w-full text-sm p-1 text-charcoal rounded-md" 
        name="message" 
        form="contact"
        placeholder="Enter text here..."
      ></textarea>
    </label>
  </div>
  <button 
    type="submit" 
    class="mt-2 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige uppercase"
  >
    Submit
  </button>
</form>