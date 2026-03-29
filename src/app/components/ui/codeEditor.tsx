"use client";

import Editor from "@monaco-editor/react";
import { useRef } from "react";

type Props = {
  setFrames: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function CodeEditor({ setFrames }: Props) {
  const qRef = useRef(0);

  function handleChange(value: string | undefined) {
    const code = value ?? "";

    if (qRef.current === 5) {
      setFrames((prev) => [...prev, code]);
      qRef.current = 0; // reseta
    } else {
      qRef.current++;
    }
  }

  return (
    <div className="w-full h-full border-2">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// code aqui"
        theme="vs-dark"
        onChange={handleChange}
      />
    </div>
  );
}