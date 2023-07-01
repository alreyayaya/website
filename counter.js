// Check if the visit count exists in localStorage
if (!localStorage.getItem("pageVisitCount")) {
    // If not, initialize it to 0
    localStorage.setItem("pageVisitCount", 0);
  }
  
  // Increment the visit count
  function incrementVisitCount() {
    var visitCount = parseInt(localStorage.getItem("pageVisitCount"));
    visitCount++;
    localStorage.setItem("pageVisitCount", visitCount);
  }
  
  // Get the current visit count from localStorage
  var visitCount = parseInt(localStorage.getItem("pageVisitCount"));
  
  // Display the visit count on the page
  document.getElementById("page-visit-count").textContent = "Page Visits: " + visitCount;
  
  // Increment the visit count on page load
  incrementVisitCount();
  