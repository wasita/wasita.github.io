---
title: My PhD User Story
date: August 2026
cover: /images/quals.jpg
excerpt: On building experiments, breaking down, and finding a middle ground.
visible: false
---

I had passed my qualifying exam. I had stood in front of my department, told a story about my research, and told it decently well. Everything had come together at the last minute: days before, I'd had a full-on panic attack and canceled my practice talk in lab meeting, calling my advisor in tears and asking to call off the whole thing. Thankfully his clinical training came through in that moment and he talked me down. Standing up there on the actual day, I felt something close to pride. My lab celebrated me afterward, and I could tell my advisor was proud.

<div style="display: flex; gap: 1rem; align-items: stretch;">
  <img src="/images/quals_wm_ljc.jpg" alt="My PhD advisor and me" style="flex: 1; border-radius: 8px; margin: 0; object-fit: cover; object-position: center 15%; height: 300px;" />
  <img src="/images/quals_lab_celebrate.jpeg" alt="COSAN Lab celebrating after my Specialist" style="flex: 1; border-radius: 8px; margin: 0; object-fit: cover; height: 300px;" />
</div>

_Left: My PhD advisor and me. Right: COSAN Lab celebrating me after my Specialist (what we call quals at Dartmouth)._

Unfortunately, the high did not last long. With the benchmark behind me and the implementation no longer breathing down my neck, it was like I was bobbing my head back up from underwater for the first time in months. And with that clarity came the recognition of a dissatisfaction that had been there all along, formless and unnamed, obscured by the fact that there was always _something_ to build next. I was never in much of a rush to finish, because I was not particularly looking forward to what waited on the other side. I sank into something I can only describe as a depressive state, and I did not come out of it for several months.

I think this dissatisfaction is largely why the project had taken so long in the first place. The shininess of finally learning the web development skills I had wanted since before grad school carried me for a while. But shininess could only carry me so far when I could not answer what it was all for.

The project I had presented was, on paper, exactly what I should have wanted to build. A synchronous multiplayer web app in which strangers co-watched curated video clips together in real time, chatting as they watched, forming impressions of each other, of the people they were watching, co-constructing meaning of the world as it unfolded before them. Getting the video synchronization decently right across clients had taken weeks of engineering. The real-time chat infrastructure, the multi-user state management, the data pipeline that captured everything participants did and said — all of it worked. It was the most technically ambitious thing I had ever made. And in the quiet after the congratulations faded, I could not locate the part of it that felt like mine.

## The trade

