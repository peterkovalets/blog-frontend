function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md grow rounded-md bg-slate-50 px-6 py-8 text-center"
    >
      {children}
    </form>
  );
}

export default Form;
