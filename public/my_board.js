document.addEventListener("DOMContentLoaded", function () {
    // Legg til drag-event for kortet
    function drag(event) {
      const draggedBox = event.target.closest(".box");
      event.dataTransfer.setData("text/plain", draggedBox.outerHTML);
    }
  
    // Legg til drop-event for kolonner
    function drop(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData("text/plain");
      const draggedBox = document.createElement("div");
      draggedBox.innerHTML = data;
      draggedBox.classList.add("box");
      draggedBox.draggable = true;
      draggedBox.ondragstart = drag;
      draggedBox.addEventListener("click", moveCard);
  
      const existingBox = event.currentTarget.querySelector(".box");
  
      if (existingBox) {
          // Fjern eksisterende kort fra kolonnen.
          existingBox.remove();
      }
  
      // Legg til det klonede kortet i kolonnen.
      event.currentTarget.appendChild(draggedBox);
  
      event.target.style.opacity = "1";
  }
  
  
    // Legg til allowDrop-funksjonen
    function allowDrop(event) {
      event.preventDefault();
    }
  
    function moveCard(event) {
      const box = event.currentTarget;
      const currentColumn = box.parentElement;
  
      if (currentColumn.nextElementSibling) {
        const nextColumn = currentColumn.nextElementSibling;
        const clonedBox = box.cloneNode(true);
        nextColumn.appendChild(clonedBox);
      } else {
        const firstColumn = document.querySelector(".box-column");
        const clonedBox = box.cloneNode(true);
        firstColumn.appendChild(clonedBox);
      }
    }
  
    // Legg til event listeners for ondragover og ondrop
    const columns = document.querySelectorAll(".box-column");
    columns.forEach((column) => {
      column.addEventListener("dragover", allowDrop);
      column.addEventListener("drop", drop);
    });
  
    // Opprett kort
    function createCard() {
      const box = document.createElement("div");
      box.className = "box";
      box.innerHTML = `
    <span class="tag" id="blue">New Task</span>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        excepturi!
    </p>
    <div class="box-footer">
        <div class="date">
            <li><i class="fa-solid fa-calendar-days"></i></li>
            <span>Today</span>
        </div>
        <li class="comment"><i class="fa-solid fa-message"></i>0</li>
    </div>
  `;
      box.draggable = true;
      box.ondragstart = drag;
      box.addEventListener("click", moveCard);
      return box;
    }
  
    // Legg til kort ved å klikke på pluss-ikonet
    const plusIcons = document.querySelectorAll(".fa-plus");
    plusIcons.forEach((icon) => {
      icon.addEventListener("click", addCard);
    });
  
    function addCard(event) {
      const column = event.target.closest(".box-column");
      const box = createCard();
      column.appendChild(box);
    }
  });
  