import react, { useRef } from 'react';
import { useEffect } from 'react';
import brand from './files/brand.json'
export default function Brand() {
  let refs = useRef({});
  let scrollTo = (letter) => {
    if (refs.current[letter]) {
      refs.current[letter].scrollIntoView({ behavior: 'smooth', block: "start" });
    }
  }
  let brandI = Object.keys(brand);
  return (
    <>
      <h1>Find Your Favorite Brand</h1>
      <div> <span>Brand Index: </span> {
        brandI.map((letter) => (
          <button onClick={() => scrollTo(letter)} key={letter}>{letter}</button>
        ))
      }</div>
      {brandI.map((letter) => (
        <div key={letter} ref={el => refs.current[letter] = el}>
          <h2>{letter}</h2>
          {brand[letter].map((i) => (
            <button  >{i}</button>
          ))}
        </div>
      ))}
    </>
  );
}  