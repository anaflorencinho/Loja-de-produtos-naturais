document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".product-card");

    // Função para remover acentuação
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = removeAccents(searchInput.value.toLowerCase());

        productCards.forEach(function (card) {
            const cardTitle = removeAccents(card.querySelector(".card-title").textContent.toLowerCase());
            const cardText = removeAccents(card.querySelector(".card-text").textContent.toLowerCase());

            if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
                card.style.display = "block"; // Mostra o card
            } else {
                card.style.display = "none"; // Oculta o card
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modalBody = document.querySelector(".modal-body");
    const buyButtons = document.querySelectorAll("button[data-bs-toggle='modal']");

    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const dataName = button.getAttribute("data-name");
            const dataPrice = button.getAttribute("data-price");

            modalBody.innerHTML = `Produto: ${dataName}<br>Preço: ${dataPrice}`;
        });
    });
});
