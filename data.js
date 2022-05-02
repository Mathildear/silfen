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
function showBag(bagArray) {
  console.log(bagArray);
  const template = document.querySelector(".productlistTemplate").content;
  const parentElement = document.querySelector(".productlistmain");
  bagArray.forEach((bag) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".bagName").textContent = bag.title.rendered;
    copy
      .querySelector("a")
      .setAttribute("href", `productview.html?id=${bag.id}`);
    copy.querySelector(".price span").textContent = bag.price;
    // copy.querySelector(".bagImg").src =
    //   bag._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    copy.querySelector(".bagImg").src = bag.img.guid;
    parentElement.appendChild(copy);
  });
}

//For the showSingleBag//

// function showSingleBag(singlebag) {
//   console.log(singlebag);
//   document.querySelector(".bagName").textContent = singlebag.bag_name;
//   document.querySelector(".bagPrice span").textContent = singlebag.price;
// }
