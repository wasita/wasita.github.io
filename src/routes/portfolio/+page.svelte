<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<h1 class="pt-4 pb-8 font-bold text-2xl lg:text-3xl cyber-heading">
  <span class="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">I like building stuff</span>
</h1>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- magic-garden -->
  <div class="items-center block lg:flex">
    <img
      src="/images/magic-garden.webp"
      alt="magic-garden icon"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">Magic Garden Game Bot</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Project Author (2025-Present)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:python" /></span>
            <span>python</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:ocr" /></span>
            <span>ocr</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="devicon-plain:opencv-wordmark" /></span>
            <span>opencv</span>
          </span>
        </div>
        <p>
          A bot that automates the process of buying crops and eggs in the Magic
          Garden game.
        </p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://github.com/wasita/magic-garden"
            target="_blank"
            rel="noreferrer">GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- Send2Kobo -->
  <div class="items-center block lg:flex">
    <img
      src="/images/ereader.png"
      alt="eReader icon"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">Send2Kobo</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Project Author (2025-Present)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:svelte" /></span>
            <span>svelte</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:tailwind" /></span>
            <span>tailwind</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:firebase" /></span>
            <span>firebase</span>
          </span>
        </div>
        <p>
          This website is a simple tool that allows you to send books to your
          Kobo eReader without having to directly connect to it. Upload PDF and
          EPUB files and the website, navigate to the site on your eReader, and
          your books will be available for download.
        </p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://send-2-kobo.web.app/"
            target="_blank"
            rel="noreferrer">Website</a
          >
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://github.com/wasita/send2kobo"
            target="_blank"
            rel="noreferrer">GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- Dyadic chat app -->
  <div class="items-center block lg:flex">
    <img
      src="/images/shared-reality-icon.png"
      alt="dyad chat app icon"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">Real-time dyadic chat app template</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Project Author (2023-Present)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:svelte" /></span>
            <span>svelte</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:tailwind" /></span>
            <span>tailwind</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:firebase" /></span>
            <span>firebase</span>
          </span>
        </div>
        <p>
          To be released soon, this project is a platform for creating dyadic
          chat apps using a server-less framework (i.e., no need for web
          sockets/socket.io for user-to-user communication).
        </p>
        <p class="mt-2">
          Featured in <a href="https://osf.io/preprints/psyarxiv/g9p3e"
            >this preprint</a
          > and presented in a talk given at the 2023 MIND summer school in Hanover,
          NH.
        </p>
        <div class="mt-4">
          <button
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            disabled
            aria-label="To be announced">TBA</button
          >
          <button
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            disabled
            aria-label="GitHub repository is private">GitHub (private)</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- Svelte Radio Podcast -->
  <div class="items-center block lg:flex">
    <img
      src="https://img.transistor.fm/XvUzSZo5_h8Ls9Cwd7_q97Vy3AE5dqTn3lUnWYA4qCU/rs:fit:600:288:1/q:60/aHR0cHM6Ly9pbWct/dXBsb2FkLXByb2R1/Y3Rpb24udHJhbnNp/c3Rvci5mbS9sb2dv/cy9zaXRlLzQ5MTIv/bG9nby10cmFuc2lz/dG9yLnBuZw.webp"
      alt="svelte radio icon"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">Svelte Radio Podcast</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Episode Guest (2023)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:svelte" /></span>
            <span>svelte</span>
          </span>
        </div>
        <p>
          Had the opportunity to go on <a href="https://www.svelteradio.com/"
            >Svelte Radio</a
          >
          with my dear friend/mentor/collaborator
          <a href="https://eshinjolly.com/">@ejolly</a>
          to talk about our experience with using Svelte to build interactive web
          apps for our research!
        </p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://open.spotify.com/episode/3JzRDzPOylvhBSIj7jZLDz?si=3YDIJX3PQPisAHVLlMPK3Q"
            target="_blank"
            rel="noreferrer"
            >Listen to the episode
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- Interactive 2-player trust game -->
  <div class="items-center block lg:flex">
    <img
      src="/images/shared-reality-icon.png"
      alt="dyad chat app icon"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">Interactive 2-player trust game</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Project Author (2023-Present)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:svelte" /></span>
            <span>svelte</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:tailwind" /></span>
            <span>tailwind</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:firebase" /></span>
            <span>firebase</span>
          </span>
        </div>
        <p>
          Implementation of an interactive 2-player trust game à la
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0010028510000150"
            >Chang et al. (2010)</a
          >.
        </p>
        <p class="mt-2">
          Featured in the PBS NOVA episode "who's in control?".
        </p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://youtu.be/yQ6VOOd73MA?si=QDu3Q8fdWO6NlCal&t=1464"
            target="_blank"
            rel="noreferrer"
            >Watch the episode
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- WiNS members database -->
  <div class="items-center block lg:flex">
    <img
      src="https://pbs.twimg.com/profile_images/1405631877726105607/lkWahexX_400x400.jpg"
      alt="wins"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">
          Women in Network Science (WiNS) Society members database
        </h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Project Author (2022-Present)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="ri:javascript-line" /></span>
            <span>javascript</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="carbon:html" /></span>
            <span>html</span>
          </span>
        </div>
        <p>
          Created a way for users to search and filter through the WiNS members
          database.
        </p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://sites.google.com/view/womeninnetworkscience/society/membership/membership-list?authuser=0"
            target="_blank"
            rel="noreferrer">Visit the WiNS members database</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- Multi-user synchronous video streaming & chat app platform -->
  <div class="items-center block lg:flex">
    <img src="/images/svsca.png" alt="chat app icon" loading="lazy" decoding="async" class="w-full lg:w-1/4" />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">
          Multi-user synchronous video streaming & chat app platform
        </h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Project Author (2021-Present)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:svelte" /></span>
            <span>svelte</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:tailwind" /></span>
            <span>tailwind</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:firebase" /></span>
            <span>firebase</span>
          </span>
        </div>
        <p>
          To be released soon, this project is a platform for creating
          multi-user chat apps with synchronous video streaming. Implemented in
          both a server-less and server-based framework.
        </p>
        <p class="mt-2">
          Presented in a poster at the 2023 SANS annual meeting in Santa
          Barbara, CA.
        </p>
        <div class="mt-4">
          <button
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            disabled
            aria-label="To be announced">TBA</button
          >
          <button
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            disabled
            aria-label="GitHub repository is private">GitHub (private)</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- DartBrains: Intro to fMRI -->
  <div class="items-center block lg:flex">
    <img
      src="https://github.com/ljchang/dartbrains/raw/master/images/logo/dartbrains_logo_square_transparent.png"
      alt="dartbrains logo"
      loading="lazy"
      decoding="async"
      class="mx-10 my-10 scale-150 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">DartBrains: Intro to fMRI</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Contributor (2021-Present)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:jupyter" /></span>
            <span>jupyter book</span>
          </span>
        </div>
        <p>An introduction to fMRI preprocessing & analysis.</p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://dartbrains.org/content/intro.html"
            target="_blank"
            rel="noreferrer">Visit DartBrains</a
          >
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://github.com/ljchang/dartbrains"
            target="_blank"
            rel="noreferrer">GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- Info theory for Social Neuroscientists -->
  <div class="items-center block lg:flex">
    <img
      src="https://cosanlab.github.io/info-theory-book/_static/soc_net.png"
      alt="info theory book for social neuroscientists"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">Info theory for Social Neuroscientists</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Contributor (2022)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="simple-icons:jupyter" /></span>
            <span>jupyter book</span>
          </span>
        </div>
        <p>
          Introductory tutorials and materials on information theory with
          applications to social neuroscience.
        </p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://cosanlab.github.io/info-theory-book/intro.html"
            target="_blank"
            rel="noreferrer">Visit site</a
          >
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://github.com/cosanlab/info-theory-book"
            target="_blank"
            rel="noreferrer">GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
