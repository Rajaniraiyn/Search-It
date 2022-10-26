<script lang="ts">
  import { fade, slide, scale } from "svelte/transition";

  import { Howl } from "howler";

  import icon from "../assets/images/icon.png?preset=optimize&srcset";
  import search_icon from "../assets/icons/search.svg";
  import click_sound from "../assets/audios/typewritter_click.wav";

  const WETHER_API_KEY = "fd7bb6f4dd745409a7a1ebdbb786e36d";

  let coords = null;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        coords = position.coords;
      },
      () => {
        console.log("Need access to get location.");
      },
      { enableHighAccuracy: true }
    );
  }

  async function getJoke(): Promise<string> {
    const { content } = await (
      await fetch("https://api.quotable.io/random?maxLength=50")
    ).json();
    return content;
  }

  let bgImgURL: string;

  let time: string = new Date().toLocaleTimeString();

  setInterval(() => {
    time = new Date().toLocaleTimeString();
  }, 1e3);

  const typewriter_key = new Howl({
    src: [click_sound],
    preload: true,
    volume: 0.5,
  });

  async function updateImage() {
    const blobURL = URL.createObjectURL(
      await (
        await fetch(
          `https://source.unsplash.com/random/${window.outerWidth}x${window.outerHeight}?nature`
        )
      ).blob()
    );
    bgImgURL = `url(${blobURL})`;

    // setTimeout(async () => {
    //   await updateImage();
    // }, 15e3);
  }

  updateImage();

  let searchBar: HTMLInputElement;

  function keyShortut(e: KeyboardEvent) {
    if (e.key === "/") {
      e.preventDefault();
      searchBar.focus();
    }
    if (/[\d\w\s]/.test(e.key)) typewriter_key.play();
  }
</script>

<svelte:body on:keydown={keyShortut} />

