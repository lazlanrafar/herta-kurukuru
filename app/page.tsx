"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const audioList = [
    new Audio("/kuru2.mp3") as any,
    new Audio("/kuruto.mp3") as any,
  ];

  for (const iterator of audioList) {
    iterator.preload = "auto";
  }

  const squish = () => {
    setCount(count + 1);

    playKuru();
    animateHerta();
  };

  const playKuru = () => {
    let audio: any;

    let random = Math.floor(Math.random() * 2);
    audio = audioList[random].cloneNode();

    audio.play();

    audio.addEventListener("ended", () => {
      audio.remove();
    });
  };

  const animateHerta = () => {
    // let random = Math.floor(Math.random() * 2) + 1;
    let elem = document.createElement("img");
    elem.src = "/hertaa.gif";
    elem.style.position = "absolute";
    elem.style.width = "400px";
    elem.style.height = "400px";
    elem.style.bottom = "0";
    elem.style.right = "-510px";
    elem.style.zIndex = "-1";

    const main = document.querySelector("main");
    main?.appendChild(elem);

    let pos = -510;
    let limit = window.innerWidth + 510;

    let id = setInterval(frame, 12);
    function frame() {
      if (pos >= limit) {
        clearInterval(id);
        elem.remove();
      } else {
        pos += 20;
        elem.style.right = pos + "px";
      }
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center text-center relative overflow-hidden">
      <h1 className="text-4xl font-semibold">Welcome to Herta KuruKuru</h1>
      <hr className="border w-32 my-3" />
      <p className="text-gray-300 text-xl">
        for Herta, the <del>annoying</del> citest genius Honkai: Star Rail
        character out there.
      </p>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
      <div className="mt-20" />
      <p className="text-xl mb-10">The kuru~ has been squished</p>
      <p>
        <span className="text-4xl font-bold">{count}</span>
        <span className="text-xl ms-3">times.</span>
      </p>
      <div className="mt-14" />
      <button className="bg-[#0141ff] py-2 px-5 rounded-lg" onClick={squish}>
        Squish the kuru~!
      </button>
    </main>
  );
}
