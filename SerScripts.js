document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const suggestions = document.getElementById("suggestions");

    const pages = [
        { name: "Home", url: "index.html" },
        { name: "About", url: "about.html" },
        { name: "Blog", url: "blog.html" },
        { name: "Portfolio", url: "portfolio.html" },
        { name: "Shop", url: "shop.html" },
        { name: "Videos", url: "videos.html" },
        { name: "Etsy", url: "shop.html" },
        { name: "Ebay", url: "shop.html" },
        { name: "Podcast", url: "videos.html" },
        { name: "YouTube", url: "videos.html" },
        // Add more pages or articles here
    ];

    console.log("JavaScript loaded");

    searchBar.addEventListener("input", (e) => {
        console.log("Input event fired");
        const query = e.target.value.toLowerCase();
        console.log("Query:", query);
        suggestions.innerHTML = "";

        if (query) {
            const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
            console.log("Filtered Pages:", filteredPages);
            filteredPages.forEach(page => {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = page.name;
                suggestionItem.addEventListener("click", () => {
                    window.location.href = page.url;
                });
                suggestions.appendChild(suggestionItem);
            });
        }
    });

    // Handle enter key press
    searchBar.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const query = searchBar.value.toLowerCase();
            const matchedPage = pages.find(page => page.name.toLowerCase() === query);
            if (matchedPage) {
                window.location.href = matchedPage.url;
            }
        }
    });

    document.addEventListener("click", (e) => {
        if (!searchBar.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.innerHTML = "";
        }
    });
});
