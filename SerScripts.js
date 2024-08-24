document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const suggestions = document.getElementById("suggestions");

    const pages = [
        { name: "Home", url: "index.html" },
        { name: "About", url: "links/about.html" },
        { name: "Blog", url: "links/blog.html" },
        { name: "Portfolio", url: "links/portfolio.html" },
        { name: "Shop", url: "links/shop.html" },
        { name: "Videos", url: "links/videos.html" },
        { name: "Etsy", url: "links/shop.html" },
        { name: "Ebay", url: "links/shop.html" },
        { name: "Podcast", url: "links/videos.html" },
        { name: "YouTube", url: "links/videos.html" },
        { name: "Privacy Policy", url: "links/privacy-policy.html" },
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

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        alert('Inspecting the code is disabled on this site.');
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        alert('Inspecting the code is disabled on this site.');
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        alert('Viewing the source code is disabled on this site.');
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        alert('Inspecting the code is disabled on this site.');
        e.preventDefault();
    }
    if (e.key === 'F12' || e.key === 'F11' || e.key === 'F10' || e.key === 'F9' || e.key === 'F8' || e.key === 'F7' || e.key === 'F6' || e.key === 'F5' || e.key === 'F4' || e.key === 'F3' || e.key === 'F2' || e.key === 'F1') {
        alert('Function keys are disabled on this site.');
        e.preventDefault();
    }
});
