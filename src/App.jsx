import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";


function App() {
  return (
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar />
        { 1 == 2 ? <NewProject /> : <NoProjectSelected />}
        
      </main>
  );
}

export default App;
