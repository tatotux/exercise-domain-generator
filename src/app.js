/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#create-new-domain").addEventListener("click", () => {
    document.querySelector("#new-domain").innerHTML = generateDomain();
  });
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let adjIndx = Math.floor(Math.random() * adj.length);
  let nounIndx = Math.floor(Math.random() * noun.length);

  return pronoun[proIndx] + adj[adjIndx] + noun[nounIndx] + ".com";
};
