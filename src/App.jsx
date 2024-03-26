import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectsSidebar";


function App() {
  return (
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar />
        { 1 == 1 ? <NewProject /> : <div >
            
        </div>}
        
      </main>
  );
}

export default App;
