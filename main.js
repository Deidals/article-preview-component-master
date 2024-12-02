const button = document.querySelector(`button`);
const footer = document.querySelector(`.interactive`);
const buttonColor = document.querySelector(`#share`);
const identity = document.querySelectorAll(`.identity`);
const socialMedia = document.querySelectorAll(`.socialMedia`); // Change this to querySelectorAll

socialMedia.forEach(item => {
    item.style.display = `none`; // Initially hide all socialMedia items
});

let isActive = false;

button.addEventListener(`click`, function () {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1000 && isActive === false) {
        footer.style.backgroundColor = `hsl(217, 19%, 35%)`;
        button.style.backgroundColor = `hsl(214, 17%, 51%)`;
        buttonColor.style.fill = `white`;

        identity.forEach(item => {
            item.style.display = `none`;
        });

        socialMedia.forEach(item => {
            item.style.display = `block`; // Hide social media icons
        });

        isActive = true;
    } else if (screenWidth < 1000 && isActive === true) {
        footer.style.backgroundColor = `inherit`;
        button.style.backgroundColor = `hsl(210, 46%, 95%)`;
        buttonColor.style.fill = `#6E8098`;

        identity.forEach(item => {
            item.style.display = `block`; // Show identity
        });

        socialMedia.forEach(item => {
            item.style.display = `none`; // Show social media icons
        });

        isActive = false;
    }
});
