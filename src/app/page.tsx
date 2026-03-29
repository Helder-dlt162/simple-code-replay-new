"use client";
import { useState } from "react";
import CodeEditor from "./components/ui/codeEditor";
import FramesPanel from "./components/ui/framesPanel";
import Header from "./components/ui/header";

const MainDashboard = () => {
  const [frames, setFrames] = useState<string[]>([]);

  return (
    <div className="bg-slate-300 dark:bg-slate-800 flex flex-col h-screen">
      <div className="h-[7vh]">
        <Header />
      </div>

      <div className="flex flex-1">
        <div className="w-1/3 h-[93vh]">
          <FramesPanel frames={frames} />
        </div>
        <div className="flex-1 h-[93vh]">
          <CodeEditor setFrames={setFrames} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;