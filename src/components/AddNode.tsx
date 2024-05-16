/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Node } from "reactflow"

type Props = {
    nodes: Node[],
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>
}

function AddNode({ nodes, setNodes }: Props) {
    const [nodename, setNodename] = useState('')
    const [nodecolor, setNodecolor] = useState('#fff')
    const [nodeTextcolor, setNodeTextcolor] = useState('#000')
    function handleSubmit() {
        const newnodes = [...nodes, {
            id: `${uuidv4()}`,
            type: 'custom-node',
            data: { label: nodename, background: nodecolor, color: nodeTextcolor },
            position: { x: 200, y: 0 },
        },]
        setNodes((prev: Node[]) => [...prev, ...newnodes])
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Add Node</Button>
            </SheetTrigger>
            <SheetContent side={'right'}>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nodename" className="text-right">
                            Nodename
                        </Label>
                        <Input id="nodename"
                            onChange={(e) => setNodename(e.target.value)}
                            placeholder="Name  of Node" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nodeBG" className="text-right">
                            NodeBG
                        </Label>
                        <Input id="nodeBG"
                            type="color"
                            defaultValue='#fff'
                            onChange={(e) => setNodecolor(e.target.value)}
                            className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nodeTextcolor" className="text-right">
                            NodeText
                        </Label>
                        <Input id="nodeTextcolor"
                            type="color"
                            defaultValue='#000'
                            onChange={(e) => setNodeTextcolor(e.target.value)}
                            className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default AddNode;