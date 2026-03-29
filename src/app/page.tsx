import CodeEditor from "./components/ui/codePanel";
import FramesPanel from "./components/ui/framesPanel";
import Header from "./components/ui/header";

const MainDashboard = () => {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 flex flex-col h-screen">
      <div className="h-[7vh]">
        <Header />
      </div>

      <div className="flex flex-1">
        <div className="w-1/3 h-[93vh]">
          <FramesPanel />
        </div>
        <div className="flex-1 h-[93vh]">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
