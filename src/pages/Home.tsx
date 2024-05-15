import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
function Home() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <ReactFlow>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Home