document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const suggestions = document.getElementById("suggestions");

    const pages = [
        { name: "Home", url: "https://www.tribushonline.com/index.html" },
        { name: "About", url: "https://www.tribushonline.com/links/about.html" },
        { name: "Blog", url: "https://www.tribushonline.com/links/blog.html" },
        { name: "Portfolio", url: "https://www.tribushonline.com/links/portfolio.html" },
        { name: "Shop", url: "https://www.tribushonline.com/links/shop.html" },
        { name: "Videos", url: "https://www.tribushonline.com/links/videos.html" },
        { name: "Podcast", url: "https://www.tribushonline.com/links/videos.html" },
        { name: "YouTube", url: "https://www.tribushonline.com/links/videos.html" },
        { name: "Financial Calculator", url: "https://fin.tribushonline.com/" },
        { name: "Debt", url: "https://www.tribushonline.com/links/debt-solutions.html" },
        { name: "Life", url: "https://www.tribushonline.com/links/life-insurance.html" },
        { name: "Life Insurance", url: "https://www.tribushonline.com/links/life-insurance.html" },
        { name: "Insurance", url: "https://www.tribushonline.com/links/insurance.html" },
        { name: "IUL", url: "https://www.tribushonline.com/links/iul-/insurance.html" },
        { name: "Term", url: "https://www.tribushonline.com/links/term-life-insurance.html" },
        { name: "Whole", url: "https://www.tribushonline.com/links/whole-life-insurance.html" },
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
