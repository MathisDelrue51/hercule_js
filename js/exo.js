console.log('test 1...2...1...2');

const hercule ={
    name :'Hercule',
    job: 'Demi-dieu',
    age: 35,
    departement: 75,
    arm: 60.5,
    inRelationship: true,
};

const friends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];


base.fillProfil(hercule);

base.printFriends(friends);

base.setBestFriend(friends[0]);


const title = document.createElement('h1');
title.className= 'banner_title';
title.textContent= 'Vous consultez le profil de Hercule';
const header = document.getElementById('header-banner');
header.appendChild(title);
