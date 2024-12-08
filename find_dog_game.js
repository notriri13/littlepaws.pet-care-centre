const findDogImages = [
    // Add paths to your images here
    '1m.jpeg',
    '2m.jpeg',
    '3m.jpeg',
    '4m.jpeg',
    '5m.jpeg',
    '6m.jpeg',
    '7m.jpeg',
    '8m.jpeg',
    '9m.jpeg',
    '10m.jpeg'
];

function startFindDogGame() {
    const imageElement = document.getElementById('find-dog-image');
    const resultElement = document.getElementById('find-dog-result');
    resultElement.innerHTML = '';
    
    let currentImageIndex = 0;
    imageElement.src = findDogImages[currentImageIndex];
    imageElement.style.display = 'block';

    imageElement.addEventListener('click', () => {
        currentImageIndex++;
        if (currentImageIndex < findDogImages.length) {
            imageElement.src = findDogImages[currentImageIndex];
        } else {
            imageElement.style.display = 'none';
            resultElement.innerHTML = '🎉 Congratulations! You found all the dogs! 🎉';
        }
    });
}
