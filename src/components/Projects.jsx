import React from "react";
//import VermaSpiceiImg from '../images/VermaSpicie.png';

function Projects() {
  const projects = [
    {
      title: "VermaBytes - Learning Platform",
      techStack: "React + Custom CSS",
      description:
        "Created VermaBytes, a modern learning platform offering structured courses and engaging content. Utilized React.js and CSS to build a scalable, responsive interface with component-based architecture, dynamic routing, and smooth user interactions, emphasizing performance and accessibility.",
      image: "/images/VermaBytesImg.png", // Replace with your actual project image
      liveLink: "https://vermabytes.netlify.app/", // Replace with actual live link
      githubLink: "https://github.com/VermaBytes/Todo-App.git", // Replace with actual GitHub link
    },
    {
      title: "Expense Tracker",
      techStack: "MERN Stack",
      description:
        "The Expense Tracker Project is a Web Application Developed Using React Js, Node Js, Express Js, MongoDB. Its Main Purpose is to Assist Users in Keeping Track of Their Expenses. This project involves creating a user interface that enables users to add, edit, and delete expenses.",
      image: "/images/ExpenseImg.png", // Replace with your actual project image
      liveLink: "https://hisabook.netlify.app/", // Replace with actual live link
      githubLink: "https://github.com/VermaBytes/ExpenseTrackers.git", // Replace with actual GitHub link
    },
    {
      title: "VermaSpicei",
      techStack: "React.js, HTML5, CSS3, JavaScript, Tailwind CSS",
      description:
        "VermaSpicei is a modern, responsive e-commerce web application built using React.js. It offers a clean and attractive interface where customers can explore fresh, organic spices, browse by categories, view all products, and add items to their cart. The platform provides a seamless shopping experience with visually appealing design and smooth navigation.",
      image: "/images/VermaSpicie.png", // Replace with your actual project image
      liveLink: "https://vermaspicie.netlify.app/", // Replace with actual live link
      githubLink: "https://github.com/VermaBytes/VermaSpicie.git", // Replace with actual GitHub link
    },
    // Add more projects here
  ];

  return (
    <div className="container">
      <h2 className="section-title fade-in delay-100">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card slide-in-up delay-${200 + index * 100}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-tech-stack">{project.techStack}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