<main>
  <nav>
    <div class="title">
      <img srcset={icon} alt="Search It Logo" in:scale />
      <h2>Search It</h2>
    </div>
    <div class="joke">
      {#await getJoke()}
        Loading...
      {:then joke}
        <p>{@html joke.replace(".", ".</br>")}</p>
      {/await}
    </div>
    <time>{time}</time>
  </nav>
  <div id="widgets">
    {#if navigator.geolocation && !!coords}
      <div class="container weather" transition:fade>
        {#await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${WETHER_API_KEY}`)}
          Loading...
        {:then response}
          {#await response.json() then { weather, main: { temp, feels_like }, name }}
            <div style:text-align="right">
              <span>{weather[0].description}</span>
              <h3>{name}</h3>
            </div>
            <div style:text-align="left">
              <span>Temperature {temp}℃</span>
              <span>Feels like {feels_like}℃</span>
            </div>
            <img
              src="https://openweathermap.org/img/w/{weather[0].icon}.png"
              alt="weather icon"
            />
          {:catch error}
            <h3 class="error">Error</h3>
            <span>{error}</span>
          {/await}
        {:catch error}
          <h3 class="error">Error</h3>
          <span>{error}</span>
        {/await}
      </div>
    {/if}
  </div>
  <form action="https://www.google.com/search" method="get" in:slide>
    <!-- svelte-ignore a11y-autofocus -->
    <input
      type="search"
      placeholder="Search (press / to focus)"
      name="q"
      autofocus
      bind:this={searchBar}
    />
    <button type="submit">
      <img src={search_icon} alt="Search Icon" />
    </button>
  </form>
</main>

<div id="bg" style:--bg-img-url={bgImgURL} />

<style>
  :root {
    --background-color: rgba(12.5%, 12.5%, 12.5%, 25.5%);
    --backdrop-filter: blur(0.5em);
    --border: 0.01em solid rgba(100%, 100%, 100%, 50%);
    --drop-shadow: drop-shadow(0 0 0.25em rgb(0 0 0));
  }

  main {
    text-align: center;
    color: white;
    width: 100vw;
    height: 100vh;

    display: grid;
    place-items: center;
  }

  nav {
    position: fixed;
    inset: 1em 2em auto 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1em 3em;
    background-color: var(--background-color);
    backdrop-filter: var(--backdrop-filter);
    -webkit-backdrop-filter: var(--backdrop-filter);
    border: var(--border);
    filter: var(--drop-shadow);
    border-radius: 1em;
  }

  time {
    font-size: 1.25em;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1em;

    font-size: 1.25em;
  }

  .title img {
    width: 2em;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1em;
    padding: 2em 2em;
    background-color: var(--background-color);
    backdrop-filter: var(--backdrop-filter);
    -webkit-backdrop-filter: var(--backdrop-filter);
    border: var(--border);
    filter: var(--drop-shadow);
    border-radius: 1em;
    transition: transform 0.4s ease;
  }

  form:has(:focus) {
    transform: scale(1.1);
  }

  input {
    color: white;
    width: 100%;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.5em;
    background-color: var(--background-color);
    backdrop-filter: var(--backdrop-filter);
    -webkit-backdrop-filter: var(--backdrop-filter);
    border: var(--border);
    filter: var(--drop-shadow);
  }

  button {
    width: 2.5em;
    aspect-ratio: 1;
    border-radius: 50vmax;
    background-color: var(--background-color);
    backdrop-filter: var(--backdrop-filter);
    -webkit-backdrop-filter: var(--backdrop-filter);
    border: var(--border);
    filter: var(--drop-shadow);
    border: none;
    cursor: pointer;
  }

  #widgets {
    position: fixed;
    inset: 5em 2.5em 1em 2.5em;
    margin: 1em 2.5em;
  }

  #widgets .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;
    background-color: var(--background-color);
    backdrop-filter: var(--backdrop-filter);
    -webkit-backdrop-filter: var(--backdrop-filter);
    border: var(--border);
    border-radius: 1em;

    font-size: 0.95em;
  }

  #widgets .weather {
    right: 0;
    bottom: 0;
    align-items: stretch;

    aspect-ratio: 1;
    transition: transform 0.4s ease;
  }

  .weather div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0.5em;
  }

  .weather img {
    image-rendering: pixelated;
    position: absolute;
    top: 0;
    left: 0;
    width: 7em;
    transform: translate(-3.5em, -3.5em);
    background-color: rgba(50, 50, 50, 0.25);
    backdrop-filter: var(--backdrop-filter);
    -webkit-backdrop-filter: var(--backdrop-filter);
    border: var(--border);
    filter: var(--drop-shadow);
    border-radius: 50vmax;
    transition: transform 0.4s ease;
  }

  .weather:hover {
    transform: scale(1.1);
  }

  .weather:hover img {
    transform: translate(-3em, -3em) scale(0.75) rotate(-10deg);
  }

  #bg {
    position: fixed;
    inset: 0;
    z-index: -10;
  }

  #bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #99fcff;
    background: var(--bg-img-url),
      radial-gradient(at 11% 38%, hsla(124, 61%, 65%, 1) 0px, transparent 50%),
      radial-gradient(at 4% 61%, hsla(293, 99%, 61%, 1) 0px, transparent 50%),
      radial-gradient(at 53% 10%, hsla(320, 83%, 62%, 1) 0px, transparent 50%),
      radial-gradient(at 60% 8%, hsla(284, 61%, 63%, 1) 0px, transparent 50%),
      radial-gradient(at 3% 17%, hsla(20, 65%, 64%, 1) 0px, transparent 50%),
      radial-gradient(at 37% 9%, hsla(208, 87%, 68%, 1) 0px, transparent 50%),
      radial-gradient(at 92% 97%, hsla(213, 95%, 63%, 1) 0px, transparent 50%),
      center/cover no-repeat;
    filter: brightness(0.75);
    transition: background-image 0.4s ease;
  }

  @media screen and (max-width: 768px) {
    nav {
      justify-content: center;
      inset: 1em 1em auto 1em;
    }

    .joke,
    time {
      display: none;
    }

    form {
      max-width: calc(100vw - 2em);
    }

    #widgets {
      inset: 1em 1em 1em 1em;
      font-size: 0.75em;
    }

    #widgets .weather {
      inset: auto auto 0 calc(50vw);
    }
  }

  @media screen and (max-height: 768px) {
    #widgets {
      inset: 1em 1em 1em 1em;
      font-size: 0.75em;
    }
  }
</style>
