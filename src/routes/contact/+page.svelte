<svelte:head>
 <title>contact · wasita.space</title>
</svelte:head>

<div class="px-4 lg:px-6 pt-12 pb-20 max-w-3xl mx-auto">
 <h1 class="font-display leading-[0.95] mb-6" style="font-size: clamp(3rem, 9vw, 6.5rem);">
 say <span style="color: var(--accent);">hi</span>.<span class="sparkle" aria-hidden="true" style="width: 0.18em; height: 0.18em; margin-left: 0.15em; vertical-align: 0.55em;"></span>
 </h1>

 <p class="font-body text-lg leading-relaxed mb-10 max-w-2xl" style="color: var(--ink-soft);">
 If you'd like to talk research, reach out about a project, or just send a postcard from the internet — drop a note here and I'll write back.
 </p>

 <form
 action="https://formspree.io/f/xvoeogae"
 method="POST"
 class="flex flex-col gap-5 max-w-xl"
 >
 <div class="flex flex-col gap-1.5">
 <label class="font-mono text-xs" for="name" style="color: var(--ink-faint);">name</label>
 <input
 class="contact-input"
 type="text"
 name="name"
 id="name"
 placeholder="your name"
 required
 />
 </div>
 <div class="flex flex-col gap-1.5">
 <label class="font-mono text-xs" for="email" style="color: var(--ink-faint);">e-mail</label>
 <input
 class="contact-input"
 type="email"
 name="_replyto"
 id="email"
 placeholder="you@provider.com"
 required
 />
 </div>
 <div class="flex flex-col gap-1.5">
 <label class="font-mono text-xs" for="subject" style="color: var(--ink-faint);">subject</label>
 <input
 class="contact-input"
 type="text"
 name="subject"
 id="subject"
 placeholder="re:"
 />
 </div>
 <div class="flex flex-col gap-1.5">
 <label class="font-mono text-xs" for="message" style="color: var(--ink-faint);">message</label>
 <textarea
 class="contact-input resize-y"
 name="message"
 rows="6"
 id="message"
 placeholder="say hello..."
 required
 ></textarea>
 </div>
 <button
 class="btn-accent self-start mt-3 px-6 py-2 rounded-lg font-mono text-sm"
 type="submit"
 >
 send <span class="heart" aria-hidden="true" style="width: 0.85em; height: 0.85em; vertical-align: -0.1em; margin-left: 0.3em;"></span>
 </button>
 </form>
</div>

<style>
 :global(.contact-input) {
   width: 100%;
   padding: 0.6rem 0.9rem;
   background: var(--paper);
   border: 1px solid var(--rule);
   color: var(--ink);
   font-family: "DM Sans", ui-sans-serif, sans-serif;
   font-size: 1rem;
   border-radius: 0.25rem;
   transition: border-color 0.15s ease, box-shadow 0.15s ease;
 }
 :global(.contact-input::placeholder) {
   color: var(--ink-faint);
 }
 :global(.contact-input:focus) {
   outline: none;
   border-color: var(--accent);
   box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent);
 }
</style>
