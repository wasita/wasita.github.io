# HANDOFF — wasita.github.io

_Snapshot taken 2026-08-12, before returning the lab laptop. Everything below describes state as of that date._

## What this is

Wasita's personal website and blog, served at https://wasita.space (the `CNAME`
file pins the custom domain; the repo is also the `wasita.github.io` user-pages
repo). It is a SvelteKit 2 / Svelte 5 static site: `adapter-static`, mdsvex for
markdown posts, Tailwind CSS 4, Vite 7, Playwright for tests. Blog posts live as
plain markdown in `src/lib/blog/` with frontmatter (`title`, `date`, `cover`,
`excerpt`, `visible`); a post with `visible: false` is built but not listed.

This is the most actively worked repo of the set. The last twenty commits are
almost all copy and design work through July and August 2026, tracking her
PhD-to-postdoc transition.

## Where it stands

- Branch: `main` at `7cf9fe8d` ("shift dark ink-faint to lavender-gray to match
  ink-soft", 2026-08-10). `main` tracks `origin/main` and is level with it —
  nothing committed is unpushed.
- Other branches: `origin/gh-pages` (`cb12eb4c`) is the built site, written by
  CI, never edited by hand. `origin/042026-cyberpunk-ui` (`74e2f9df`,
  "proofread about and research pages") is an old design branch with no local
  checkout; it is behind main's design direction and looks abandoned, though
  that is an inference from the name and date rather than anything stated.
- Deploy: `.github/workflows/deploy-to-pages.yml` runs on push to `main`, does
  `npm install` then `npm run gh-pages`, which builds, writes `wasita.space`
  into `build/CNAME`, touches `.nojekyll`, and pushes `build/` to `gh-pages`.
  Pushing to main is the whole publish step.

## Uncommitted work on the old laptop

This is the valuable part of this repo. There is a substantially rewritten,
unpublished blog post here that exists nowhere else.

**`src/lib/blog/my-phd-user-story.md` — modified, 93 insertions / 19 deletions.
CARRY OVER. This is the single most important uncommitted artifact on the
machine.**

The committed version of this post ends at the job-market paragraph and stops
before her July 10 2026 defense. The working copy:

- Changes the frontmatter date from `June 2026` to `August 2026`. `visible:
  false` is still set, so the post is not listed on the site yet.
- Tightens several existing paragraphs (the naturalistic-approach paragraph is
  compressed; the "Becoming an engineer" heading is dissolved into the previous
  section; a link to an early eScholarship abstract is added).
- Restructures "What kept me" so the Wavelength material moves after the MIND
  Summer School beat, and adds a Fred Brooks quote ("the scientist builds in
  order to study; the engineer studies in order to build") as the hinge.
- Adds a new paragraph admitting Wavelength never made it into the
  dissertation.
- Adds a new ~1,400-word section, "The defense", covering her advisor opening
  by telling the hard part first, the room being the same one as MIND 2023, the
  `xoxowasita.com` live chat app he built as a parting gift, the "after many an
  existential crisis in grad school, I decided to not pick a side" quote, the
  two-panel closing, the acknowledgments running twenty-two minutes over, and
  the argument that the reception of the talk replicated her Chapter 3 finding.
- Adds a new ~350-word "What's next" section: postdoc starting September 1 with
  Mark Ho (NYU) and Shawn Rhoads (Mount Sinai), interactive theory of mind,
  continuing Wavelength.

The draft contains five HTML comments that are deliberate placeholders, not
leftovers. Search the file for `SUGGESTED ADDITION`, `PHOTO SLOT` (three of
them) and `DATA SLOT`. They must be resolved or removed before publishing.

**`blogpost-revision-notes.md` — untracked, 12.6 KB. CARRY OVER.** This is the
editorial memo explaining every change above and what is still owed. It is the
key to the draft; without it the HTML-comment slots are unreadable. It contains,
in sections 1 through 8: the rationale for each new section, an explicit note
that one interpretation ("the crisis and the method are the same object") was
put in her mouth and needs her sign-off, a warning that Mark Ho's, Shawn
Rhoads's and Tessa Roesch's URLs were guessed and must be verified, a
verification log against the cleaner Zoom VTT transcript that corrected a
factual error (she cried on her advisor's slide, not her parents'), a note that
proper nouns in the ASR transcript are unreliable, a suggested LinkedIn post
with a recommended publish date of Aug 31 / Sept 1, and three loose ends.

**`my-phd-user-story.BACKUP-20260804.txt` — untracked, 90 lines. DISPOSABLE.**
An Aug 4 snapshot taken partway through the revision: it has the line-level
rewrites but not the two new sections. Every paragraph in it appears verbatim in
the current working copy, so nothing is lost by dropping it. Keep only if she
wants belt-and-braces until the post is committed.

**`_to_delete/my-phd-user-story.REVISED.md` — untracked, 158 lines.
DISPOSABLE.** The pre-verification version of the revised post. The working copy
(164 lines) is the same text after the transcript check: it fixes the
crying/parents error, restores the fuller and more accurate quotes, softens
"in the history of the program" to "the first group in the years they had been
running it", and adds three lines the clean transcript surfaced. The directory
name records her own judgment. Nothing in it is worth recovering; §8 of the
revision notes documents what changed.

**`.claude/` — untracked. DISPOSABLE / machine-specific.** Only
`settings.local.json`, a permission allowlist accumulated by past Claude Code
sessions. The paths in it are hard-coded to `/Users/wasita/...` on this laptop
and to `/private/tmp/claude-505/...` scratch dirs, so it will not transfer
usefully. It does record that the `frontend-design` plugin was enabled, if she
wants to re-enable it.

Nothing here is staged. `build/`, `.svelte-kit/` and `node_modules/` are
gitignored build detritus and can be ignored entirely. Note that `CLAUDE.md` is
listed in `.gitignore` and no `CLAUDE.md` currently exists.

## Open threads

1. Finish and publish "My PhD User Story". Concretely, in the order the
   revision notes suggest: fill the DATA SLOT with two or three sentences and
   one small figure from `xoxowasita-analysis`; drop two or three of Clara's
   Zoom screenshots into `static/images/` and wire up the three PHOTO SLOTs;
   verify the three postdoc links; decide whether to keep the
   Wavelength-not-in-the-dissertation paragraph; then flip `visible: false` to
   `true` and commit.
2. Write the accompanying LinkedIn post. Draft copy and a rationale are in §6 of
   the revision notes; the recommended timing is Aug 31 or Sept 1, hooked on
   "defended, and starting my postdoc Monday".
3. Housekeeping, low priority: decide whether `origin/042026-cyberpunk-ui` is
   dead and can be deleted on the remote.

## Picking this up again

```bash
git clone https://github.com/wasita/wasita.github.io.git
cd wasita.github.io
npm install
npm run dev       # local dev server
npm run build     # static build into build/
npm run test      # Playwright
npm run format    # prettier
```

Node 22 is what CI uses. There is no `.env` and no secret needed for local dev.

First things to check on the new machine:

- Whether `src/lib/blog/my-phd-user-story.md` came across in its modified form.
  If it looks like it ends at the postdoc-ad paragraph with no "The defense"
  section, the uncommitted version was lost and only the older, weaker draft
  survived. That version is `git show HEAD:src/lib/blog/my-phd-user-story.md`,
  and the loss is real.
- Whether `blogpost-revision-notes.md` came across with it. The two only make
  sense together.
- Whether the assets the draft depends on (below) were copied off the laptop.

## Landmines

- **The draft is not in git.** Everything described under "Uncommitted work"
  lives only in this working tree. If the laptop is wiped, it is gone. Copy the
  whole repo directory, not just a `git clone`, or commit the post (even with
  `visible: false`) before handing the machine back.
- **The draft depends on files that are not in this repo and not on GitHub.**
  The revision notes point at, in her home directory on this laptop:
  `Downloads/zoom-ss-public-defense-from-clara.zip` (13 Zoom screenshots
  timestamped 2:57 to 4:12 PM, needed for the three PHOTO SLOTs); the defense
  recording transcript `Wasita Mahaphanit Meeting Transcript Jul 10 2026.vtt`
  (also copied into `xoxowasita-analysis/data/local/`, also not committed
  there); `defense_kindness_messages.md`, which holds the messages people sent
  after the defense and contains a truncated quote from Nicole Provenza that
  needs recovering from the original screenshot; and
  `post_public_defense_todo.md`. Copy all of these off before returning the
  laptop. They are unrecoverable otherwise.
- The DATA SLOT depends on `xoxowasita-analysis` (see that repo's HANDOFF).
- `post_public_defense_todo.md` has one open item unrelated to the blog: a
  Chapter 3 figure swap (8-bar profile decomposition to 4-bar depth ladder) in
  the `dissertation` repo, with a dependency flagged at `ch-3.typ:144-146`,
  where the prose relies on the single-marker profiles the ladder drops.
- The post names living people and quotes them, including her advisor
  describing his own pitch to her as delusional, and describes her own
  depressive episode. `visible: false` is currently the only thing keeping it
  unpublished. Do not flip that flag casually.
- No secrets in the repo. Deploy uses the built-in `GITHUB_TOKEN` in Actions;
  nothing needs to be provisioned locally.
