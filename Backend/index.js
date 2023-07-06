const reponse = await fetch("http://localhost:5678/api/works/");
const allWorks = await reponse.json();
console.log(allWorks);

function afficherWorks(allWorks){

    for (let i=0; i < allWorks.length; i++) { 
        const figure = allWorks[i];
        const sectionFigure = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;
        const nomElement = document.createElement("p");
        nomElement.innerText = figure.title;
        
        
        
        const sectiongallery = document.querySelector(".gallery");
        sectiongallery.appendChild(sectionFigure);
        sectionFigure.appendChild(imageElement);
        sectionFigure.appendChild(nomElement);
    }
}
 
afficherWorks(allWorks);

const bouton = document.querySelector(".bar_tous");
bouton.addEventListener("click", function () { const figureFiltre = allWorks.filter(function(work){ 
    return work;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(figureFiltre);
console.log (figureFiltre);
});

const boutonObjet = document.querySelector(".bar_objets");
boutonObjet.addEventListener("click", function () { const objetsFiltrees = allWorks.filter(function(work){ 
    return work.categoryId===1;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(objetsFiltrees);
console.log (objetsFiltrees);
});

const boutonAppart = document.querySelector(".bar_appartement");
boutonAppart.addEventListener("click", function () { const appartementsFiltrees = allWorks.filter(function(work){ 
    return work.categoryId===2;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(appartementsFiltrees);
console.log (appartementsFiltrees);
});

const boutonHotel = document.querySelector(".bar_hotel");
boutonHotel.addEventListener("click", function () { const HotelsFiltrees = allWorks.filter(function(work){ 
    return work.categoryId===3;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(HotelsFiltrees);
console.log (HotelsFiltrees);
});

// modal gallérie photo
const openModal =  document.querySelector('.modifier');
const modal = document.querySelector("#myModal")
openModal.addEventListener("click", function(){
    modal.style.display = "block"
});
const closeModal =  document.querySelector('.close');
closeModal.addEventListener('click', function(){
    modal.style.display = "none";
})
for (let i=0; i < allWorks.length; i++) { 
    const figure = allWorks[i];
    const sectionFigure = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.src = figure.imageUrl;
    const nomElement = document.createElement("p");
    nomElement.innerText = "éditer";
    const supprimer =  document.createElement("i");
    supprimer.classList.add("fa-solid" , "fa-trash-can");
    
    
    const sectiongallery = document.querySelector(".content");
    sectiongallery.appendChild(sectionFigure);
    sectionFigure.appendChild(imageElement);
    sectionFigure.appendChild(nomElement);
    sectionFigure.appendChild(supprimer);
}


// modal pour ajouter photo

const openAjout = document.querySelector('#ajouter');
const modale = document.querySelector('.modal-ajout')
const modal1 = document.querySelector(".modal-content")
openAjout.addEventListener('click', function(){
    modale.style.display = 'block'
    modal1.style.display = "none"
});

const closeAjout = document.querySelector(".close-ajout");
closeAjout.addEventListener('click', function(){
    modale.style.display = 'none';
})

// modal de la fleche de retour à la page gallerie photo
const retourModal = document.querySelector("#retour");
const retour = document.querySelector('.modal-content')
const closemyModal = document.querySelector('#myAjout')
retourModal.addEventListener("click", function(){
    closemyModal.style.display = "none"
    retour.style.display = 'block'
});

// modal de la fleche X pour acceder à la page de gallerie modal
const fermerModal = document.querySelector(".close-ajout");
const gallerieModal = document.querySelector('.modal-content')
fermerModal.addEventListener("click", function() {
    gallerieModal.style.display = "block"
    fermerModal.style.display = 'none'
});

// initialisation de la fonction ajout photo
const myFileInput = document.getElementById('profile_pic');
const message = document.getElementById('input-file');

// appel de la fonction intialisée 
message.onchange = function () {
    myFileInput.src = URL.createObjectURL(message
        .files[0]);
}


const UserRecuperation = window.localStorage.getItem("user")
const TokenRecuper = window.localStorage.getItem("token")

if (UserRecuperation && TokenRecuper){
    const UserModifier = document.querySelector("#loginuser");
    UserModifier.addEventListener('click', function(){
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
    })
    
    UserModifier.innerText = "Log out";
    const HiddenBan = document.querySelector("#baniere");
    HiddenBan.style.display = "block";
}