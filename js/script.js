function main() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => createList(data));
}
const list = document.getElementsByClassName("list")[0];

function createList(items) {
  let itemsArray = items;
  let counter = 0;
  let curSublist, curListItemEl, curSubListItemEl;
  createElements(itemsArray[0])
  counter = 1;
  for (let i = 1; i < itemsArray.length; i++) {
    if (itemsArray[i].userId == itemsArray[i - 1].userId) {
      if (counter < 2) {
        let curSubListItemEl = document.createElement("li");
        curSublist.appendChild(curSubListItemEl);
        curSubListItemEl.innerHTML = itemsArray[i].title;
        curSubListItemEl.classList.add("sublist__item");
        counter++;
      }
    }
    else {
      createElements(itemsArray[i])
      counter = 1;
    }
  }

  function createElements(item) {
    curListItemEl = document.createElement("li");
    curListItemEl.classList.add("list__item");
    curSublist = document.createElement("ul");
    curSublist.classList.add("sublist");
    list.appendChild(curListItemEl);
    curListItemEl.innerHTML = 'userId: ' + item.userId;
    curListItemEl.appendChild(curSublist);
    curSubListItemEl = document.createElement("li");
    curSublist.appendChild(curSubListItemEl);
    curSubListItemEl.innerHTML = item.title;
    curSubListItemEl.classList.add("sublist__item");
  }
}
let heightChecked = false;
let initHeight = 0;
list.onclick = slideToggle;
function slideToggle(event) {
  let currentItem = event.target;
  let arrSublist = document.querySelectorAll('.sublist');
  let listItems = document.querySelectorAll('.list__item');
  currSublist = currentItem.querySelectorAll('.sublist')[0];
  if (!heightChecked) {
    currentSubItems = currSublist.querySelectorAll('.sublist__item');
    currentSubItems.forEach((curItem) => {
    initHeight += curItem.offsetHeight;
    });
    heightChecked = true;
  }
  if (currentItem.className.indexOf('opened') === -1) {
    arrSublist.forEach((sublist) => {
      sublist.style.height = '0px';
    });
    listItems.forEach((item) => {
      item.classList.remove("opened");
    });
    currentItem.classList.add("opened");
    currSublist.style.height = initHeight + 'px';
  }
  else {
    currentItem.classList.remove("opened");
    currSublist.style.height = 0 + 'px';
  }
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    main()
  }
};