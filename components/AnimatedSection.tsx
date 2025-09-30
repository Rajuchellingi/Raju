import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'left' | 'right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', style, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const transformClasses = {
    up: {
      initial: 'translate-y-12',
      final: 'translate-y-0',
    },
    left: {
      initial: '-translate-x-12',
      final: 'translate-x-0',
    },
    right: {
      initial: 'translate-x-12',
      final: 'translate-x-0',
    },
  };

  const { initial, final } = transformClasses[direction];

  return (
    <div
      ref={sectionRef}
      style={style}
      className={`${className} transition-all duration-1000 ease-out transform-gpu ${
        isVisible ? `opacity-100 ${final}` : `opacity-0 ${initial}`
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
