var project_details = { // Holds more detailed summary regarding projects.
    'Delish Food Finder': {
        'summary': 'Delish Food Finder is a Full Stack Web Application powered by Google Cloud Platform and Google Maps/Places API. The backend is written with Firebase functions via Node.js and it has the capability to cache API calls, store user vote information in the NoSQL DB Google Firestore.</br></br>Restaurants found for a given cuisine with crowdsourced votes will appear larger or smaller depending on the general user sentiment.</br></br>',
        'media': ['images/delish_food_finder_raw.png'], //'images/delish_food_finder2.png'
        'tech': ['images/logos/tech/javascript_icon.png','images/logos/tech/gcp_cloud.png','images/logos/tech/firebase_icon.png','images/logos/tech/firestore_icon.svg'],
        'project_link':'https://github.com/cyruskarsan/Delish-Food',
        'link_icon':'github'
    },
    'GoGuard': {
        'summary': 'GoGuard offers a solution: a managed network, where all services are treated exactly the same, with the encryption and proxying handled innately. It helps backend network engineers by making management and scalability of enterprise networks easy.</br></br>',
        'media': ['images/goguard_poster.jpg'],
        'tech': ['images/logos/tech/wireguard_icon.png', 'images/logos/tech/gobgp_icon.png', 'images/logos/tech/consul_icon.png', 'images/logos/tech/golang_icon.png'],
        'project_link':'https://csspp.soe.ucsc.edu/2021cisco',
        'link_icon':'globe'
    },
    'Poly NS Tuner': {
        'summary': 'The Poly NS Tuner library provides the ability to parse audio (.wav) files for polyphonic pitch information, scale detection, and pitch tracked MIDI file generation within Python.</br></br>The project utilizes Librosa, NumPy, and Fourier transforms for the DSP and pitch weighting algorithms as well as prettymidi for MIDI file generation. Python output provides a guess as to the scale of the provided wav file as well.</br></br>',
        'media': ['images/piano_chords_melody_Cm_vanilla_sample.png', 'images/piano_chords_melody_Cm_vanilla_midi_guess.png', 'images/piano_single_short_C2_vanilla_sample.png', 'images/piano_single_short_C2_vanilla_midi_guess.png'],
        'tech': ['images/logos/tech/python_icon.png', 'images/logos/tech/numpy_icon.png', 'images/logos/tech/librosa_icon.png', 'images/logos/tech/fourier.png'],
        'project_link':'https://github.com/andrew-d-gordon/Poly-NS-Tuner',
        'link_icon':'github'
    },
    'Threaded HTTP Server and Load Balancer': {
        'summary': 'This project contains an HTTP Server utilizing multithreading and a Load Balancer, each written in C. The library used for retrieving requests to the servers is socket and the library for multithreading is pthread. Various flags can be set to specify the number of threads, desired port number and logging option for the HTTP Server, and server addresses must be passed for the Load Balancer.</br></br>',
        'media': [''],
        'tech': ['images/logos/tech/c_icon.png', 'images/logos/tech/http_icon.png', 'images/logos/tech/unix.png', 'images/logos/tech/multithreading.png'],
        'project_link':'https://github.com/andrew-d-gordon/portfolio/tree/master/HTTP_Server_Load_Balancer',
        'link_icon':'github'
    },
    'Line Find': {
        'summary': 'This project serves as a library of code for finding lines that cross through a specified number of unique points from a set of 2D points. The generation of variably sized and random sets of input points is viable through the point_test_creator.py module. Driver code within find_lines.py utilizes it\'s own functions and other modules within src in order to achieve the discovery of lines in O(n*n) time.</br></br>Two definitions of uniqueness are present from the first to second image, the functions to achieve each are finding_unique_lines() and finding_max_unique_point_lines() respectively. The number of points threshold can be set as well, e.g. the third and fourth image are run on the same sets of points but utilize a point threshold of 3 and 4 respectively. More information on available functions, objects, as well as the line finding algorithms can be found in the docs folder.</br></br>',
        'media': ['images/linefind_test_output.png', 'images/linefind_test_output_strict.png', 'images/unique_set_test_1000_random_1000_graph.png', 'images/unique_set_test_1000_random_1000_4_thresh_graph.png'], //'images/linefind_test_output_strict.png'
        'tech': ['images/logos/tech/python_icon.png', 'images/logos/tech/dfs_icon.png', 'images/logos/tech/unittest_icon.png', 'images/logos/tech/matplot.png'],
        'project_link':'https://github.com/andrew-d-gordon/Line-Find',
        'link_icon':'github'
    },
    'Alpha Return': {
        'summary': 'A cross-platform finance application prototyped in Python and realized in Flutter. Stock data is retrieved through the Yahoo Finance API and calls are cached on GCP via Firebase functions developed with Node.js.</br></br>It serves to help investors find out whether or not they are making alpha return on investments against various market indices (S&P500, Dow Jones, NASDAQ) or cryptocurrencies such as Bitcoin.</br></br>Alpha Return refers to excess returns earned on an investment above the benchmark return. For example, the annual return on an investment in Bitcoin against the S&P500 as a benchmark from January through November of 2021, was respectively about 70 and 27 percent annual return. This would result in a 53% alpha return on said investment (with Annual Return as the metric).</br></br>',
        'media': ['images/nexus_demo_beta.png', 'images/nexus_demo_beta_alpha_return.png'],
        'tech': ['images/logos/tech/flutter.png','images/logos/tech/dart.png','images/logos/tech/gcp_cloud.png','images/logos/tech/firebase_icon.png'],
        'project_link':'https://github.com/andrew-d-gordon/alpha-return',
        'link_icon':'github'
    }
};


// Add specific project information for Modal Tile
function addTileContent(project) {
    // Modal Related Divs
    const modal_title = document.querySelector('.modal-title');
    const modal_text = document.querySelector('.modal-content-text');
    const modal_tech = document.querySelector('.modal-content-tech');
    console.log(project, `media length: ${project_details[project]['media'].length}`);
    let single_img = project_details[project]['media'].length == 1;
    
    const modal_images = single_img ? // If using single image, utilize single image div
    document.querySelector('.modal-content-images-solo') :
    document.querySelector('.modal-content-images');

    modal_title.innerHTML = project+'</br>'+
        `<a href=${project_details[project]['project_link']} target="_blank" rel="noopener noreferrer"><span style="color: Black;"><i class="fa fa-${project_details[project]['link_icon']}"></i></span></a>`; // Add project title
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
    const modal_images_solo = document.querySelector('.modal-content-images-solo');
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
                modal_images_solo.innerHTML = null;
                modal_tech.innerHTML = null; // Reset tech logos
            }, 200);
        } else {
            modal.style.display = "flex";
            modal.classList.add("modal-show");
            document.body.style.overflow = "hidden";
        }
    }
}
