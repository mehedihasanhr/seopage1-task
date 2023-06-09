const Button = ({ children, icon, className = '', onMouseDown, onClick, ...props }) => {
  return (
    <button
      className={`h-10 py-2 px-4 flex text-sm items-center gap-2.5 border border-[#4E4E4E] rounded-md whitespace-nowrap transition-colors duration-300 ${className}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      {...props}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};

export default Button;
