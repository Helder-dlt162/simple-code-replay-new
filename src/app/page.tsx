"use client";

import { useState } from "react";
import CodeEditor from "./components/ui/codeEditor";
import FramesPanel from "./components/ui/framesPanel";
import Header from "./components/ui/header";

const MainDashboard = () => {
  const [frames, setFrames] = useState<string[]>([]);
  const [currentCode, setCurrentCode] = useState("");

  function goToFrame(code: string) {
    setCurrentCode(code);
  }

  function replay() {
    let i = 0;

    const interval = setInterval(() => {
      if (i >= frames.length) {
        clearInterval(interval);
        return;
      }

      setCurrentCode(frames[i]);
      i++;
    }, 300); // velocidade
  }

  return (
    <div className="bg-slate-300 dark:bg-slate-800 flex flex-col h-screen">
      <div className="h-[7vh]">
        <Header />
      </div>

      <button onClick={replay} className="text-black dark:text-white">
        Replay
      </button>

      <div className="flex flex-1">
        <div className="w-[30vw] h-[93vh]">
          <FramesPanel frames={frames} goToFrame={goToFrame} />
        </div>
        <div className="flex-1 h-[93vh]">
          <CodeEditor
            setFrames={setFrames}
            code={currentCode}
            setCode={setCurrentCode}
          />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
