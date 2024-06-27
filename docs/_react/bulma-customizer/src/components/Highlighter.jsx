import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Highlighter = ({ ...rest }) => {
  return (
    <SyntaxHighlighter style={atomOneDark} useInlineStyles={false} {...rest} />
  );
};

Highlighter.propTypes = {
  code: PropTypes.string,
};

export default Highlighter;
