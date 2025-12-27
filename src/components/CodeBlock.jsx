const CodeBlock = ({ title = 'Example', code }) => {
  return (
    <div className="codeblock">
      <div className="codeblock__top">
        <div className="codeblock__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="codeblock__title">{title}</div>
      </div>
      <pre className="codeblock__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;


