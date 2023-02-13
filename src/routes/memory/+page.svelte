<script>
  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";

  let cards = [];
  let pairs = 4; // Varibel för hur många par det finns.
  for (let index = 0; index < pairs; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: "https://picsum.photos/id/" + index.toString() + "/200/300", // TODO: unique images per card card
      flipped: false, // TODO: think
      completed: false,
    });
    cards.push({
      id: index + pairs, // Nu skapas ett identiskt kort med ett ID som är pairs större.
      img: "https://picsum.photos/id/" + index.toString() + "/200/300", // TODO: unique images per card card
      flipped: false, // TODO: think
      completed: false,
    });
    // Nu har det skapats 4 par med olika bilder
  }

  

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
 
  shuffle(cards);
  

  let flipcount = 0;
  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      flipcount += 1;
      card.flipped = true;
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        // TODO: check if the flipped card is equal to the previously flipped card.
        // if equal, set as completed

        let completed = false;

        // When two cards have flipped, find pair card
        cards.forEach((temp) => {
          // if the card is the pair card
          if (temp.id + pairs == card.id || temp.id - pairs == card.id) {
            // check if the pair is already flipped, if so completed true
            if (temp.flipped) {
              
              temp.completed = true;
              card.completed = true;
              completed = true;
            }
          }
        });
        toast.promise(
          new Promise((resolve, reject) =>
            setTimeout(() => {
              // flip over cards that have not been marked as "completed"
              cards.forEach((card) => {
                card.flipped = card.completed;
              });
              flipcount = 0;
              cards = cards;
              if (!completed) {
                reject();
              } else {
                resolve();
              }
            }, 2000)
          ),
          { loading: "waiting...", success: "good job!", error: "try gain!" }
        );
      }
      cards = cards;
    } else {
      toast.error("chill");
    }
  }
</script>

<main>
  <title>Memory</title>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
</main>
<Toaster />

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  .card {
    border: 1px solid black;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
</style>
