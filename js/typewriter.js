const typewriter = (param) => {

  let el = document.querySelector(param.el);
  let speed = param.speed;
  let string = param.string.split("");

  string.forEach((char, index) => {
      setTimeout(() => {
          el.textContent += char;
      }, speed * index);
  });
};

typewriter({
  el: "#typewriter", //Selector
  string: "- Jun Kikuchi Profile Site - ", //Signiture
  speed: 100 //Speed
});

typewriter({
  el: "#type_works", //Selector
  string: "_Others_ ", //Signiture
  speed: 100 //Speed
});

typewriter({
  el: "#Web-API", //Selector
  string: "Web-API", //Signiture
  speed: 100 //Speed
});