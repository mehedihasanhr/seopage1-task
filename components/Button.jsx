const Button = ({ children, icon, className = '', onClick, ...props }) => {
  return (
    <button
      className={`h-10 py-2 px-4 flex text-sm items-center gap-2.5 border border-[#4E4E4E] rounded-md whitespace-nowrap ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};

export default Button;
