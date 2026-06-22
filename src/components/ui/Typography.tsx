import { ReactNode, ElementType } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Display({ children, className = "", as: Component = "h1" }: TypographyProps) {
  return (
    <Component className={`font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] ${className}`}>
      {children}
    </Component>
  );
}

export function H1({ children, className = "", as: Component = "h1" }: TypographyProps) {
  return (
    <Component className={`font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] ${className}`}>
      {children}
    </Component>
  );
}

export function H2({ children, className = "", as: Component = "h2" }: TypographyProps) {
  return (
    <Component className={`font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] ${className}`}>
      {children}
    </Component>
  );
}

export function H3({ children, className = "", as: Component = "h3" }: TypographyProps) {
  return (
    <Component className={`font-serif text-2xl md:text-3xl tracking-tight leading-snug ${className}`}>
      {children}
    </Component>
  );
}

export function Lead({ children, className = "", as: Component = "p" }: TypographyProps) {
  return (
    <Component className={`font-sans text-lg md:text-xl text-concrete-grey font-light leading-relaxed ${className}`}>
      {children}
    </Component>
  );
}

export function Body({ children, className = "", as: Component = "p" }: TypographyProps) {
  return (
    <Component className={`font-sans text-base md:text-lg text-charcoal-black font-light leading-relaxed ${className}`}>
      {children}
    </Component>
  );
}

export function Caption({ children, className = "", as: Component = "span" }: TypographyProps) {
  return (
    <Component className={`font-sans text-xs md:text-sm text-concrete-grey uppercase tracking-widest ${className}`}>
      {children}
    </Component>
  );
}
