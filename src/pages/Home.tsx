/* eslint-disable @typescript-eslint/no-unused-vars */
import AddNode from '@/components/AddNode';
import { initEdges } from '@/data/edges';
import { initNodes } from '@/data/nodes';
import { useCallback, useState } from 'react';
import ReactFlow, { Background, Connection, Controls, EdgeChange, MiniMap, NodeChange, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

function Home() {
    const [nodes, setNodes] = useState(initNodes)
    const [edges, setEdges] = useState(initEdges)

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );
    const defaultEdgeOptions = { animated: true };

    return (
        <>
            <div style={{ height: '88vh', width: '90vw' }}>
                <AddNode nodes={nodes} setNodes={setNodes} />
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    defaultEdgeOptions={defaultEdgeOptions}
                >
                    <Background />
                    <Controls />
                    <MiniMap />
                </ReactFlow>
            </div >
        </>
    )
}

export default Home