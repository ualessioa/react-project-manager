import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";


function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(taskText){
    setProjectsState(prevState => {
      const newTask = {
        text: taskText,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectsState((oldVal) => {
      return {
        ...oldVal,
        tasks: oldVal.tasks.filter((task) => task.id !== id)
      }
    })
  }


  function handleSelectProject(id){
    setProjectsState((oldVal) => {
      return {
        ...oldVal,
        selectedProjectId: id,
      }
    })
  }

  function handleStartAddProject(){
    setProjectsState((oldVal) => {
      return {
        ...oldVal,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState((oldVal) => {
      return {
        ...oldVal,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })

  }

  function handleDeleteProject(){
     setProjectsState((oldVal) => {
      return {
        ...oldVal,
        selectedProjectId: undefined,
        projects: oldVal.projects.filter((project) => project.id !== oldVal.selectedProjectId)
      }
    })

  }


  let content

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  } else {
    let project = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId)
    content = <SelectedProject project={project} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>
  }

  return (
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar  onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>
        { content }
      </main>
  );
}

export default App;
