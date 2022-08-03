/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["bad", "big"];
  let noun = ["badge", "dog"];
  let finish = [".com", ".ve"];

  function randomWordSelector() {
    return Math.floor(Math.random() * 2);
  }

  function domainNameGenerator(pronoun, adj, noun, finish) {
    let resultString = ``;
    resultString = resultString.concat(pronoun[randomWordSelector()]);
    resultString = resultString.concat(adj[randomWordSelector()]);
    resultString = resultString.concat(noun[randomWordSelector()]);
    resultString = resultString.concat(finish[randomWordSelector()]);
    return resultString;
  }

  console.log(domainNameGenerator(pronoun, adj, noun, finish));
};
