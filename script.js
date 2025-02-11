




function leftMove() {
    
    const carrousel = document.querySelector(".carrousel");
    const cellules = document.querySelectorAll(".cellule");
    
    cellules[0].classList.add('slide-right');
    cellules[1].classList.add('slide-right');
     
    setTimeout(() => {
        cellules[0].classList.remove('slide-right');
        cellules[1].classList.remove('slide-right');
    }, 500);
    
    carrousel.insertBefore(cellules[4], carrousel.firstChild);
   

}

function rightMove() {

    const carrousel = document.querySelector(".carrousel");
    const cellules = document.querySelectorAll(".cellule");

    cellules[1].classList.add('slide-left');
    cellules[2].classList.add('slide-left');

    setTimeout(() => {
        carrousel.appendChild(cellules[0]);
        cellules[1].classList.remove('slide-left');
        cellules[2].classList.remove('slide-left');
    }, 500);

}
