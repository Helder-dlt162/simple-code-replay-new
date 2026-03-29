"use client";

import { useState } from "react";

type Props = {
  code: string;
  index: number;
  toEditor: (code: string) => void;
};

const Container = ({ code, index, toEditor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-2 border-b-black my-2">
      <div className="flex justify-between">
        <div className="text-black dark:text-white flex truncate">
          <div className="bg-amber-700 w-4 ml-1 mr-3">{index}</div>
          <p className="truncate">{code}</p>
        </div>
        <div className="flex">
          <button onClick={() => toEditor(code)}>
            <div className="bg-amber-700 ml-3 mr-1">&gt;</div>
          </button>
          <button onClick={() => setOpen(!open)}>
            <div className="bg-amber-700 w-3 ml-3 mr-1">⋮</div>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-2 p-2 bg-slate-800 text-white rounded max-h-60 overflow-auto">
          <pre className="whitespace-pre-wrap text-sm">{code}</pre>
        </div>
      )}
    </div>
  );
};

export default Container;
