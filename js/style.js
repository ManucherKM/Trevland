let noActive = document.querySelectorAll('.event');

noActive.forEach((element, index, mas)=>{
    element.addEventListener('click', () => {
        var mainCard = {
            img: element.children[0].src,
            title: element.children[1].children[0].innerHTML,
            text: element.children[1].children[1].innerHTML,
            e_mail: element.children[1].children[2].innerHTML
        };
        cangCard(mainCard)
        element.classList.add('.nature');
    });
})

function cangCard(element) {
    let Home = document.querySelector('.Main_home').children;
    Home[0].src = element.img;
    Home[1].innerHTML = element.title;
    Home[2].innerHTML = element.text;
    Home[3].innerHTML = element.e_mail;
    if (Home[3].textContent == '@thomasalva_adison') {
        console.log('true');
    } else {
        console.log('false');
    }
    // console.log(Home[3].textContent);
};


