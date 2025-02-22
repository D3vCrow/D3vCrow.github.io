document.addEventListener("DOMContentLoaded", function() {
  if (window.trustedTypes) {
    // Check if a policy named "default" already exists
    if (!window.trustedTypes.getPolicy || !window.trustedTypes.getPolicy("default")) {
      try {
        window.trustedTypes.createPolicy("default", {
          createHTML: function(input) { return input; }
        });
      } catch (error) {
        console.warn("Error creating Trusted Types policy:", error);
      }
    } else {
      console.warn("Trusted Types policy 'default' already exists.");
    }
  }

  const partials = [
    { id: "about-section", url: "partials/about.html" },
    { id: "review-section", url: "partials/review.html" },
    { id: "showcases-section", url: "partials/showcases.html" },
    { id: "freelancing-section", url: "partials/freelancing.html" },
    { id: "published-games-section", url: "partials/published-games.html" },
    { id: "contact-section", url: "partials/contact.html" }
  ];

  const fetchPromises = partials.map(function(partial) {
    return fetch(partial.url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Error fetching " + partial.url + ": " + response.status);
        }
        return response.text();
      })
      .then(function(data) {
        var elem = document.getElementById(partial.id);
        if (elem) {
          elem.innerHTML = data;
        } else {
          console.warn('Element with id "' + partial.id + '" not found.');
        }
      });
  });

  Promise.all(fetchPromises)
    .then(function() {
      console.log("All partials loaded");
      initTabs();
      initTimeline();
    })
    .catch(function(err) {
      console.error("Error loading partials:", err);
    });

  function initTabs() {
    var tabButtons = document.querySelectorAll(".tab-button");
    var tabContents = document.querySelectorAll(".tab-content");
    console.log("Tab buttons found:", tabButtons.length, "Tab contents found:", tabContents.length);
    tabButtons.forEach(function(btn) {
      btn.addEventListener("click", function() {
        tabButtons.forEach(function(b) { b.classList.remove("active"); });
        tabContents.forEach(function(tc) { tc.classList.remove("active"); });
        btn.classList.add("active");
        var target = btn.getAttribute("data-tab");
        var targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add("active");
        } else {
          console.warn("No content found for tab:", target);
        }
      });
    });
  }

  function initTimeline() {
    var timelineItems = document.querySelectorAll(".timeline-item");
    var jobDetails = document.querySelectorAll(".job-details");
    console.log("Timeline items found:", timelineItems.length, "Job details found:", jobDetails.length);
    timelineItems.forEach(function(item) {
      item.addEventListener("click", function() {
        timelineItems.forEach(function(i) { i.classList.remove("active"); });
        jobDetails.forEach(function(detail) { detail.classList.remove("active"); });
        item.classList.add("active");
        var jobId = item.getAttribute("data-job");
        var activeDetail = document.getElementById(jobId);
        if (activeDetail) {
          activeDetail.classList.add("active");
        } else {
          console.warn("No job detail found for:", jobId);
        }
      });
    });
  }
});
