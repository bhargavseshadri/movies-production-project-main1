// MovieComponent.js
import React from "react";
import "./FilmDisplay.css";

const FilmDisplay = () => {
  return (
    <div className="film-container">
      <div className="film-header">
        <h3>Ongoing Movie</h3>
      </div>
      <div className="film-body">
        <div className="film-image">
          <img
            src="./ongoingpng.png"
            alt="Movie Poster"
          />
        </div>
        <div className="film-description">
          <p>
          Some mysterious kidnaps are happening in a town but where ever the kidnap happen the kindaper leaves a code language hint. Due to unusual dreams Vijay (Hero) gets panicked and suffers psychologically. Even Vijay friends gets disturbed by seeing vijay's condition. By seeing his son's condition Vijay's father Prasada Rao tries to take his son to a psychiatrist but Vijay vasi escapes by saying some reasons. One day Vijay father takes his son to hospital by saying his son that he has a health problem. Hero falls in love with doctor Manvitha.
          </p>
          <p>
          Manvitha is daughter of Circle Inspector. Cl likes his daughter very much. Due to continues kidnap cases Cl feels the pressure. As part of investigation CI visits a college.
Professor Swaminath puts pressure on Cl as one of his college student goes missing. CI finds a code language where the kidnap happened. Vijay vasi teaches the same code language to Manvitha and chats with her in WhatsApp in same code language.
One day CI checks his daughter phone and finds the same code language and thinks Vijay Vasi is the real culprit (kidnaper) and starts torturing him. Cl asks Vijay Vasi why he is doing all these kidnaps but Vijay Vasi says he doesn't know anything.
In the meanwhile Manvitha gets kidnapped by knowing this Cl releases Vijay Vasi and asks him that he wants his help for further investigation. In a twist even Vasi gets kidnapped next day.

          </p>
          <button className="view-details-button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default FilmDisplay;
