import { TreeView } from "@mui/x-tree-view/TreeView"
import { TreeItem } from "@mui/x-tree-view/TreeItem"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { useState, useEffect } from "react";
import { fetchChartsDataCharts } from "../services/PowerQuality";


export const TreePrueba = ({ data, setChartData }) => {
  console.log(data, "data en treeprueba")
  const [selectedNodeId, setSelectedNodeId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedNodeId) {
          const data = await fetchChartsDataCharts(selectedNodeId);
          setChartData(data);
        }

      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
  
    fetchData();
  }, [selectedNodeId]);
  
  
  const renderTreeNodes = (nodes) => (
    nodes.map((node) => (
      <TreeItem key={node.first_node_pk} nodeId={node.first_node_pk} label={node.name}>
        {node.second_nodes && node.second_nodes.length > 0 && renderSecondNodes(node.second_nodes)}
      </TreeItem>
    ))
  );

  const renderSecondNodes = (secondNodes) => (
    secondNodes.map((secondNode) => (
      <TreeItem key={secondNode.second_node_pk} nodeId={secondNode.second_node_pk} label={secondNode.name}>
        {secondNode.files && secondNode.files.length > 0 && renderFiles(secondNode.files)}
      </TreeItem>
    ))
  );

  const renderFiles = (files) => (
    files.map((file) => (
      <TreeItem key={file.file_pk} nodeId={file.file_pk} label={file.name}
        onClick={() => setSelectedNodeId(file.file_pk)}
      />
    ))
  );

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTreeNodes(data)}
    </TreeView>
  );
};

