document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const suggestions = document.getElementById("suggestions");

    if (!searchBar || !suggestions) {
        return;
    }

    const pages = [
        { name: "Home", url: "index.html" },
        { name: "BlockSurvival Wiki", url: "links/game-wiki.html" },
        { name: "Project Insight", url: "links/asset-tool.html" },
        { name: "Dev Log", url: "links/dev-log.html" },
        { name: "Portfolio", url: "links/portfolio.html" },
        { name: "About", url: "links/about.html" },
        { name: "Contact", url: "links/contact.html", hidden: true },
        { name: "Data Removal", url: "links/delete-data.html", hidden: true },
        { name: "Privacy Policy", url: "links/privacy-policy.html", hidden: true }
    ];

    const renderSuggestions = (filtered) => {
        suggestions.innerHTML = "";

        if (filtered.length === 0) {
            suggestions.classList.remove("show");
            return;
        }

        filtered.forEach(page => {
            const suggestionItem = document.createElement("li");
            suggestionItem.textContent = page.name;
            suggestionItem.tabIndex = 0;
            suggestionItem.addEventListener("click", () => {
                window.location.href = page.url;
            });
            suggestionItem.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.location.href = page.url;
                }
            });
            suggestions.appendChild(suggestionItem);
        });

        suggestions.classList.add("show");
    };

    searchBar.addEventListener("input", (event) => {
        const query = event.target.value.trim().toLowerCase();

        if (query.length === 0) {
            suggestions.innerHTML = "";
            suggestions.classList.remove("show");
            return;
        }

        const filteredPages = pages.filter(page => !page.hidden && page.name.toLowerCase().includes(query));
        renderSuggestions(filteredPages);
    });

    searchBar.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const query = searchBar.value.trim().toLowerCase();
            const matchedPage = pages.find(page => !page.hidden && page.name.toLowerCase() === query);
            if (matchedPage) {
                window.location.href = matchedPage.url;
            }
        } else if (event.key === "Escape") {
            suggestions.innerHTML = "";
            suggestions.classList.remove("show");
            searchBar.blur();
        }
    });

    document.addEventListener("click", (event) => {
        if (!searchBar.contains(event.target) && !suggestions.contains(event.target)) {
            suggestions.innerHTML = "";
            suggestions.classList.remove("show");
        }
    });
});
