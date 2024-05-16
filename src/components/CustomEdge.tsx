/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    BaseEdge,
    EdgeLabelRenderer,
    getBezierPath,
    useReactFlow,
} from 'reactflow';
import { Button } from './ui/button';
import { useState } from 'react';

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }: {
    id: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
}) {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });
    const [isHovering, setIsHovering] = useState(false)

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            {
                <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
                    isHovering ? (
                    <EdgeLabelRenderer>
                        <Button
                            variant={'destructive'}
                            style={{
                                position: 'absolute',
                                transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                                pointerEvents: 'all',
                            }}
                            className="nodrag nopan"
                            onClick={() => {
                                setEdges((es) => es.filter((e) => e.id !== id));
                            }}
                        >
                            X
                        </Button>

                    </EdgeLabelRenderer>
                    ) : (
                    null
                    )
                </div>
            }
        </>
    );
}
