const darkModeToggleButton = document.getElementById("dark-mode-toggle");
darkModeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const dragonReader = document.getElementById("dragon-reader");
dragonReader.addEventListener("click", () => {
  console.log("Clicking");
});

document.addEventListener("DOMContentLoaded", () => {
  const bookContainer = document.getElementById("book-container");
  const loadingContainer = 

  fetch(`https://gutendex.com/books/?topic=novels`)
    .then(handleResponse)
    .catch(handleError);

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error("Problem Encountered");
    }
    return response.json().then((data) => {
      
      if (data.results) {
        console.log(data.results);
      } else {
        bookContainer.innerHTML =
          "<p>No novels found. Try a different search.</p>";
      }
    });
  }
});
