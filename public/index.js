

function navigateTo(page) {
    console.log("navigate to: ", page)
    // Fetch the content of the selected page
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(content => {
            // Replace the content of the 'content' div with the fetched HTML
            document.getElementById('content').innerHTML = content;

            // Dynamically create a script element to load the corresponding JavaScript file
            const scriptElement = document.createElement('script');
            scriptElement.src = `${page}.js`;

            // Check if the script has been loaded before appending it again
            if (!document.querySelector(`script[src="${page}.js"]`)) {
                document.body.appendChild(scriptElement);
            }

        })
        .catch(error => console.error('Error fetching page:', error));
}

// Load the default page (Home) when the application starts
document.addEventListener('DOMContentLoaded', function () {
    navigateTo('home');
});