function getRandomPosition(element) {
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offsetX = elementRect.width / 2;
    var offsetY = elementRect.height / 2;
    var posX = Math.floor(Math.random() * (bodyRect.width - elementRect.width)) + offsetX;
    var posY = Math.floor(Math.random() * (bodyRect.height - elementRect.height)) + offsetY;
    return { x: posX, y: posY };
}

function moveButton() {
    var buttonNo = document.getElementById('button-no');
    var newPosition = getRandomPosition(buttonNo);
    buttonNo.style.left = newPosition.x + 'px';
    buttonNo.style.top = newPosition.y + 'px';
}

function disableButton(event) {
    event.preventDefault();
    event.stopPropagation();
    var buttonNo = document.getElementById('button-no');
    buttonNo.disabled = true;
    buttonNo.removeEventListener('mouseover', moveButton);
}

function congratulate() {
    var textContainer = document.getElementById('text-container');
    var buttonContainer = document.getElementById('button-container');
    textContainer.innerHTML = "<div class='text'>Uhuuuul, combinado então! <br>Dia 23/04 as 20h, o local você escolhe e me avisa. Até mais 🥰</div>";
    buttonContainer.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    var buttonNo = document.getElementById('button-no');
    buttonNo.addEventListener('mouseover', moveButton);
    buttonNo.addEventListener('click', disableButton);

    var buttonYes = document.getElementById('button-yes');
    buttonYes.addEventListener('click', congratulate);
});