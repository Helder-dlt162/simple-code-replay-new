import Container from "../frame/container";

type Props = {
  frames?: string[];
  goToFrame: (code: string) => void;
};

const FramesPanel = ({ frames, goToFrame }: Props) => {
  return (
    <div className="bg-slate-400 dark:bg-slate-900 border-2 w-full h-full overflow-auto">
      {frames?.map((frame, index) => (
        <Container key={index} code={frame} index={index} toEditor={goToFrame} />
      ))}
    </div>
  );
};

export default FramesPanel;
