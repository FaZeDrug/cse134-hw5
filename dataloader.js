document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("load-local").addEventListener("click", loadLocalData);
    document.getElementById("load-remote").addEventListener("click", loadRemoteData);
});



// Sample data to store in localStorage
const sampleProjects = [
    {
        title: "TritonFitness App",
        image: "tflogo.webp",
        alt: "TritonFitness logo",
        description: "Worked in a team to develop a full-stack web-based app to encourage UCSD students to manage stress through fitness.",
        role: "Frontend Software Engineer",
        date: "Sep '24 - Dec '24",
        technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
        contributions: "Implemented application UI and API integration",
        bullets: [
            "Developed MERN stack application",
            "Created UI/UX design with React",
            "Integrated fitness-tracking features"
        ],
        link: "https://github.com/froguro/CSE110-TritonFitness.git"
    },
    {
        title: "Parental Concerns in Roblox - Early Research Scholars Program",
        image: "ersp_symp.png",
        alt: "Four students in front of research poster holding up completion awards",
        description: "Carried out an independent research project over the course of an academic year as part of the Early Research Scholars Program.",
        role: "Researcher, ML Engineer, Software Engineer",
        date: "Sep '23 - Sep '24",
        technologies: ["pyLDAvis", "Jupyter Notebook", "Git", "Unsupervised Machine Learning"],
        contributions: "Conducted data analysis and developed ML models",
        bullets: [
            "Investigated parental concerns in Roblox",
            "Analyzed gaming trends using machine learning",
            "Paper accepted to IEEE ISTAS 2024"
        ],
        link: "https://ieeexplore.ieee.org/author/797691860140640"
    },
    {
        title: "Travel Planner (ACM Project Teams)",
        image: "worldwide.jpg",
        alt: "Stock image of a plane going around the world",
        description: "Developed a travel planner website where users get personalized itinerary suggestions based on their destination.",
        role: "Frontend Software Engineer",
        date: "Apr '24 - Jun '24",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
        contributions: "Implemented interactive UI and API integration",
        bullets: [
            "Used Google Maps & Yelp APIs",
            "Designed and built frontend with React",
            "Worked on database integration with MongoDB"
        ],
        link: "https://github.com/FaZeDrug/hackschool-fa23"
    }
];


// Store sample data in localStorage
if (!localStorage.getItem("projects")) {
    console.log(JSON.stringify(sampleProjects)) 
    localStorage.setItem("projects", JSON.stringify(sampleProjects));
}

function loadLocalData() {
    console.log("localdata call")
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = ""; // Clear existing content

    const data = JSON.parse(localStorage.getItem("projects"));

    if (data) {
        data.forEach(project => {
            console.log(data)
            const projectCard = document.createElement("project-card");
            projectCard.setAttribute("title", project.title);
            projectCard.setAttribute("image", project.image);
            projectCard.setAttribute("alt", project.alt);
            projectCard.setAttribute("description", project.description);
            projectCard.setAttribute("role", project.role);
            projectCard.setAttribute("date", project.date);
            projectCard.setAttribute("technologies", project.technologies);
            projectCard.setAttribute("bullets", JSON.stringify(project.bullets));
            projectCard.setAttribute("link", project.link);
            projectsContainer.appendChild(projectCard);
        });
    }
}

function loadRemoteData() {
    console.log("localremote call")

    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = ""; // Clear existing content

    //make sure we const load this data and also do it for loadremotedata
    // we need to call these two functions as well
    fetch("https://my-json-server.typicode.com/FaZeDrug/cse134-hw5/projects") // Update with your repo URL
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(project => {
                const projectCard = document.createElement("project-card");
                projectCard.setAttribute("title", project.title);
                projectCard.setAttribute("image", project.image);
                projectCard.setAttribute("alt", project.alt);
                projectCard.setAttribute("description", project.description);
                projectCard.setAttribute("role", project.role);
                projectCard.setAttribute("date", project.date);
                projectCard.setAttribute("technologies", project.technologies.join(", ")); // Convert array to string
                projectCard.setAttribute("contributions", project.contributions);
                projectCard.setAttribute("bullets", JSON.stringify(project.bullets));
                projectCard.setAttribute("link", project.link);
                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error("Error fetching remote data:", error));
}
