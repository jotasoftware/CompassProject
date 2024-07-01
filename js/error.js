let imgEmotion = document.getElementById('image-emotion');
let indexEmotion = 0;

imgEmotion.addEventListener('click', () => {
    let emotions = [
        ['./img/emotions/error-image-anxious.png', 'Anxious Emotion Image', 'anxious'],
        ['./img/emotions/error-image-sad.png', 'Sad Emotion Image', 'sad'],
        ['./img/emotions/error-image-angry.png', 'Angry Emotion Image', 'angry']
    ];
    
    indexEmotion = randomNum(indexEmotion);
    imgEmotion.src = emotions[indexEmotion][0];
    imgEmotion.alt = emotions[indexEmotion][1];

    changeTitle(emotions[indexEmotion][2]);
});

function randomNum(currentIndex) {
    let n = Math.floor(Math.random() * 3);
    if (n !== currentIndex) return n;
    return randomNum(currentIndex);
}

function changeTitle(emotion){
    let errorTitle = document.querySelector('.introduction-error-title');
    let indexSpace = errorTitle.innerText.lastIndexOf(' ');

    errorTitle.innerText = errorTitle.innerText.substring(0, (indexSpace + 1)) + emotion + '.';
};