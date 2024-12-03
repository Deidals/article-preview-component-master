const button = document.querySelector(`button`);
const footer = document.querySelector(`.interactive`);
const buttonColor = document.querySelector(`#share`);
const identity = document.querySelectorAll(`.identity`);
const socialMedia = document.querySelectorAll(`.socialMedia`);

const bubbleContainer = document.querySelector('.bubbleContainer');
const children = bubbleContainer.querySelectorAll(':not(:last-child)');

children.forEach(child => {
  child.style.display = 'none';
});

socialMedia.forEach(item => {
    item.style.display = `none`;
});

let isActive = false;

button.addEventListener(`click`, function () {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1000) {
        if(isActive === false){
            footer.style.backgroundColor = `hsl(217, 19%, 35%)`;
            button.style.backgroundColor = `hsl(214, 17%, 51%)`;
            buttonColor.style.fill = `white`;
    
            identity.forEach(item => {
                item.style.display = `none`;
            });
    
            socialMedia.forEach(item => {
                item.style.display = `block`;
            });
    
            isActive = true;
        } else if(isActive === true){
            footer.style.backgroundColor = `inherit`;
            button.style.backgroundColor = `hsl(210, 46%, 95%)`;
            buttonColor.style.fill = `#6E8098`;
    
            identity.forEach(item => {
                item.style.display = `block`;
            });
    
            socialMedia.forEach(item => {
                item.style.display = `none`;
            });
    
            isActive = false;
        }
    } else{
        if(isActive === false){
            button.style.backgroundColor = `hsl(214, 17%, 51%)`;
            buttonColor.style.fill = `white`;

            children.forEach(item => {
                item.style.display = `flex`;
            });
            isActive = true;
        }else{
            button.style.backgroundColor = `hsl(210, 46%, 95%)`;
            buttonColor.style.fill = `#6E8098`;

            children.forEach(item => {
                item.style.display = `none`;
            });
            isActive = false;
        }
    }
});
