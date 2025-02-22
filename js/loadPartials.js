const partials = [
  { id: "about-section", url: "partials/about.html" },
  { id: "review-section", url: "partials/review.html" },
  { id: "videos-section", url: "partials/videos.html" },
  { id: "freelancing-section", url: "partials/freelancing.html" },
  { id: "published-games-section", url: "partials/published-games.html" },
  { id: "contact-section", url: "partials/contact.html" }
];

const fetchPromises = partials.map(partial => {
  return fetch(partial.url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(partial.id).innerHTML = data;
    });
});

Promise.all(fetchPromises).then(() => {
  // All partials are loaded—initialize tabs and timeline event listeners.
  initTabs();
  initTimeline();
});

// Initializes the tab switching functionality in the review section.
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(tc => tc.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      const targetContent = document.getElementById(target);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

// Initializes the interactive timeline functionality.
function initTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const jobDetails = document.querySelectorAll(".job-details");

  timelineItems.forEach(item => {
    item.addEventListener("click", () => {
      timelineItems.forEach(i => i.classList.remove("active"));
      jobDetails.forEach(detail => detail.classList.remove("active"));
      item.classList.add("active");
      const jobId = item.getAttribute("data-job");
      const activeDetail = document.getElementById(jobId);
      if (activeDetail) {
        activeDetail.classList.add("active");
      }
    });
  });
}
