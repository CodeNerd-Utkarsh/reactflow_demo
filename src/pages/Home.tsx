/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import initEdges from '../data/edges'
import initNodes from '../data/nodes'

function Home() {
    const [nodes, setNodes] = useState(initNodes)
    const [edges, setEdges] = useState(initEdges)
    return (
        <div style={{ height: '88vh', width: '90vw' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
            >
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    )
}

export default Home