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
        // Add more pages or articles here
    ];

    searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        suggestions.innerHTML = "";

        if (query) {
            const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
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

    document.addEventListener("click", (e) => {
        if (!searchBar.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.innerHTML = "";
        }
    });
});
