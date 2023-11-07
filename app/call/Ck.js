import React from "react";
import MDEditor from '@uiw/react-md-editor';
import "@uiw/react-md-editor/markdown-editor.css";
const Ck = ({value,setContents}) => {
  
    return (
      <>
      <MDEditor value={value} onChange={setContents} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      </>
    );
  };
  
  export default Ck;