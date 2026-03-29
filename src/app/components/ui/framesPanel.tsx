import Container from "../frame/container";

type Props = {
  frames?: string[];
};

const FramesPanel = ({ frames }: Props) => {
  return (
    <div className="bg-slate-400 dark:bg-slate-900 border-2 w-full h-full overflow-auto">
      {frames?.map((frame, index) => (
        <Container key={index} text={frame} index={index} />
      ))}
    </div>
  );
};

export default FramesPanel;