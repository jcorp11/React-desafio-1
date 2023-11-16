import Badge from "react-bootstrap/Badge";

function Tag({ bg, text }) {
  console.log({ bg, text });
  return <Badge bg={bg}>{text} </Badge>;
}

export default Tag;
