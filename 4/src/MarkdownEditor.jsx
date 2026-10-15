import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const containerRef = useRef(null);
  const editorRef = useRef(null);
  useEffect(() => {
    const editor = new Editor({
      el: containerRef.current,
      hideModeSwitch: true,
    });
    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });
    editorRef.current = editor;
    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={containerRef}></div>;
  // END
};

export default MarkdownEditor;
