document.addEventListener("DOMContentLoaded", () => {
  const partials = [
    { id: "about-section", url: "partials/about.html" },
    { id: "review-section", url: "partials/review.html" },
    { id: "videos-section", url: "partials/showcases.html" },
    { id: "freelancing-section", url: "partials/freelancing.html" },
    { id: "published-games-section", url: "partials/published-games.html" },
    { id: "contact-section", url: "partials/contact.html" }
  ];

  Promise.all(
    partials.map(partial =>
      fetch(partial.url)
        .then(resp => {
          if (!resp.ok) throw new Error(`Error fetching ${partial.url}`);
          return resp.text();
        })
        .then(data => {
          document.getElementById(partial.id).innerHTML = data;
        })
    )
  )
    .then(() => {
      console.log("All partials loaded");
      initTabs();
      initTimeline();
    })
    .catch(err => {
      console.error("Error loading partials:", err);
    });

  // Tab functionality for the review section
  function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    console.log("Tab buttons found:", tabButtons.length, "Tab contents found:", tabContents.length);
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(tc => tc.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add("active");
        } else {
          console.warn("No content found for tab:", target);
        }
      });
    });
  }

  // Timeline functionality in the Career tab
  function initTimeline() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const jobDetails = document.querySelectorAll(".job-details");
    console.log("Timeline items found:", timelineItems.length, "Job details found:", jobDetails.length);
    timelineItems.forEach(item => {
      item.addEventListener("click", () => {
        timelineItems.forEach(i => i.classList.remove("active"));
        jobDetails.forEach(detail => detail.classList.remove("active"));
        item.classList.add("active");
        const jobId = item.getAttribute("data-job");
        const activeDetail = document.getElementById(jobId);
        if (activeDetail) {
          activeDetail.classList.add("active");
        } else {
          console.warn("No job detail found for:", jobId);
        }
      });
    });
  }
});
