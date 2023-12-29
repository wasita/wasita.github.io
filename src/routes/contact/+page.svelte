<h1 class="pt-4 pb-8 font-bold">contact</h1>
<div class="container p-16 mx-auto my-4 border bg-surface-100 dark:bg-surface-800 rounded-xl border-surface-300 dark:border-surface-700">
	<form action="https://formspree.io/f/xvoeogae" method="POST" class="space-y-1">
		<label class="label" for="name">name</label>
		<input class="input" type="text" name="name" id="name" placeholder="your name" />
		<label class="label" for="email">email</label>
		<input class="input" type="email" name="_replyto" id="email" placeholder="youremail@provider.com" />
		<label class="label" for="subject">subject</label>
		<input class="input" type="text" name="subject" id="subject" placeholder="subject" />
		<label class="label" for="message">message</label>
		<textarea
			class="input"
			name="message"
			rows="4"
			id="message"
			placeholder="write your message here..." />
		<button class="btn variant-ghost-primary" type="submit">send</button>
	</form>
</div>
