   document.addEventListener('DOMContentLoaded', () => {
            const wishButton = document.getElementById('wish-button');
            const diwaliMessage = document.getElementById('diwali-message');
            const diyaLeft = document.getElementById('diya-left');
            const diyaRight = document.getElementById('diya-right');

            const wishMessages = [
                "✨ Wishing you a Diwali that brightens every corner of your life! Shubh Deepavali!",
                "🪔 May the glow of the diyas illuminate your path to success. Happy Diwali!",
                "💰 May Goddess Lakshmi bless you with wealth and prosperity this year. Saal Mubarak!",
                "🧨 Firecrackers of joy, lights of happiness, and sweets of love! Happy Diwali!",
                "🙏 May your life be filled with happiness and cheer. Have a safe and happy Diwali!"
            ];

            // Function to generate a random wish
            function generateWish() {
                const randomIndex = Math.floor(Math.random() * wishMessages.length);
                diwaliMessage.textContent = wishMessages[randomIndex];
            }

            // Function to add a visual sparkle effect
            function sparkleEffect(e) {
                const sparkle = document.createElement('span');
                sparkle.textContent = '🌟';
                sparkle.style.position = 'absolute';
                sparkle.style.left = `${e.clientX}px`;
                sparkle.style.top = `${e.clientY}px`;
                sparkle.style.fontSize = `${Math.random() * 1.5 + 0.8}em`; /* Adjusted sparkle size for mobile */
                sparkle.style.pointerEvents = 'none';
                sparkle.style.animation = 'fadeAndMove 1s forwards';
                document.body.appendChild(sparkle);

                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }
            
            // Add keyframe to document for dynamic element animation
            const styleSheet = document.createElement('style');
            styleSheet.innerHTML = `
                @keyframes fadeAndMove {
                    0% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(-50px) scale(0.5); }
                }
            `;
            document.head.appendChild(styleSheet);


            // Event Listeners for click/tap
            wishButton.addEventListener('click', (e) => {
                generateWish();
                // Add sparkle effect near the button when clicked/tapped
                const rect = wishButton.getBoundingClientRect();
                sparkleEffect({ clientX: rect.left + rect.width / 2, clientY: rect.top - 10 });
            });

            diyaLeft.addEventListener('click', sparkleEffect);
            diyaLeft.addEventListener('click', generateWish);

            diyaRight.addEventListener('click', sparkleEffect);
            diyaRight.addEventListener('click', generateWish);
        });