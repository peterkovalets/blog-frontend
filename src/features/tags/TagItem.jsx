function TagItem({ tag }) {
  return (
    <li className="text-lg">
      <a
        href="#"
        className="block p-2 pl-4 transition-colors duration-300 hover:bg-slate-200"
      >
        # {tag}
      </a>
    </li>
  );
}

export default TagItem;