Before graduate school, I worked in computational cognitive neuroscience labs where the approach was model-driven. Controlled experiments, formal computational models, and carefully constrained tasks designed to isolate specific cognitive processes. There was a precision to it that I loved. Every design decision existed for a reason, and the data you collected could speak directly to the theory you cared about. I came to my PhD specifically to learn computational cognitive modeling, to build formal accounts of the processes I wanted to study. The web development was something I had wanted to learn for even longer, since seeing [a talk in 2017](https://eshinjolly.com/) that showed me what interactive experiments could look like. But modeling was what I sought out in a doctoral program.

I landed in a lab that operated very differently. Its philosophy was naturalistic, exploratory, and data-driven — the kind of approach that, to a naive eye, could look like contrarianism for its own sake. Rich unconstrained social interactions, captured in their full complexity, with patterns extracted afterward. The questions were exactly the ones I wanted to ask. How do people navigate uncertainty about other minds? How do we communicate to understand the world and the people around us together? But the approach felt foreign in a way I could not fully articulate at the time. I had traded tight experimental control for ecological validity.

It is a legitimate trade, and one I have genuinely come to appreciate: naturalistic interaction keeps the phenomenon intact, and what you find is more likely to hold in the messy world people actually live in. But it produces the kind of data you cannot easily throw a computational cognitive model at, and the modeling I wanted to learn required exactly the tight paradigms my new lab had deliberately moved away from. The mismatch was structural; no one was withholding anything from me. And somewhere in that trade I had also lost the thing that made me feel like a scientist rather than an engineer.

That loss did not happen all at once. For a long time, I told myself I was developing skills that would eventually serve the science I wanted to do. And I was. I was learning to build things most researchers cannot dream of. Real-time multiplayer platforms. Synchronous video streaming across clients. Chat systems with emoji panels, typing indicators, and millisecond-resolution logging of every message. Matchmaking lobbies that paired strangers in real time. These were genuine technical accomplishments, and I was proud of them in the way you can be proud of something well-made without being sure it is the right thing to have made.

Meanwhile, my peers were developing differently. They were analyzing data, presenting at conferences, learning to critique papers and construct theoretical arguments. They were becoming scientists in the specific sense that a PhD is supposed to produce. People who can identify a gap in understanding, design an experiment to address it, and interpret what the results mean for a theory. I was becoming someone who could build the experimental platform. The distinction felt sharper with each passing quarter. They had products: papers, conference talks, refined analytical skills. I had process: an increasingly sophisticated codebase and an increasingly uncertain sense of what it was all for.

The comparisons were corrosive, and I made them constantly. I was probably insufferable to my close friends during this period, constantly complaining, constantly critiquing the kind of work the department valued, dismissing the naturalistic approach as aimless. It took me a long time to recognize that I was misdirecting my frustration with my own experience outward, treating a methodological disagreement as a proxy for something much more personal. I stand by the critiques themselves, but the intensity with which I made them had less to do with methodology and more to do with how lost I felt. I could have been more thoughtful about how I expressed them to the people around me.

## Scope

As an early grad student, I was methods-driven, in the weeds, focused on _how_ to build things rather than _why_ we were building them. I did not know how to push back on scope or zoom out and ask whether what we were adding actually served the question. My advisor is someone who operates at both the top-down and bottom-up levels, having pioneered a perspective on studying social interactions and emotions in a naturalistic yet methodologically rigorous way. His instinct is high-risk, high-reward, always reaching for the most ambitious version of an idea. In the right context, this produces extraordinary science. But that ambition needs someone on the other end who can channel it, and I was not that person yet. The vision kept expanding; I kept building without steering. Neither of us was pumping the brakes. I think, in a way, he gave me credit I had not yet earned, treating me as though I were already the researcher who could match his ambition with structure. I was not. Not then.

The result was a project whose scope expanded faster than my understanding of why it existed. Every conversation introduced new possibilities, new features, new directions. The theoretical grounding dragged further and further behind, shrinking like an object in a rearview mirror.

I struggled for months with the _why_. There was always another feature to add, another direction to explore, another possibility that sounded exciting in conversation but left me less certain of the question we were asking. I spent weeks investigating YouTube's API to figure out how pause and play would work for video synchronization across clients. We ended up not using YouTube at all, opting instead for cloud-hosted files on Amazon S3. I spent another stretch getting shared playback controls working via sockets so that any participant could seek forward or backward during the experiment. Was that needed? No. It helped with the synchronization architecture, but nobody needed to scrub through a video mid-experiment. At one point, we even discussed adding video chat. The list of things we _could_ do kept growing. The answer to what we _were_ doing did not.

Eventually, with my advisor's support, I looked into hiring a freelance software engineer to help. I was taking so long that outsourcing parts of the build seemed reasonable. I found someone and discussed scope and rates. And then he asked me for a user story. I realized I did not have one. I could not describe, in the concrete terms a developer needs, what a participant would do and why, because I did not know. It was embarrassing. But it was also the moment something clicked. If I could not write a user story, it was because I did not have a causal manipulation. I did not know what the experiment was _testing_. That realization, forced on me by a freelance developer, is what finally pushed me toward constraining the study into something with a testable hypothesis. I later told this story to the very person whose [2017 talk](https://eshinjolly.com/) had inspired me to come here in the first place — we both had a good laugh about it.

The causal manipulation that eventually anchored the study emerged from that push, sharpened further by the approaching quals deadline. The design turned on a deceptively simple question, one whose seed is visible in [an early abstract](https://escholarship.org/uc/item/2bp9v575) from that period: when two people share an experience, is it the sharing itself that connects them, or what they do with it in conversation? I did not yet have the language to say I wanted something _testable_ — it felt like I had abandoned my past training in order to survive my current one. But I finally understood what had made me so aimless and unmotivated in the building: we needed to narrow the scope.

## The version of myself I longed to become

After quals, I seriously considered leaving the program. I explored whether a different intellectual home might give me what I was missing.

What was I so unhappy about? The simplest version is that I had come to graduate school to learn a specific skill — computational cognitive modeling, which requires tightly constrained paradigms and formal theory — and I was not learning it. The web development filled a genuine and longstanding desire, and the data science and machine learning were valuable, but none of it was the thing I had come for. And the longer I spent building naturalistic platforms without seeing how I could possibly model what happened on them, the more I felt I was becoming a different kind of researcher than the one I had set out to be. Not a worse one. A different one. I was always mourning a version of myself I longed to become.

There was also the identity problem. I could not tell whether I was a software engineer who did science or a scientist who happened to build software. For a long time, the answer felt like the former, and it ate at me. The skills I was developing were real and rare and genuinely useful for the field, but they were not the skills my discipline evaluates when it asks whether someone thinks like a good scientist. And I was not sure I was developing those skills at all.

## What kept me

What kept me, in the end, was my advisor. The day-to-day relationship was never the problem; our 1:1s were always good. The difficulty was never between us; it was about the work and what I needed from it. He listened. He gave me time and space to reflect, and permission to not be productive. He offered to arrange a visiting researcher position somewhere else if I needed to get out of the isolation of Hanover. He made it clear that he cared about me as a person and would do anything to support me, even if that meant letting me go.

The first crack of light came at the [MIND Summer School](https://mindsummerschool.org/2023/08/07/interacting-minds.html) in August 2023. When [a researcher I had long admired](https://profiles.stanford.edu/robert-hawkins) came to Dartmouth for the program, I told my advisor I wanted to work with this person, and he backed me completely. He wingmanned for me at lunch to make the introduction and funded our hackathon project so we could actually collect data during the program. And it was precisely those years of platform-building that made it possible: I had a dyadic chat platform ready to go. Within days, I had adapted it to run the study our team had brainstormed: a text-based chat experiment in which strangers discussed their beliefs. We collected data, analyzed it, and presented results on the final day of the two-week program.

![MIND Summer School 2023 hackathon presentation](/images/mind2023.jpeg)
_MIND Summer School hackathon presentation._

That collaboration — which also brought in a sort of [academic big brother](https://chris-welker.github.io) from the department — produced a CogSci paper that became one of the central chapters of my dissertation. The infrastructure I had spent years assembling turned out to be exactly what was needed, the moment I finally had the right question to ask and collaborators to think with. And as a cherry on top, the project gave me the chance to learn Bayesian cognitive modeling under the mentorship of the researcher I had so long admired. The very thing I had come to grad school to learn in the first place.

![My first conference talk at CogSci 2024](/images/cogsci2024.jpg)
_My first conference talk (CogSci 2024) during which I presented on the project which originated from the hackathon._

In the months that followed, my advisor gave me permission to take the lead on whatever came next, to involve whichever collaborators I wanted, to shape the project on my own terms. And when I was ready, we had a series of honest conversations about what specifically was not working. Not about the project, but about what I needed from my training and was not getting.

Out of those conversations came a new project, built around the board game [Wavelength](https://www.wavelength.zone/). The game gives players a shared communicative goal: convey where a hidden target falls on a spectrum between two opposing concepts, but with constraints on how they can communicate. It is interactive, it is social, it is genuinely fun to play. Crucially, it was also structured enough to model computationally. Every design decision can map onto a specific question about how people learn to coordinate, how shared understanding develops through the back-and-forth of real communication.

Building Wavelength felt different from anything I had built before, and the difference was not technical. It was that I could say, precisely and at every point in development, what theoretical question a given feature of the paradigm addressed. The constraints were not limitations on the richness of the interaction. They were the theory. The experiment was controlled not because I had stripped away the social context, but because the social context itself was structured enough to support formal modeling.

Fred Brooks, in [The Computer Scientist as Toolsmith II](https://dl.acm.org/doi/10.1145/227234.227243), drew the line between the two vocations I kept oscillating between: "the scientist builds in order to study; the engineer studies in order to build." Building Wavelength was the first time I could not tell which one I was doing. For the first time, the engineering and the science felt like the same activity.

My advisor recently told me that I made him a better mentor, because I actually gave him feedback that PIs rarely ever get. I think we made each other better.

<!-- SUGGESTED ADDITION — see revision notes §3. Wavelength is the emotional climax but never made the dissertation. Naming that is better than letting a reader notice it. -->

Wavelength did not make it into the dissertation. There was not time, and a thesis has to be a finite object. I have made a kind of peace with that, partly because it means the project I care most about is the one I get to keep working on with the people I most want to keep working with. But I want to be honest that the thing that resolved my crisis is not in the document that certified me. The dissertation is three chapters about how people infer what they have in common. Wavelength is the one where I finally understood what I was for.

## Controlled interaction

What I arrived at is something I think of as controlled interaction. Instead of replacing real social exchange with a simplified proxy, you keep the interaction genuine and embed your experimental manipulations inside it. People do real things with real people, but what they do is designed to test specific ideas about how social connection actually works.

This is, I think, what I was missing and could not name during those early grad school years. A way to make the engineering _itself_ an act of theorizing, to design interactive experiments in which every constraint is a claim about what matters and every degree of freedom is a bet about where the interesting variance lives.

And here is the irony: I have come to find traditional, non-naturalistic work boring. I see its limits now. The overfitting to constrained tasks, the jargon that abstracts away the very phenomena we claim to study, findings so overdressed in technicality that you cannot easily communicate them to the public — or sometimes even fellow scientists with an empirical approach. My advisor's insistence on ecological validity, the thing I once dismissed as aimless, turned out to be the part of my training that taught me to care about whether the science actually describes the world people live in. I just needed the modeling to meet it halfway.

When I was on the job market, I came across a postdoc ad looking for someone interested in computational models of social interaction and computational psychiatry, with experience designing and implementing multi-participant web-based experiments and expertise in computational cognitive modeling. It was the exact combination of skills I had spent my PhD assembling. The combination that, for most of graduate school, had felt less like a coherent identity and more like the residue of not knowing what I wanted to be. It turns out I had been building toward something the whole time. The building was always the vehicle.

<!-- NEW SECTION — the defense. See revision notes §1. Photos: Clara's Zoom screenshots are in Downloads/zoom-ss-public-defense-from-clara.zip; pick 2 and add to /static/images/. -->

## The defense

I defended publicly on July 10, 2026, in the same room where the MIND Summer School had been held three years earlier. My advisor noticed it from the podium — he said he knew how many people we could fit in there because we had run a summer school in that room and it looked exactly like this. I do not think he staged it. But it was the right room.

He opened by saying he was nervous, which I had not expected, and then he did something I had not expected either. He told the hard part first. He put up a slide about the three years I spent learning to build things, and said out loud, to a room of my colleagues and my parents, that he had fed this — that he had told me I could build an experiment and collect data the same day and we would pump out a hundred papers — and that this was him being delusional, because the reality is it takes years to learn what a database even is. He said that after three years all my friends were publishing and I was still debugging code with no project even started really yet. He said it was a hard time, and that I was trying to figure out if I wanted to stay or not, and whether I even wanted to stay working in his lab.

I had spent years afraid that this was the story people would tell about me if they knew. He told it himself, first, in public, as a setup rather than an indictment. Then he showed the summer school slide and explained why those three years were the reason that hackathon team could design, run, and present a study inside ten days — the first group to manage it in the years they had been running the program.

<!-- PHOTO SLOT: Luke's intro or the room. Suggest one of Clara's wider shots. -->

Then he gave me a parting gift I had asked for and forgotten asking for. Eighteen months earlier, somewhere in the six thousand Slack messages between us, I had sent him an idea: at my public defense, could people send comments and reactions in real time, on their phones, and could I plot the data during my thank-you slide? I meant it as a fantasy. He built it. At the end of his introduction he told the room to open `xoxowasita.com`, log in with their names, and react and gossip while I talked.

So my defense audience became participants in a live co-watching-plus-chat experiment. Which is, to be precise, the paradigm my entire dissertation is about.

<!-- DATA SLOT: this is where the xoxwasita analysis goes. See revision notes §5 for what to look for. -->

I opened by saying that for a long time I did not know how to make friends. That the connections that changed my life came from two unlikely places — Tumblr, where people knew me only from what I wrote, and a STEM pre-orientation cohort of thirteen people thrown into a nonlinear dynamics class most of us were not prepared for. Those friendships, I said, are why I was able to stand there at all.

And then I said the thing I had been circling for six years:

> So to study connection, you want two things at once. You want control, so you can say that this is what caused the closeness, not just what came along with it. That's what the questionnaires and scripted tasks buy you. But nobody actually connects with the survey. And you want naturalism, real people actually talking to each other, so that whatever you find in the lab can generalize to people's real lives. And historically, it's always felt like you're forced to pick a side. And after many an existential crisis in grad school, I decided to not pick a side. In fact, I now choose both. And all of my work lives right here in the middle.

Six years of not knowing what I was, compressed into one clause — _after many an existential crisis in grad school_ — and then converted into a methodological premise. I did not plan it as a confession. But standing up there, it was obvious that the crisis and the method were the same object. I did not arrive at controlled interaction despite being miserable about the tradeoff. I arrived at it because I refused to accept the tradeoff, and being miserable was what refusing felt like from the inside.

I closed by running my own framework on my own life. Two panels. On one side, my internet friends, with whom I shared almost nothing — different cities, different schools, no context at all. All they had were my words, and somehow that was enough. One of them inferred, from a handful of things I loved, that I would love a college I had not considered, and they were right, and that is why I applied to Brown at all. On the other side, my cohort, with whom I shared everything — the same classes, the same panic, the same rooms — and what made us close was not sitting in those rooms together but talking through them as they happened.

Nothing in common on one side. Everything in common on the other. Same result: people knew me without ever looking inside my mind. Or, as I put it right before that slide: having something in common is exactly as connecting as it is revealing.

> And we never really get to read inside each other's minds, as I've been saying. But through conversation, we just leave each other enough to go on. And every so often, someone pays attention and something special really happens.

Then I went twenty-two minutes over on the acknowledgments and got told I was severely over time.

I do not regret it. I said to my advisor, in front of everyone, the thing I had needed to say for years: that it is easy for any PI to love a student who is happy and productive, that I was definitely not that student for the first couple of years, and that he chose to support me anyway. I said "and I'm going to cry" in the middle of it, and then I did. I told him he had never once told me I could not do something — that it always felt like the sky was the limit. I told Robert that he arrived exactly when I needed him. I told Eshin that if I could tell undergrad Wasita she would get to work with her science idol, she would pass out.

And then I got to my parents' slide and completely lost the thread, because they were laughing at me. My mom was objecting to the photo I had picked. I had to restart the sentence three times before I could say that they measured my life in happiness rather than achievement, and thank them for the sacrifice of arriving in a new country with not much. Then: both of my Ivy League degrees are yours too.

<!-- PHOTO SLOT: acknowledgments or the parents' slide moment. -->

Here is the part I did not anticipate, and the reason this section exists at all.

For six years the question underneath everything was whether I was a scientist or just someone who could build the thing a scientist needs. I resolved it internally, with Wavelength, in the way you resolve things internally — provisionally, and privately, and subject to revision at 2am. What I got at the defense was external evidence, and it arrived in a form I could not argue with.

People did not say the talk was moving _instead_ of rigorous. Six different people said both, in the same message, unprompted. "So funny and interesting and so fkn rigorous." "Lucid and thoughtful." "Blew me away." My old postdoc mentor, who had known me since before I applied to grad school, wrote to tell me how much I had grown _as a scientist_ — and reminded me that when I was applying, I had been devastated that I could not find my voice. Well, she said, I guess you've found it.

And then something happened that I am still turning over. The reception of the talk did the thing the talk was about. I had disclosed the riskiest, most specific, least shareable things I had — Tumblr, not having friends in high school, the arcade at a casino in Connecticut while my parents did their thing, being the kid whose version of vacation nobody in academia could place. Those were the parts people responded to hardest. My advisor's wife told me afterward that she cried, and then said, "Nobody makes me cry." She also said it was the first talk of these she had ever been able to _relate_ to.

Relate. That is Chapter 3's word. Chapter 3 says that the rarer and more specific a disclosure is, the more connecting it is when someone shares it, because rare things tell you who a person actually is. I spent three years and 1,169 participants establishing that, and then I stood in a room and ran the experiment on myself without meaning to, and it replicated.

I have thought a lot about whether that is a real observation or just a pretty coincidence. I think it is real. I think it is what the whole dissertation is for. The finding is not that self-disclosure is nice. It is that when you say the specific true thing you are certain nobody can relate to, you find out who can — and those are the people who end up knowing you.

Which, it turns out, I had already said on stage, about Tumblr, forty minutes before the room proved it:

> So I was sharing things that I thought nobody could relate to, and kind of found my people, and that's exactly why the people who did relate felt so special.

That was the argument. That was also, apparently, the day.

<!-- NEW SECTION — looking forward. See revision notes §2. -->

## What's next

I start a postdoc on September 1, in New York, working with [Mark Ho](https://markkho.github.io/) at NYU and [Shawn Rhoads](https://shawnrhoads.github.io/) at Mount Sinai. My advisor described them in his introduction as the next generation doing computational social work — which I liked, because it means the thing I struggled to be during my PhD is now just the job description.

The plan is roughly the one I could not have written a user story for six years ago. Computational models of social interaction, computational psychiatry, multi-participant web-based experiments. I want to push on interactive theory of mind, an area I got excited about after meeting [Tessa Roesch](https://tessaroesch.github.io/) at a summer school. I want to keep going with Wavelength alongside Robert, Jonathan, and my advisor, because that project is not finished and I do not want it to be.

The thing I am most looking forward to is smaller than any of that. At a summer school in Tokyo last year I met, for the first time, a group of people who were all interested in modeling social interactions. I said in my acknowledgments that I felt close to finding my scientific community. That is a strange sentence to write at the end of a doctorate — most people find theirs somewhere in the middle — but it is the honest one, and it rhymes with everything else here. I spent my adolescence finding my people on the internet because nobody nearby shared the specific things I cared about. I spent my PhD building the infrastructure for a question before I knew which question it was. And I seem to be doing it again, in the best way: showing up somewhere with an odd combination of skills and finding out that there are other people who have been assembling the same one.

The building was always the vehicle. And the researcher my advisor once gave credit to before I had earned it — I like to think I have finally grown into her.
