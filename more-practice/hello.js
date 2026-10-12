let words = document.getElementsByClassName('word');
console.log(words)

Array.from(words).forEach((e) =>{
  console.log(e);
  let text = e.innerText.split("");
  console.log(text);

  e.innerText = "";
  text.forEach(letter =>{
    const span = document.createElement('span');
    span.className = "letter";
    span.innerText = letter;
    e.appendChild(span);
  })
})
