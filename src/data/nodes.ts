import { Node } from "reactflow";

export const initNodes: Node[] = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Input Node' },
        position: { x: 250, y: 25 },
        style: { background: '#454587', color: '#fff' }
    },

    {
        id: '2',
        // you can also pass a React component as a label
        data: {
            label: 'Default Node'
        },
        position: { x: 100, y: 125 },
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: 250, y: 250 },
    },
];