const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

fetch(requestURL).then(response => response.json()).then(json => {
    const superHeroes = json
    populateHeader(superHeroes)
    showHeroes(superHeroes)
})

const populateHeader = (obj) => {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName
    header.appendChild(myH1)

    const myPara = document.createElement('p');
    myPara.textContent = `
Hometown: ${obj.homeTown}
Formed: ${obj.formed}
`
    header.appendChild(myPara)
};

const showHeroes = (obj) => {
    const heroes = obj.members;

    heroes.map(h => {

        const Superpowers = h.powers

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        const listItem = document.createElement('li');

        myH2.textContent = h.name;
        myPara1.textContent = 'Secret identity: ' + h.secretIdentity;
        myPara2.textContent = 'Age: ' + h.age;
        myPara3.textContent = 'Superpowers:';
        listItem.textContent = `${Superpowers.join(", ")}`

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        myList.appendChild(listItem);
        section.appendChild(myArticle);

    })

};