<div class="cyber-line"></div>
<div class="cyber-project-card p-6 lg:p-12 my-2">
  <!-- Honeycomb -->
  <div class="items-center block lg:flex">
    <img
      src="https://raw.githubusercontent.com/brown-ccv/honeycomb/cb829a5134086307de7ea53efc452c0d4425c06f/assets/bee.svg"
      alt="honeycomb"
      loading="lazy"
      decoding="async"
      class="w-full lg:w-1/4 dark:invert"
    />
    <div class="flex-1">
      <div class="block lg:pl-12">
        <h2 class="font-bold text-xl lg:text-2xl">Honeycomb</h2>
        <h3 class="text-base lg:text-lg text-gray-600 dark:text-gray-400">Software Developer (2019-2021)</h3>
        <div class="py-2">
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:react" /></span>
            <span>react</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="logos:electron" /></span>
            <span>electron</span>
          </span>
          <span
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-pink-400 dark:border-cyan-400/50 text-pink-500 dark:text-cyan-300 text-sm mr-1 mb-1 transition-colors"
          >
            <span><Icon icon="mdi:firebase" /></span>
            <span>firebase</span>
          </span>
        </div>
        <p>
          Built with flexible deployment in mind, Honeycomb is a web-based
          application template that makes deploying tasks to the web, mobile,
          and desktop easy. Crucially, we make it possible to run in-lab/clinic
          and at-home/online experiments with the same codebase. No more
          rewriting your experiments for different platforms! We also make
          sending event triggers through JavaScript possible, permitting
          researchers to collect EEG data in the lab and at home.
        </p>
        <div class="mt-4">
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://pubmed.ncbi.nlm.nih.gov/34320125/"
            target="_blank"
            rel="noreferrer"
            >Paper
          </a>
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://brown-ccv.github.io/honeycomb-docs/"
            target="_blank"
            rel="noreferrer"
            >Documentation
          </a>
          <a
            class="inline-block px-4 py-2 rounded-lg border border-pink-500 dark:border-purple-500/50 text-pink-500 dark:text-purple-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200 mr-2 mb-2 dark:hover:shadow-lg dark:hover:shadow-purple-500/20"
            href="https://github.com/brown-ccv/honeycomb"
            target="_blank"
            rel="noreferrer"
            >GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
