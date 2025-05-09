import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  href,
  icon,
  ...props 
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold py-3 px-6 rounded-md
    transition-all duration-300 shadow-md btn-hover-effect
    focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
  `;

  const variantClasses = {
    primary: 'bg-gradient-to-r from-secondary to-[#217dbb] text-white hover:from-secondary hover:to-primary',
    outline: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    accent: 'bg-gradient-to-r from-accent to-[#c0392b] text-white hover:from-accent hover:to-primary',
    success: 'bg-gradient-to-r from-success to-[#27ae60] text-white hover:from-success hover:to-[#1e8449]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;