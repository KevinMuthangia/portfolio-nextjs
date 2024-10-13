import ProjectTile from "@/components/project-tile"
import SectionTitle from "@/components/section-title"
import { projectsData } from "@/lib/projects"


const Projects = () => {
  return (
    <section data-section="projects" id="projects">
        <div className="py-6 sm:py-12 px-[5%]">
          <SectionTitle title="Projects" subtitle="Some of my work" />
        </div>
        <div className="grid grid-cols-1 ">
           {
              projectsData.map((project, index) => (
                    <ProjectTile 
                      key={index} 
                      index={index}
                      image={project.image} 
                      stack={project.stack}
                      title={project.title}
                      description={project.description}
                      demoLink={project.demoLink}
                      codeLink={project.codeLink}
                      reverse={index % 2 === 1}
                      bg={index % 2 === 1 ? "bg-primary/5" : "bg-transparent"}
                    />
              ))
           }

        </div>
    </section>
  )
}

export default Projects