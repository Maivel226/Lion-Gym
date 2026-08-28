
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-30px); }
        100% { transform: translateY(0); }
    }

    @keyframes sparkle {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
    }
`;
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    var videos = document.querySelectorAll('.video');

    cards.forEach(function(card, index) {
        if (index !== 0) {
            card.style.pointerEvents = 'none';
            card.style.opacity = '0.5';
        }
    });

    videos.forEach(function(video, index) {
        video.onended = function() {
            var nextCard = cards[index + 1];

            var checkmark = document.createElement('span');
            checkmark.textContent = '✔';
            checkmark.style.color = 'black';
            checkmark.style.fontSize = '24px';
            checkmark.style.marginLeft = '10px';
            cards[index].appendChild(checkmark);

            if (nextCard) {
                
                nextCard.style.pointerEvents = 'auto';
                nextCard.style.opacity = '1';
            } else {
               
                setTimeout(function() {
                    showCelebration();
                }, 500); 
            }
        };
    });

    function showCelebration() {
        
        alert("Congratulations! You've completed all the exercises for today! 🎉");

        
        const celebrationDiv = document.createElement('div');
        celebrationDiv.style.position = 'fixed';
        celebrationDiv.style.top = '0';
        celebrationDiv.style.left = '0';
        celebrationDiv.style.width = '100vw';
        celebrationDiv.style.height = '100vh';
        celebrationDiv.style.zIndex = '1000';
        celebrationDiv.style.pointerEvents = 'none';
        celebrationDiv.style.overflow = 'hidden';

       
        const emojis = ['🎆', '🎇', '🎉'];
        for (let i = 0; i < 50; i++) {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'absolute';
            emoji.style.fontSize = `${Math.random() * 2 + 1}rem`;
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.top = `${Math.random() * 100}vh`;
            emoji.style.color = 'gold';
            emoji.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite, sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`;
            celebrationDiv.appendChild(emoji);
        }

        document.body.appendChild(celebrationDiv);

        
        setTimeout(() => {
            celebrationDiv.remove();
        }, 5000); 
    }
});
