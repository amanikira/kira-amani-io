// Footer
// Step 1: Create a variable named today and assign it a new Date object
const today = new Date();

// Step 2: Create a variable named thisYear and assign it the current year using getFullYear()
const thisYear = today.getFullYear();

// Step 3: Select the footer element from the DOM
const footer = document.querySelector('footer');

// Step 4: Create a new paragraph (p) element
const copyright = document.createElement('p');

// Step 5: Set the inner HTML to include your name, the current year, and the copyright symbol
copyright.innerHTML = `&copy; ${thisYear} Kira Amani`;

// Step 6: Append the copyright element to the footer
footer.appendChild(copyright);

// Skills
// Step 1: List your skills by creating an Array of String values and store it in a variable named skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];

// Step 2: Create a variable named skillsSection and use "DOM Selection" to select the skills section by id 
const skillsSection = document.getElementById('skills-section');

// Step 3: Create a variable named skillsList and use "DOM Selection" to query the skillsSection (instead of the entire document) to select the <ul> element you created earlier in this assignment
const skillsList = skillsSection.querySelector('ul');

// Step 4: Create a for loop to iterate over your skills Array
for (let i = 0; i < skills.length; i++) {
    // Create a variable named skill to create a new list item (li) element
    const skill = document.createElement('li');

    // Use the skill variable to set the inner text of the li element to the current array element
    skill.innerText = skills[i];

    // Append the skill (li) element to the skillsList (ul)
    skillsList.appendChild(skill);
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the form by name attribute
    let messageForm = document.forms['leave_message'];

    // Add an event listener to handle the "submit" event
    messageForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Create variables to store the values of the form fields
        const userName = event.target.usersName.value;
        const userEmail = event.target.usersEmail.value;
        const userMessage = event.target.usersMessage.value;

        // Log the form field values (optional, for debugging)
        console.log(`usersName: ${userName}, usersEmail: ${userEmail}, usersMessage: ${userMessage}`);

        // Get the messages section and the unordered list (ul) inside it
        let messageSection = document.getElementById("messages");
        let messageList = messageSection.querySelector("ul");

        // Create a new list item (li) to hold the new message
        let newMessage = document.createElement("li");

        // Set the inner HTML of the newMessage element
        newMessage.innerHTML = `
            <a href="mailto:${userEmail}">${userName}</a>: 
            <span>${userMessage}</span>
        `;

        // Create a remove button
        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.setAttribute("type", "button");

        // Add an event listener to the remove button
        removeButton.addEventListener("click", function() {
            let entry = this.parentNode;  // Find the parent element (li)
            entry.remove();  // Remove the message from the list

            // Hide the message section if the list is empty
            if (messageList.childElementCount === 0) {
                messageSection.style.display = 'none';
            }
        });

        // Append the remove button to the new message
        newMessage.appendChild(removeButton);

        // (Optional) Add an edit button for each message
        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.setAttribute("type", "button");

        editButton.addEventListener("click", function() {
            let messageSpan = newMessage.querySelector("span");

            // Toggle between editable and non-editable states
            if (editButton.innerText === "Edit") {
                messageSpan.setAttribute("contenteditable", "true");
                messageSpan.focus();
                editButton.innerText = "Save";
            } else {
                messageSpan.setAttribute("contenteditable", "false");
                editButton.innerText = "Edit";
            }
        });

        // Append the edit button to the new message
        newMessage.appendChild(editButton);

        // Append the new message to the message list
        messageList.appendChild(newMessage);

        // Show the message section if it was hidden
        messageSection.style.display = 'block';

        // Reset the form to clear the input fields
        messageForm.reset();
    });
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // GitHub API URL
    const githubUsername = 'amanikira';  // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

    //console log
    console.log('Fetching GitHub Repos...');

    // Fetch data from the GitHub API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(repositories => {
            // Log the repositories data for debugging
            console.log(repositories);

            // DOM Selection for the Projects section
            const projectSection = document.getElementById('projects');
            const projectList = projectSection.querySelector('ul');

            // Iterate over the repositories array
            repositories.forEach(repo => {
                // Create a new list item (li) element for each repository
                const project = document.createElement('li');

                // Set the inner text of the list item to the repository name
                project.innerText = repo.name;

                // Append the project element to the project list
                projectList.appendChild(project);
            });
        })
        .catch(error => {
            // Handle any errors and log them
            console.error('Fetch error:', error);

            // Display an error message in the Projects section
            const projectSection = document.getElementById('projects');
            projectSection.innerHTML = `<p>Could not fetch repositories: ${error.message}</p>`;
        });
});
