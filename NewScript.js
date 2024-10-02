// Thanks For Choosing GsLibrary!

// To Visit The Documents/Wiki Head To https://github.com/GsLibrary/Library/blob/main/docs.md

// OnEvent
function onEvent(Event, Read, Callback) { // cut, copy, paste, blur, contextmenu, focus, focusout, mouse enter, mouse leave, 
    if (Event === "click") {
        Read.addEventListener("click", Callback);
    } else if (Event === "rclick") {
        Read.addEventListener("contextmenu", Callback);
    } else if (Event === "dclick") {
        Read.addEventListener("dblclick", Callback);
    } else if (Event === "hover") {
        Read.addEventListener("mouseover", Callback);
    } else if (Event === "leave") {
        Read.addEventListener("mouseout", Callback);
    } else if (Event === "input") {
        Read.addEventListener("input", Callback);
    } else if (Event === "focus") {
        Read.addEventListener("focus", Callback);
    } else if (Event === "submit") {
        Read.addEventListener("submit", Callback);
    } else if (Event === "load") {
        Read.addEventListener("load", Callback);
    } else if (Event === "change") {
        Read.addEventListener("change", Callback);
    } else if (Event === "keypress") {
        document.addEventListener("keydown", function (event) {
            if (event.key === Read) {
                Callback();
            }
        });
    } else {
        console.warn("Invalid Parameters");
    }
}

// Generation Using Set
function getRandom(Type, Set) {
    if (Type === "1") {
        Set = Math.round(Math.random() * 10);
    } else if (Type === "2") {
        Set = Math.round(Math.random() * 100);
    } else if (Type === "3") {
        Set = Math.round(Math.random() * 1000);
    } else if (Type === "4") {
        const RandomLetterCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Set = RandomLetterCharacters.charAt(Math.floor(Math.random() * RandomLetterCharacters.length));
    } else {
        console.warn("Invalid Parameters");
    }
}

// Generation Using Return
function returnRandom(Type) {
    if (Type === "1") {
        return (Math.round(Math.random() * 10));
    } else if (Type === "2") {
        return (Math.round(Math.random() * 100));
    } else if (Type === "3") {
        return (Math.round(Math.random() * 1000));
    } else if (Type === "4") {
        const RandomLetterCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return (RandomLetterCharacters.charAt(Math.floor(Math.random() * RandomLetterCharacters.length)));
    } else {
        console.warn("Invalid Parameters");
    }
}

// Class
function manageClass(Type, Read, A, B) {
    if (Type === "1" || "add") {
        Read.classList.add(A);
    } else if (Type === "2" || "remove") {
        Read.classList.remove(A);
    } else if (Type === "3" || "change" || "swap") {
        Read.classList.remove(A);
        Read.classList.add(B);
    } else if (Type === "4" || "toggle") {
        Read.classList.toggle(A);
    } else {
        console.warn("Invalid Parameters")
    }
}

// Get Element By ID
function getId(id) {
    return (document.getElementById(id));
}

// Download Files From GitHub, Using GitHub API [TEST]
function GitHubDownload(pathA, pathB) {
    const apiUrl = `https://api.github.com/repos/${pathA}/contents/${pathB}?ref=main`;

    // Fetch the data from the GitHub API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Check if the data is an array and get the correct file information
            if (Array.isArray(data) && data.length > 0) {
                const file = data[0]; // Assuming you want the first file in the directory
                const downloadUrl = file.download_url;

                // Create a temporary link element and trigger download
                const link = document.createElement('a');
                link.href = downloadUrl;

                // Set the download filename: append ".zip" to the provided name or use the default
                link.download = file.name || 'download'; // Use the actual filename

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.error('No files found or invalid data structure:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching the download URL:', error);
        });
}


/*
function GitHubDownload(pathA, pathB, downloadFileName) {
    const apiUrl = `https://api.github.com/repos/${pathA}/contents/${pathB}?ref=main`;

    // Fetch the data from the GitHub API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the download_url from the API response
            const downloadUrl = data.download_url; // Corrected from data[0] to data

            // Create a temporary link element and trigger download
            const link = document.createElement('a');
            link.href = downloadUrl;

            // Set the download filename: append ".zip" to the provided name or use the default
            link.download = downloadFileName ? `${downloadFileName}.zip` : '';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error('Error fetching the download URL:', error);
        });
}
*/