"use client";
export default function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-5 md:px-10 xl:px-16 ${className}`}>
      {children}
    </div>
  );
}