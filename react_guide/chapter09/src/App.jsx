import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProject: undefined,
        projects : []
    })
    
    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProject: null,
            }
        });
    }

    function handleAddProject(projectData){
        setProjectsState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
              
                id: projectId
            }
            return {
                ...prevState,
                selectedProject:undefined,
                projects : [...prevState.projects, newProject]
            }
        })
    }

    console.log(projectsState)

    let content;

    if(projectsState.selectedProject == null){
        content= <NewProject onAdd={handleAddProject}/>
    } else if (projectsState.selectedProject == undefined) {
        <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }
  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar 
            onStartAddProject={handleStartAddProject}
            projects={projectsState.projects}
        />
        {content}
    </main>
  );
}

export default App;
