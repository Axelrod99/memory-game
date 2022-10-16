document.addEventListener('DOMContentLoaded', () => {
    const cardlist = [
        {
            'name': 'lamborghini_aventador',
            'image': 'images/lamborghini_aventador.png'
        },
        {
            'name': 'lamborghini_aventador',
            'image': 'images/lamborghini_aventador.png'
        },
        {
            'name': 'lamborghini',
            'image': 'images/lamborghini.png'
        },
        {
            'name': 'lamborghini',
            'image': 'images/lamborghini.png'
        },
        {
            'name': 'mclaren',
            'image': 'images/mclaren.png'
        },
        {
            'name': 'mclaren',
            'image': 'images/mclaren.png'
        },
        {
            'name': 'motocross1',
            'image': 'images/motocross1.png'
        },
        {
            'name': 'motocross1',
            'image': 'images/motocross1.png'
        },
        {
            'name': 'motocross2',
            'image': 'images/motocross2.png'
        },
        {
            'name': 'motocross2',
            'image': 'images/motocross2.png'
        },
        {
            'name': 'motocross3',
            'image': 'images/motocross3.png'
        },
        {
            'name': 'motocross3',
            'image': 'images/motocross3.png'
        },
    ]
    
    cardlist.sort(() => 0.5 - Math.random());
    const grid = document.getElementById('grid');
    const attemptsHolder = document.getElementById('attemptsHolder');
    const foundHolder =  document.getElementById('foundHolder');
    const cardingame = 6;

    let btn = document.createElement('button');
    btn.innerHTML = 'Reset'
    document.getElementById('batn').appendChild(btn)

    var attempts = 0;
    var foundcards = 0;
    
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundcards;

    var chosencards = [];
    var chosencardsIds = [];

    function gameboard () {
        for(var i=0;i < cardlist.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/uefa.png');
            card.setAttribute('data-id', i);
            grid.appendChild(card);
            card.addEventListener('click',flipcard)
        }
    }


    function flipcard() {  
        if (chosencards.length != 2) {
            var cardid = this.getAttribute('data-id');
            if (this.getAttribute('src') == 'images/uefa.png'){
                chosencards.push(cardlist[cardid].name);
                chosencardsIds.push(cardid);
                this.setAttribute('src', cardlist[cardid].image);
                if (chosencards.length == 2){
                    setTimeout(checkForMatch, 400);
                }
            }
        }   
    }

    function checkForMatch() {
        attempts++
        var cards = document.querySelectorAll('img')
        var firstcard = chosencardsIds[0];
        var secondcard = chosencardsIds[1];
        if(chosencards[0] == chosencards[1]){
            foundcards++
            cards[firstcard].setAttribute('src','images/mass_effect.png');
            cards[secondcard].setAttribute('src','images/mass_effect.png');
        } else{
            cards[firstcard].setAttribute('src','images/uefa.png');
            cards[secondcard].setAttribute('src','images/uefa.png');
        }
        chosencards = [];
        chosencardsIds = [];
        attemptsHolder.textContent = attempts;
        foundHolder.textContent = foundcards;


        if (foundcards == cardingame){
            alert('welldone')
        }

        btn.onclick = function() {
            window.setTimeout(function (){
                document.location.reload(true);
            }, 400);
        }
    }

    gameboard()
})






