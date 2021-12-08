import { FC, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import thisRepo from '../api/thisRepo';

const CodeBlock: FC<CodeBlockProps> = ({ path }) => {
  const [ content, setContent ] = useState<string>('');

  useEffect(() => {
    ( async () => {
      try {
        const newContent = String((await thisRepo.get(path)).data);
        setContent(newContent);
      } catch (error) {
        setContent('// Error loading code block');
      }
    })();
  }, [path]);

  return (
    <SyntaxHighlighter
      language='javascript'
      style={a11yDark}
    >
      {content}
    </SyntaxHighlighter >
  );
};

interface CodeBlockProps {
  path: string;
}

export default CodeBlock;
