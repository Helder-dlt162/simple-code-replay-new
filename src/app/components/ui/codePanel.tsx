"use client";

import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <div className="w-full h-full border-2">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// code aqui"
        theme="vs-dark"
      />
    </div>
  );
}