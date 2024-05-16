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

    // const onNodesChange = useCallback(
    //     (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    //     [setNodes]
    // );
    // const onEdgesChange = useCallback(
    //     (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    //     [setEdges]
    // );
    const onConnect = useCallback(
        (connection: Connection) => {
            const edge = { ...connection, type: 'custom-edge' };
            setEdges((eds) => addEdge(edge, eds));
        },
        [setEdges],
    );
    const defaultEdgeOptions = { animated: true };

    // const deleteNode = (id: string) => {
    //     setNodes(nodes.filter(node => node.id !== id));
    // };

    return (
        <>
            <div style={{ height: '88vh', width: '90vw' }}>
                <AddNode nodes={nodes} setNodes={setNodes} />
                {/* <div className='cursor-pointer'>
                    {nodes.map(node => (
                        <div key={node.id}
                        // onMouseOver={() => showDeleteIcon(node.id)}
                        >
                            {node.data.label}
                            <span
                                style={{ color: 'red' }}
                                onClick={() => deleteNode(node.id)}
                            >
                                X
                            </span>
                        </div>
                    ))}
                </div> */}
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