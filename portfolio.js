gsap.registerPlugin(ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.from(".hero-title", { 
        duration: 1, 
        y: -50, 
        opacity: 0, 
        ease: "power3.out" 
    });

    gsap.from(".cta-button", {
        duration: 1.2,
        scale: 0,
        opacity: 0,
        delay: 0.3,
        ease: "elastic.out(1, 0.3)"
    });

    gsap.utils.toArray("section").forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            y: 100,
            opacity: 0,
            ease: "power3.out",
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        // GSAP Animation for service cards
        gsap.from(".service-card", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.2 // Adds a delay between each card animation
        });
    });
    
    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll(".nav-links a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 70
                    },
                    ease: "power2.out"
                });
            }
        });
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImg.src = imageSrc;
}



function openVModal(videoSrc) {
    const modal = document.getElementById("image-modal");
    const modalContent = document.getElementById("modal-image");

    modal.style.display = "block";  // Show the modal
    modalContent.innerHTML = "";   // Clear existing content

    // Create a video element
    const videoElement = document.createElement("video");
    videoElement.src = videoSrc;
    videoElement.controls = true;  // Add controls for play, pause, etc.
    videoElement.autoplay = true;  // Automatically start playing the video
    videoElement.style.width = "100%";  // Set the video width
    videoElement.style.borderRadius = "8px";  // Optional styling

    // Append the video element to the modal content
    modalContent.appendChild(videoElement);
}





function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}






// cards
let cards = document.querySelectorAll(".card");
  
        let stackArea = document.querySelector(".stack-area");
  
        function rotateCards() {
          let angle = 0;
          cards.forEach((card, index) => {
            if (card.classList.contains("away")) {
              card.style.transform = `translateY(-120vh) rotate(-48deg)`;
            } else {
              card.style.transform = ` rotate(${angle}deg)`;
              angle = angle - 10;
              card.style.zIndex = cards.length - index;
            }
          });
        }
  
        rotateCards();
  
        window.addEventListener("scroll", () => {
          let distance = window.innerHeight * 0.5;
  
          let topVal = stackArea.getBoundingClientRect().top;
  
          let index = -1 * (topVal / distance + 1);
  
          index = Math.floor(index);
  
          for (i = 0; i < cards.length; i++) {
            if (i <= index) {
              cards[i].classList.add("away");
            } else {
              cards[i].classList.remove("away");
            }
          }
          rotateCards();
        });




