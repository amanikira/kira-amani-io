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

//Skills
// Step 1:  List your skills by creating an Array of String values and store it in a variable named skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"]

// Step 2:  Create a variable named skillsSection and use "DOM Selection" to select the skills section by id 
const skillsSection = document.getElementById('skills-section');
// Step 3:  Create a variable named skillsList and use "DOM Selection" to query the skillsSection (instead of the entire document) to select the <ul> element you created earlier in this assignment
const skillsList = skillsSection.querySelector('ul')

// Step 4: Create a for loop to iterate over your skills Array
for (let i = 0; i < skills.length; i++) {
    // Create a variable named skill to create a new list item (li) element
    const skill = document.createElement('li');

    // Use the skill variable to set the inner text of the li element to the current array element
    skill.innerText = skills[i];

    // Append the skill (li) element to the skillsList (ul)

    skillsList.appendChild(skill);
}




