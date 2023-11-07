import React from "react";
import MDEditor from '@uiw/react-md-editor';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
const Ck = ({value,setContents}) => {
  
    return (
      <>
      <MDEditor value={value} onChange={setContents} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      </>
    );
  };
  
  export default Ck;