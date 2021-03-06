//Build projects dictionary containing project titles, images and descriptions
const projects = {
    'Alpha Return': {
        'image':'images/alphareturnbacking2.jpg', 
        'title': '', 
        'subtitle':'A cross-platform, finance application to help investors see if they are beating the market; achieving \'Alpha Return\'.',
        'tech':['Flutter', 'Dart', 'Python', 'GCP', 'Node.js'],
        'project_link':'https://github.com/andrew-d-gordon/alpha-return',
        'link_icon':'github'},
    'GoGuard': {
        'image':'images/meshnetwork.jpg', 
        'title': 'images/titles/GOGUARD_TITLE.png', 
        'subtitle':'A sponsored project by Cisco which creates a mesh network for services that encrypts and dynamically routes communication.',
        'tech':['WireGuard', 'Consul', 'Redis', 'Golang', 'BGP'],
        'project_link':'https://csspp.soe.ucsc.edu/2021cisco',
        'link_icon':'globe'},
    'Delish Restaurant Finder': {
        'image':'images/delish_food_finder.png', 
        'title': 'images/titles/DELISH_TITLE.png', 
        'subtitle':'A crowdsourced food finding web app aiming to help you find the best ethnic food in your area.',
        'tech':['GCP', 'Google Maps API', 'JavaScript', 'Python', 'Google Firestore'],
        'project_link':'https://github.com/cyruskarsan/Delish-Food',
        'link_icon':'github'}, // font awesome icon to be utilized for additional info link
    'Poly NS Tuner': {
        'image':'images/port1.jpg', 
        'title': 'images/titles/POLYNSTUNER_TITLE.png', 
        'subtitle':'Polyphonic Pitch Detection, Scale Detection and Pitch Tracking Tools for audio with Python.',
        'tech':['Python', 'Librosa', 'NumPy', 'DSP', 'Fourier Transforms'],
        'project_link':'https://github.com/andrew-d-gordon/Poly-NS-Tuner',
        'link_icon':'github'},
    'Line Find': {
        'image':'images/linefind.jpg', 
        'title': 'images/titles/LINEFIND_TITLE.png', 
        'subtitle':'A math library in Python created for finding unique sets of lines passing through N amount of 2D Points.',
        'tech':['Python', 'OOP', 'Unittest', 'IO', 'DFS'],
        'project_link':'https://github.com/andrew-d-gordon/Line-Find',
        'link_icon':'github'},
    'Threaded HTTP Server and Load Balancer': {
        'image':'images/port4.jpg', 'title': 
        'images/titles/MTHTTPSERVER_TITLE.png', 
        'subtitle':'Multi-threaded HTTP Server and Load Balancer in C which can handle GET, PUT, HEAD and Health Check requests.',
        'tech':['Objective-C', 'Posix Threads', 'Sockets', 'HTTP', 'Unix'],
        'project_link':'https://github.com/andrew-d-gordon/portfolio/tree/master/HTTP_Server_Load_Balancer',
        'link_icon':'github'},
}

function generateProjectTiles() {
    const project_titles = Object.keys(projects);
    const portfolio_items_wrapper = document.getElementById("items-wrapper");

    for (const project_title of project_titles) {
        //Build background content of tile: portfolio-img-background
        let portfolio_tile = document.createElement("div");
        portfolio_tile.className = "portfolio-item-wrapper";
        let portfolio_tile_img = document.createElement("div");
        portfolio_tile_img.className = "portfolio-img-background";
        let image_url_string = `url(${projects[project_title]['image']})`;
        portfolio_tile_img.style.backgroundImage = image_url_string;
        portfolio_tile.appendChild(portfolio_tile_img);

        //Building internal content of tile: logo-wrapper and subtitle
        let portfolio_tile_content = document.createElement("div");
        portfolio_tile_content.className = "img-text-wrapper";
        //Portfolio Tile Logo
        let portfolio_tile_logo_wrapper = document.createElement("div");
        portfolio_tile_logo_wrapper.className = "logo-wrapper";
        /*// If you want to use a logo image instead of default text box. 
        //Replace 'title' with image path in projects dict.
        let portfolio_tile_logo_title = document.createElement("img");
        portfolio_tile_logo_title.src = projects[project_title]['title'];*/
        let portfolio_tile_logo_title = document.createElement("button");
        portfolio_tile_logo_title.className = "logo-wrapper-button";
        portfolio_tile_logo_title.innerHTML = project_title;
        portfolio_tile_logo_wrapper.appendChild(portfolio_tile_logo_title);
        portfolio_tile_content.appendChild(portfolio_tile_logo_wrapper);

        //Portfolio Tile Subtitle
        let portfolio_tile_subtitle = document.createElement("div");
        portfolio_tile_subtitle.className = "subtitle";
        //Set necessary text attributes (projects may or may not have a repo link)
        let project_d = projects[project_title];
        project_d = [project_d['subtitle'], project_d['tech'], project_d['project_link'], project_d['link_icon']]; // Tuple to hold project vals
        portfolio_tile_subtitle.innerHTML = project_d[0]+'</br></br><u>Tech:</u> '+
                                            project_d[1].join(', ')+'</br></br>'+
                                            `<a href=${project_d[2]}><i class="fa fa-${project_d[3]}"></i></a>`;
        portfolio_tile_content.appendChild(portfolio_tile_subtitle);
        
        portfolio_tile.appendChild(portfolio_tile_content);
        portfolio_items_wrapper.appendChild(portfolio_tile);
    }

    //After tiles have been generated, set dynamic shading
    addDynamicTileShading();
}

function addDynamicTileShading() {
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            /* now taking the html object of portfolio item and using javascript to manipulate it, childNodes has all of domtoken items for div */
            portfolioItem.childNodes[0].classList.add('img-darken');
            portfolioItem.childNodes[1].childNodes[0].childNodes[0].classList.add('logo-wrapper-darken');
        })

        portfolioItem.addEventListener('mouseout', () => {
            /* removes img-darken class from css */
            portfolioItem.childNodes[0].classList.remove('img-darken');
            portfolioItem.childNodes[1].childNodes[0].childNodes[0].classList.remove('logo-wrapper-darken');
        })
    })
}

// Wait for dom content to load then call generateProjectTiles to create home page content
document.addEventListener("DOMContentLoaded", function(event) {
    generateProjectTiles();
    addTileModals();
})

//Example div to sit in portfolio-items-wrapper div, type generated by generateProjectTiles
/*
<div class="portfolio-item-wrapper">
    <div class="portfolio-img-background" style="background-image:url(images/port1.jpg)"></div>

    <div class="img-text-wrapper">
        <div class="logo-wrapper">
            <!--<img src="images/logos/treblelogo.png">-->
        </div>

        <div class="subtitle">
            Stylistic Music Generation via Convolutional Neural Network Machine Learning
        </div>
    </div>
</div>
*/


