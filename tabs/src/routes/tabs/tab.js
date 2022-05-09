import { useState } from "react";
import Button from "./button";
import Digimon from "../../assets/digimon.png";
import Pokemon from "../../assets/pokemon.png";
import Tamagotchi from "../../assets/tamagotchi.png";

import "./tab.styles.css";

export default function Tab({ data }) {
  const [tab, setTab] = useState(1);

  function tabHandleClick(index) {
    setTab(index);
  }
  return (
    <>
      <Button tab={tab} tabHandleClick={tabHandleClick} />

      <div className="tab-contents">
        <section
          className={`tab-content ${tab === 1 ? "is-selected" : ""}`}
          data-theme="digimon"
        >
          <img src={Digimon} alt="digimon" />
          <h2>Digimon</h2>
          <p>
            Digimon, short for "Digital Monsters", is a Japanese media franchise
            encompassing virtual pet toys, anime, manga, video games, films and
            a trading card game. The franchise focuses on Digimon creatures,
            which are monsters living in a "Digital World", a parallel universe
            that originated from Earth's various communication networks.
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Digimon">
              More about Digimon &rarr;
            </a>
          </p>
        </section>

        <section
          className={`tab-content ${tab === 2 ? "is-selected" : ""}`}
          data-theme="pokemon"
        >
          <img src={Pokemon} alt="Pokemon" />
          <h2>Pokémon</h2>
          <p>
            Pokémon also known as Pocket Monsters in Japan, is a media franchise
            managed by The Pokémon Company, a Japanese consortium between
            Nintendo, Game Freak, and Creatures. The franchise copyright is
            shared by all three companies, but Nintendo is the sole owner of the
            trademark.
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Pokémon">
              More about Pokémon &rarr;
            </a>
          </p>
        </section>

        <section
          className={`tab-content ${tab === 3 ? "is-selected" : ""}`}
          data-theme="tamagotchi"
        >
          <img src={Tamagotchi} alt="Tamagotchi" />
          <h2>Tamagotchi</h2>
          <p>
            The Tamagotchi is a handheld digital pet, created in Japan by
            Akihiro Yokoi of Bandai. It was released by Bandai on November 23,
            1996 in Japan and May 1, 1997 in the rest of the world, quickly
            becoming one of the biggest toy fads of the 1990s and early 2000s.
            As of 2010, over 76 million Tamagotchis had been sold worldwide.
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Tamagotchi">
              More about Tamagotchi &rarr;
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
