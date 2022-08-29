var filterValue = "all";

function start() {
   fetchTodo();
   addTodo();
   changeActions();
}

const FILTER = {
   all: () => true,
   completed: (item) => item.completed,
   doing: (item) => !item.completed,
};

function addTodo() {
   document
      .querySelector(".new-item button")
      .addEventListener("click", function () {
         const itemName = document.querySelector(".new-item input");
         if (itemName.value !== "") {
            const data = getStorage();
            data.push({ title: itemName.value, completed: false });
            saveStorage(data);
            fetchTodo();
            itemName.value = "";
         }
      });
}

function changeActions() {
   const actions = document.querySelectorAll(".actions button");

   actions.forEach((action, index) => {
      action.onclick = function () {
         const value = this.dataset.change;
         filterValue = value;

         fetchTodo();
      };
   });
}

function renderTodo(data) {
   const itemsList = document.querySelector("ul.todo-items");
   itemsList.innerHTML = "";

   let html = data.filter(FILTER[filterValue]).map((item, index) => {
      return `<li data-index="${index}" class="${
         item.completed && "completed"
      }">
   <span class="item">${item.title}</span>
   <div><span class="itemComplete">✅</span><span class="itemDelete">❌</span></div>
   </li>`;
   });

   itemsList.innerHTML = html;

   const itemsListUL = document.querySelectorAll("ul li");
   for (var i = 0; i < itemsListUL.length; i++) {
      itemsListUL[i]
         .querySelector(".itemComplete")
         .addEventListener("click", function () {
            const index = this.parentNode.parentNode.dataset.index;
            itemComplete(index);
         });
      itemsListUL[i]
         .querySelector(".itemDelete")
         .addEventListener("click", function () {
            const index = this.parentNode.parentNode.dataset.index;
            itemDelete(index);
         });
   }
}

function fetchTodo() {
   try {
      const data = getStorage();
      renderTodo(data);
   } catch (e) {}
}

function itemComplete(index) {
   const data = getStorage();

   data[index].completed = !data[index].completed;

   saveStorage(data);

   fetchTodo();
}

function itemDelete(index) {
   const data = getStorage();

   data.splice(index, 1);

   saveStorage(data);

   fetchTodo();
}

const KEY_DEFAULT = "todo-items";

function saveStorage(data) {
   localStorage.setItem(KEY_DEFAULT, JSON.stringify(data));
}

function getStorage() {
   return JSON.parse(localStorage.getItem(KEY_DEFAULT)) || [];
}

start();
