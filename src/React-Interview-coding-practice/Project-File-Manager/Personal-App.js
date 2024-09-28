import Folder from "./Folder";
import React, {useState, useEffect} from "react";
import Explorer from "./FolderData"
import useTraversetree from "./use-traverse-tree";

const AppPersonal = () => {

    const [explorerData, setexplorerData] = useState(Explorer);

    const  {insertNode} = useTraversetree();

    const handleInsertNode = (folderid, item, isFolder) => {
        const finalInsert = insertNode(explorerData, folderid, item, isFolder);
        setexplorerData(finalInsert);
    }

    return(
        <>
            <Folder handleInsertNode={handleInsertNode} Explorer={explorerData} />
        </>
    )
}

export default AppPersonal;