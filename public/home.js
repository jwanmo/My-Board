let dragSource = null;

function drag(event) {
  console.log("Drag");
  const draggedBox = event.target.closest(".box");
  event.dataTransfer.setData("text/plain", draggedBox.outerHTML);
  dragSource = event.target;
}

function drop(event) {
  event.preventDefault();
  const taskId = dragSource.getAttribute("task-id");
  const taskTitle = dragSource.querySelector(".task-title").textContent;
  const taskDescription =
    dragSource.querySelector(".task-description").textContent;
  const taskDeadline = dragSource.querySelector(".task-deadline").textContent;
  const taskComment = dragSource.querySelector(".task-comment").textContent;
  const taskCreated = dragSource.querySelector(".task-created").textContent;

  event.currentTarget.appendChild(dragSource);
  dragSource = null;

  event.target.style.opacity = "1";
  const token = getLocalStoarge("token");
  const data = {
    status: event.currentTarget.getAttribute("column-id"),
    title: taskTitle,
    description: taskDescription,
    deadline: taskDeadline ? taskDeadline : null,
    comment: taskComment,
    created: taskCreated,
  };

  const url = "/task/" + taskId;
  fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": token,
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
    .then(() => {
      displayTasks();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function allowDrop(event) {
  console.log("Allowdrop");
  event.preventDefault();
}

function createCard(cardName) {
  const box = document.createElement("div");
  box.className = "box";
  box.innerHTML = ``;
  const tm = document.getElementById(cardName).content.cloneNode(true);
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
  const box = createCard("tmNewCard");
  column.appendChild(box);
  const createButton = document.getElementById("createButton");
  createButton.addEventListener("click", saveTask);
}

function saveTask() {
  console.log("saveTask");
  const taskTitle = document.getElementById("taskTitle");
  const url = "/task";
  const token = getLocalStoarge("token");
  const data = {
    title: taskTitle.value,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Authorization": token,
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
    .then(() => {
      displayTasks();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

if (document.getElementById("tmCard")) {
  displayTasks();
}

function displayTasks() {
  clearTasksContainer();
  const todoCoulmn = document.querySelector('div[column-id="todo"]');
  const doingCoulmn = document.querySelector('div[column-id="doing"]');
  const doneCoulmn = document.querySelector('div[column-id="done"]');

  console.log(todoCoulmn, doingCoulmn);
  const url = "/task";
  const token = getLocalStoarge("token");
  fetch(url, {
    method: "GET",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        data.forEach((task) => {
          const taskElement = createCard("tmCard");
          taskElement.classList.add("task");
          taskElement.setAttribute("task-id", task.id);

          // Function to create and append a span for each task property
          function appendTaskDetail(className, content) {
            const detailElement = document.createElement("span");
            detailElement.classList.add(className);
            detailElement.textContent = content; // Use .innerHTML if you need to include HTML
            taskElement.appendChild(detailElement);
          }

          // Append each task detail
          appendTaskDetail("task-title", task.title);
          appendTaskDetail("task-description", task.description);
          appendTaskDetail("task-deadline", task.deadline);
          appendTaskDetail("task-comment", task.comment);
          appendTaskDetail("task-created", task.created);

          // Finally, append the task to the tasks container

          if (task.status == "doing") {
            doingCoulmn.appendChild(taskElement);
          } else if (task.status == "done") {
            doneCoulmn.appendChild(taskElement);
          } else {
            todoCoulmn.appendChild(taskElement);
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
    });
}

function clearTasksContainer() {
  const todoCoulmn = document.querySelector('div[column-id="todo"]');
  const doingCoulmn = document.querySelector('div[column-id="doing"]');
  const doneCoulmn = document.querySelector('div[column-id="done"]');

  while(todoCoulmn.childNodes.length > 5){
    todoCoulmn.removeChild(todoCoulmn.lastChild);
  }

  doingCoulmn.innerHTML = "";
  doneCoulmn.innerHTML = "";
}



