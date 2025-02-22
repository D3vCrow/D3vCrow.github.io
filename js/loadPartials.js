// js/loadPartials.js
const partials = [
  { id: "about-section", url: "partials/about.html" },
  { id: "review-section", url: "partials/review.html" },
  { id: "showcases-section", url: "partials/showcases.html" },
  { id: "freelancing-section", url: "partials/freelancing.html" },
  { id: "published-games-section", url: "partials/published-games.html" },
  { id: "contact-section", url: "partials/contact.html" }
];

partials.forEach((partial) => {
  fetch(partial.url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(partial.id).innerHTML = data;
    })
    .catch((error) =>
      console.error("Error loading partial:", partial.url, error)
    );
});
