/* eslint-disable @typescript-eslint/no-unused-vars */
import AddNode from '@/components/AddNode';
import CustomEdge from '@/components/CustomEdge';
import CustomNode from '@/components/CustomNode';
import { initEdges } from '@/data/edges';
import { initNodes } from '@/data/nodes';
import { useCallback } from 'react';
import ReactFlow, { Background, BackgroundVariant, Connection, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

const edgeTypes = {
    'custom-edge': CustomEdge,
};
const nodeTypes = {
    'custom-node': CustomNode,
}
function Home() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

    const onConnect = useCallback(
        (connection: Connection) => {
            const edge = { ...connection, type: 'custom-edge' };
            setEdges((eds) => addEdge(edge, eds));
        },
        [setEdges],
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
                    edgeTypes={edgeTypes}
                    nodeTypes={nodeTypes}
                    defaultEdgeOptions={defaultEdgeOptions}
                >
                    <Background color="#fff" variant={BackgroundVariant.Cross} style={{ backgroundColor: '#000' }} />
                    <Controls />
                    <MiniMap />
                </ReactFlow>
            </div >
        </>
    )
}

export default Home