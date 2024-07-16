import { ClassAttributes, HTMLAttributes } from "react";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";

// 見出し要素の型定義
type HeadingProps = ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps;

const H1 = ({ children }: HeadingProps) => {
  return <h1 className="text-green-700 text-3xl">{children}</h1>;
};

const MarkdownSamplePage = () => {
  const markdownText = "# hello \n## heading2";
  return (
    <>
      <h1>マークダウンのサンプルページです</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: H1,
          h2({ children }) {
            return <h1 className="text-blue-700 text-3xl">{children}</h1>;
          },
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </>
  );
};
