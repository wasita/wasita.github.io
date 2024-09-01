<h1 class="pt-4 pb-8 font-bold lowercase">Contact</h1>
<div class="container p-16 mx-auto my-4 rounded-xl">
	<form action="https://formspree.io/f/xvoeogae" method="POST" class="space-y-1">
		<label class="label lowercase" for="name">Name</label>
		<input class="input lowercase" type="text" name="name" id="name" placeholder="your name" required />
		<label class="label lowercase" for="email">E-mail</label>
		<input class="input" type="email" name="_replyto" id="email" placeholder="youremail@provider.com" required/>
		<label class="label lowercase" for="subject">Subject</label>
		<input class="input" type="text" name="subject" id="subject" placeholder="subject" />
		<label class="label lowercase" for="message">Message</label>
		<textarea
			class="input"
			name="message"
			rows="4"
			id="message"
			placeholder="write your message here..." 
			required />
		<button class="btn variant-glass-primary hover:variant-ghost-primary lowercase" type="submit">Send</button>
	</form>
</div>