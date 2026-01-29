const right = document.getElementById("right");
const left = document.getElementById("left");
const listItems = document.getElementsByClassName("list-items");

for (i of listItems) {
  i.addEventListener("dragstart", (e) => {
    let selected = e.target;
    // console.log(selected);
    left.addEventListener("dragover", (e) => {
      e.preventDefault();
      left.addEventListener("drop", (e) => {
        if(selected){
          left.appendChild(selected);
          selected = null;
        }
      });
    });
    right.addEventListener("dragover", (e) => {
      e.preventDefault();
      right.addEventListener("drop", (e) => {
        if(selected){
          right.appendChild(selected);
          selected = null;
        }
      });
    });
  });
}
