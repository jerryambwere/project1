const inputForm = document.getElementById("productName");
const template = document.getElementsByTagName("template");
const url = "https://www.cheapshark.com/api/1.0/deals?upperPrice=15";
const gameList = document.getElementById("gamelist");
const cartGames = document.getElementById("cart games");
const cartBtn = document.getElementById("cart");
const searchFrm = document.getElementById("text");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((data) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img class='thumb'src="${data.thumb}"alt="game poster">
        <h2 class="title">Title:${data.title}</h2>
 <p class="dealRating">Rating:${data.dealRating}</p>
<p class="releaseDate">Release Date:${data.releaseDate}</p>
<p class="internalName">Code Name:${data.internalName}</p>
<p class="salePrice">Game price:${data.salePrice}</p>
       <button class="purchase">purchase</button>
       <button id="delete">delete</button>
`;
      gameList.appendChild(li);
      const buyBtn = li.querySelector(".purchase");
    
        buyBtn.addEventListener("click", function () {
          buyBtn.textContent = "purchased";
  
          alert("Confirm purchase!");
          const deleteBtn = li.querySelector(".delete");
          deleteBtn.addEventListener("click", function () {
          
            li.removeChild();
      
            alert("Game deleted!");
          });
        });
      })
        });
    
  
