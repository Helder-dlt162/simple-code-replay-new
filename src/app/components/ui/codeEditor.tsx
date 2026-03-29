"use client";

import Editor from "@monaco-editor/react";
import { useRef } from "react";

type Props = {
  setFrames: React.Dispatch<React.SetStateAction<string[]>>;
  code: string;
  setCode: (v: string) => void;
};

export default function CodeEditor({ setFrames, code, setCode }: Props) {
  const qRef = useRef(0);

  function handleChange(value: string | undefined) {
    const code = value ?? "";

    if (qRef.current === 5) {
      setCode(code)
      setFrames((prev) => [...prev, code]);
      qRef.current = 0; // reseta
    } else {
      qRef.current++;
    }
  }

  return (
    <div className="w-full h-full border-2">
      <Editor
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleChange}
      />
    </div>
  );
}
