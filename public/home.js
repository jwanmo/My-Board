let dragSource = null;

function drag(event) {
  console.log("Drag");
  const draggedBox = event.target.closest(".box");
  event.dataTransfer.setData("text/plain", draggedBox.outerHTML);
  dragSource = event.target;
}

function drop(event) {
  console.log("Drop");
  event.preventDefault();

  event.currentTarget.appendChild(dragSource);
  dragSource = null;

  event.target.style.opacity = "1";
}

function allowDrop(event) {
  console.log("Allowdrop");
  event.preventDefault();
}

function createCard() {
  const box = document.createElement("div");
  box.className = "box";
  box.innerHTML = ``;
  const tm = document.getElementById("tmCard").content.cloneNode(true);
  box.appendChild(tm);

  box.draggable = true;
  box.ondragstart = drag;

  return box;
}

const plusIcon = document.querySelector(".fa-plus");
plusIcon.addEventListener("click", addCard);

function addCard(event) {
  console.log("ADD");
  const column = event.target.closest(".box-column");
  const box = createCard();
  column.appendChild(box);

  const taskTitle = document.getElementById("taskTitle");
  const url = "/task";
  console.log(taskTitle);
  const data = {
    title: taskTitle.value,
    token: localStorage.getItem("token"),
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Network response was not ok" + JSON.stringify(response)
        );
      }
      return JSON.stringify(response);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
