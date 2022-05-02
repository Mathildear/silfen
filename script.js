//Fetching data both for product list and product view//
window.addEventListener("DOMContentLoaded", init);

function init(event) {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let url = "https://mdesign.dk/silfen/wp-json/wp/v2/bag";

  if (id) {
    url += `/${id}`;
  }

  getData(url + "?_embed");

  async function getData(fetchurl) {
    console.log(fetchurl);
    let result = await fetch(fetchurl);
    if (id) {
      showSingleBag(await result.json());
    } else {
      showBag(await result.json());
    }
  }
}

//For the showBag
function 

