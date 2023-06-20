document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Perform search functionality here
    const searchQuery = document.getElementById("search-input").value;
    console.log("Search query:", searchQuery);
  });
  
