class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
       // getting attributes
       const title = this.getAttribute("title") || "Project Name";
       const imageSrc = this.getAttribute("image") || "placeholder.jpg";
       const imageAlt = this.getAttribute("alt") || "Project Image";
       const description = this.getAttribute("description") || "Short description about the project.";
       const role = this.getAttribute("role") || "Role not specified";
       const date = this.getAttribute("date") || "Date not specified";
       const technologies = this.getAttribute("technologies") || "Technologies not specified";
       const link = this.getAttribute("link") || "#";

       // bullet pts
       const bulletList = this.getAttribute("bullets") ? JSON.parse(this.getAttribute("bullets")) : [];
       const bulletHTML = bulletList.length
           ? `<ul>${bulletList.map(bullet => `<li>${bullet}</li>`).join("")}</ul>`
           : "";

       // this is creating component structure
       const template = document.createElement("template");
       template.innerHTML = `
           <style>
               :host {
                   width: 100%;
               }

               .card {
                   display: flex;
                   flex-direction: row;
                   align-items: stretch;
                   background-color: var(--background-color);
                   padding: 20px;
                   gap: 20px;
                   width: 100%;
                   border: 2px solid var(--border-color); /* Thick border added */
                   border-radius: 10px; /* Rounded corners */
                   padding-bottom: 20px;
                   margin-bottom: 20px;
               }

               .image-container {
                   flex: 0 0 250px;
                   display: flex;
                   align-items: center;
               }

               .image-container img {
                   width: 250px;
                   height: 250px;
                   object-fit: cover;
                   border-radius: 10px;
                   border: 1px solid var(--border-color);
               }

               .text-container {
                   flex: 1;
                   display: flex;
                   flex-direction: column;
                   justify-content: space-between;
               }

               h2 {
                   font-size: 1.2rem;
                   font-style: italic;
               }

               .meta-info {
                   font-size: 15px;
                   font-weight: normal;
                   margin-bottom: 5px;
               }

               ul {
                   padding-left: 20px;
                   list-style-type: disc;
                   margin-top: 10px;
                   margin-bottom: 10px;
               }

               ul li {
                   margin-bottom: 5px;
               }

               .project-meta {
                   font-size: 14px;
                   font-weight: normal;
                   margin-top: 10px;
                   text-align: left;
               }

               a {
                   text-decoration: none;
                   color: blue;
               }

               a:hover {
                   text-decoration: underline;
               }

               @media (max-width: 768px) {
                   .card {
                       flex-direction: column;
                       align-items: center;
                   }

                   .image-container {
                       flex: 0 0 60px;
                   }

                   .image-container img {
                       width: 60px;
                       height: 60px;
                       border-radius: 10px;
                       object-fit: cover;
                   }

                   .text-container {
                       text-align: left;
                       flex: 1;
                   }

                   .meta-info {
                       font-size: 14px;
                       margin-bottom: 2px;
                   }

                   ul {
                       font-size: 12px;
                   }

                   .project-meta {
                       font-size: 12px;
                   }
               }
           </style>
           <div class="card">
               <div class="image-container">
                   <picture>
                       <img src="${imageSrc}" alt="${imageAlt}">
                   </picture>
               </div>
               <div class="text-container">
                   <h2>${title}</h2>
                   <p class="meta-info">${role} | ${date}</p>
                   <p>${description}</p>
                   ${bulletHTML}
                   <p class="project-meta"><strong>Technologies:</strong> ${technologies}</p>
                   <a href="${link}" target="_blank">Repository Link</a>
               </div>
           </div>
       `;

       // attached onto to shadow dom
       this.shadowRoot.appendChild(template.content.cloneNode(true));
   }  
       
}

customElements.define("project-card", ProjectCard);
