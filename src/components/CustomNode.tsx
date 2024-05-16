import { Handle, NodeProps, Position, useReactFlow } from "reactflow"
import { Button } from "./ui/button";


function CustomNode({ data: { label, background, color }, id }: NodeProps<{
    label: string;
    background: string;
    color: string;
}>) {
    const { setNodes } = useReactFlow()
    return (
        <>
            <div className={`px-6 py-1 border rounded-md flex items-center justify-around gap-2`}
                style={{ backgroundColor: background, color: color }}
            >
                <p>
                    {label}
                </p>
                <Button variant={"destructive"}
                    onClick={() => setNodes((prev) => prev.filter(node => node.id !== id))}
                >
                    X
                </Button>
            </div >
            <Handle type="target" position={Position.Top} />
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
            <Handle type="source" position={Position.Bottom} />
        </>
    )
}

export default CustomNode