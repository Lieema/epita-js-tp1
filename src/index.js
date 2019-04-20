/* eslint-disable */
import list from "./actions/list";
import add from "./actions/add";


const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  // use your actions functions to add a new picture
  // bonus, trim eventual whitespaces and validate content
  // checks validity of each url and trim withespaces

  // we don't know if single element or array, ensure it's array
  let urls = [].concat(url);
  console.log(urls);

  urls.forEach((el, index, array) => array[index] = el.trim());

  console.log(urls);

  // Regex for urls (from: http://forums.devshed.com/javascript-development-115/regexp-match-url-pattern-493764.html)
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator  

  if (urls.every(el => {    
    return !!pattern.test(el)
  }))
  {
    add(urls);  
  }

  // refresh all grid with new elements
  refreshGrid()

  clearInputContents();
};

const refreshGrid = () => {
  // use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // set the URL from your Picture model.
    imgElement.src = i;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {});

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
