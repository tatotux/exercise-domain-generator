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
  let domains = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  pronoun.forEach(item =>
    adj.forEach(item2 =>
      noun.forEach(item3 => domains.push(item + item2 + item3 + ".com"))
    )
  );

  return domains;
};
