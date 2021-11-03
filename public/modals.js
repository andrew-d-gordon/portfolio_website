var project_details = { // Holds more detailed summary regarding projects.
    'Delish Food Finder': {
        'summary': 'Delish info.',
        'media': ['images/delish_food_finder.png'], //'images/delish_food_finder2.png'
        'tech': ['images/logos/tech/javascript_icon.png','images/logos/tech/gcp_cloud.png','images/logos/tech/firebase_icon.png','images/logos/tech/firestore_icon.svg'],
    },
    'GoGuard': {
        'summary': 'GoGuard offers a solution: a managed network, where all services are treated exactly the same, with the encryption and proxying handled innately. It helps backend network engineers by making management and scalability of enterprise networks easy.',
        'media': ['images/goguard_poster.jpg'],
        'tech': ['images/logos/tech/wireguard_icon.png', 'images/logos/tech/gobgp_icon.png', 'images/logos/tech/consul_icon.png', 'images/logos/tech/golang_icon.png'],
    },
    'Poly NS Tuner': {
        'summary': 'Poly NS Tuner info.',
        'media': [''],
        'tech': ['images/logos/tech/python_icon.png', 'images/logos/tech/numpy_icon.png', 'images/logos/tech/librosa_icon.png', 'images/logos/tech/fourier.png'],
    },
    'Threaded HTTP Server and Load Balancer': {
        'summary': 'HTTP Server and Load Balancer info.',
        'media': [''],
        'tech': ['images/logos/tech/c_icon.png', 'images/logos/tech/http_icon.png', 'images/logos/tech/unix.png'],
    },
    'Line Find': {
        'summary': 'Line Find info.',
        'media': ['images/linefind_test_output.png'], //'images/linefind_test_output_strict.png'
        'tech': ['images/logos/tech/python_icon.png', 'images/logos/tech/dfs_icon.png', 'images/logos/tech/unittest_icon.png'],
    },
    'Image Web Scraper and Icon Generator': {
        'summary': 'Image Web Scraper and Icon Generator info.',
        'media': [''],
        'tech': ['images/logos/tech/python_icon.png', 'images/logos/tech/selenium_icon.jpg', 'images/logos/tech/pillow_icon.png', 'images/logos/tech/http_icon.png'],
    },
};


// Add specific project information for Modal Tile
function addTileContent(project) {
    // Modal Related Divs
    const modal_title = document.querySelector('.modal-title');
    const modal_images = document.querySelector('.modal-content-images');
    const modal_text = document.querySelector('.modal-content-text');
    const modal_tech = document.querySelector('.modal-content-tech');

    modal_title.innerHTML = project; // Add project title
    modal_text.innerHTML = project_details[project]['summary']; // Add project summary

    // Add project media
    let media = project_details[project]['media'];
    for (i in media) {
        let image = document.createElement("img");
        image.src = media[i];
        modal_images.appendChild(image);
    }

    // Add project tech logos
    let tech_logos = project_details[project]['tech'];
    let tech_container = document.createElement("div");
    tech_container.className="modal-content-tech";
    for (i in tech_logos) {
        let tech_logo = document.createElement("div");
        tech_logo.className = "tech-logos";
        let modal_tech_logo = document.createElement('img');
        modal_tech_logo.src = tech_logos[i];

        tech_logo.appendChild(modal_tech_logo);
        //tech_container.appendChild(modal_tech_logo);
        modal_tech.appendChild(tech_logo);
    }
}

// Example tech div:    <div class="tech-logos"><img src="images/logos/tech/javascript_icon.png"></div>
/* Example image div:   <div class="modal-content-images">
                            <img src="images/delish_food_finder.png">
                            <img src="images/delish_food_finder2.png">
                        </div> */

// Adds modals for portfolio tiles to view more project information
function addTileModals() {
    const modalTriggerButtons = document.querySelectorAll(".logo-wrapper-button");
    const modal = document.querySelector(".modal");
    const modalCloseButton = document.querySelector(".modal-close");
    const modal_images = document.querySelector('.modal-content-images');
    const modal_tech = document.querySelector('.modal-content-tech');
    
    /* Portfolio Tile Modal button logic */
    modalTriggerButtons.forEach(modalTriggerButton => {
        modalTriggerButton.addEventListener("click", event=> {
            // Set modal content
            let project_title = modalTriggerButton.firstChild.nodeValue;
            addTileContent(project_title);
            // Change display to visible
            toggleModal();
        })
    })

    modalCloseButton.addEventListener("click", event => {
        toggleModal();
    })

    modal.addEventListener("click", event => { // If modal (back shadow) is clicked, close.
        if(event.currentTarget===event.target) toggleModal();
    })

    function toggleModal() {
        if(getComputedStyle(modal).display=="flex") {
            modal.classList.add("modal-hide");
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove("modal-show", "modal-hide");
                document.body.style.overflow = "initial";
                modal_images.innerHTML = null; // Reset modal images
                modal_tech.innerHTML = null; // Reset tech logos
            }, 200);
        } else {
            modal.style.display = "flex";
            modal.classList.add("modal-show");
            document.body.style.overflow = "hidden";
        }
    }
}
