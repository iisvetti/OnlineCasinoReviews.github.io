document.addEventListener("DOMContentLoaded", () => {
  const casinoList = document.getElementById("casino-list");
  const loadMoreButton = document.getElementById("load-more");
  const modal = document.getElementById("popup-modal");
  const closeModal = document.getElementById("close-btn");
  const modalTitle = document.getElementById("modal-title");

  let displayedCasinos = 4;

  const casinoData = [
    {
      name: "Sports Interaction Casino",
      logo: "images/cas1.png",
      bonus: "200% First deposit bonus + 250 FS",
      rating: 4,
      flag: "images/flag.png",
      country: "USA",
      new: true,
      freeSpins: "20 Free Spins",
    },
    {
      name: "21 Dukes Casino",
      logo: "images/cas2.png",
      bonus: "200% First deposit bonus",
      rating: 4,
      flag: "images/flag.png",
      country: "USA",
      freeSpins: "20 Free Spins",
    },
    {
      name: "AC Casino",
      logo: "images/cas3.png",
      bonus: "200% First deposit bonus",
      rating: 4,
      flag: "images/flag.png",
      country: "USA",
      new: true,
      freeSpins: "50 Free Spins",
    },
    {
      name: "All Irish Casino",
      logo: "images/cas4.png",
      bonus: "100% First deposit bonus + 70 FS",
      flag: "images/flag.png",
      rating: 4,
      country: "USA",
      freeSpins: null,
    },
  ];

  function loadCasinos() {
    casinoList.innerHTML = "";
    casinoData.slice(0, displayedCasinos).forEach((casino) => {
      const card = document.createElement("div");
      card.className = "casino-card";

      const spinsButton = casino.freeSpins
        ? `<button class="free-spins-btn">${casino.freeSpins}</button>`
        : "";

      function createRatingStars(rating) {
        const starImage = "images/star_rounded.svg";
        const grayStarImage = "images/star_dark.svg";
        let starsHTML = "";
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
          starsHTML += `<img   
         src="${starImage}" alt="зірка">`;
        }

        if (hasHalfStar) {
          starsHTML += `<img class="half-star" src="${grayStarImage}" alt="половина зірки">`;
        }

        return starsHTML;
      }

      card.innerHTML = `
          <div class="casino-info">
            <img src="${casino.logo}" alt="${casino.name} Logo">
            <div class="info-wrapper">
            <p class="casino-name">
              <img src="${casino.flag}" alt="${
        casino.country
      } Flag" class="casino-flag rating">  ${casino.name} Review ${
        casino.new ? '<span class="new-label">NEW</span>' : ""
      }
            </p>
              
              <div class="bonus-info">
                ${spinsButton}
                <button class="deposit-bonus-btn">${casino.bonus}</button>
              </div>
              
              <div class="rating-stars rating">
                
                ${createRatingStars(casino.rating)}
              </div>
            </div>
          </div>
          <button class="visit-btn">Visit</button>
        `;

      const freeSpinsBtn = card.querySelector(".free-spins-btn");
      if (freeSpinsBtn) {
        freeSpinsBtn.addEventListener("click", () => {
          modal.style.display = "flex";
          modalTitle.textContent = `${casino.freeSpins} at ${casino.name}`;
        });
      }

      casinoList.appendChild(card);
    });
  }

  loadMoreButton.addEventListener("click", () => {
    displayedCasinos += 5;
    loadCasinos();
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  loadCasinos();
});
