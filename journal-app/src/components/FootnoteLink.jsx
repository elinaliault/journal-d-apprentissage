export default function FootnoteLink({ id, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <a href={`#${id}`} onClick={handleClick}>
      {children}
    </a>
  );
}