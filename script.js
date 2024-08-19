const btn = document.getElementsByTagName("button");
const title = document.querySelector(".heading");
const p = document.querySelector("p");

// console.log(p);
const body = document.querySelector("body");
// console.log(btn.length);

Array.from(btn).forEach(function (allbtn) {
  //   console.log(allbtn.id);
  allbtn.addEventListener("click", function (e) {
    // console.log(e.target.id);
    if (e.target.id === "Grey1") {
      body.style.backgroundColor = "#f4f3ee";
    }
    if (e.target.id === "Grey2") {
      body.style.backgroundColor = "#dbdbd8";
    }
    if (e.target.id === "Grey3") {
      body.style.backgroundColor = "#c2c2c2";
    }
    if (e.target.id === "Grey4") {
      body.style.backgroundColor = "#bcb8b1";
    }
    if (e.target.id === "Grey5") {
      body.style.backgroundColor = "#a39d97";
    }
    if (e.target.id === "Grey6") {
      body.style.backgroundColor = "#8a817c";
    }
    if (e.target.id === "Grey7") {
      body.style.backgroundColor = "#68605b";
    }
    if (e.target.id === "Grey8") {
      body.style.backgroundColor = "#424140";
    //   title.style.color = "white";
    //   p.style.color = "white";
    }
  });
});
