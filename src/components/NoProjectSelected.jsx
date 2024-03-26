import noProjectImage from "../assets/no-projects.png"
import Button from "./Button"


export default function NoProjectSelected(){
    return (
        <div className="mt-2 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={noProjectImage} alt="Notepad logo" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Projects Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button>Create new project</Button>
            </p>
        </div>
    )
}