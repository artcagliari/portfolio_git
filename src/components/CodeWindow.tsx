import { useEffect, useRef, useState } from 'react';

const CodeWindow = () => {
  const codeLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const currentLineRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const codeLines = codeLinesRef.current.filter(Boolean);
    let currentLine = 0;

    const typeCode = () => {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        if (line) {
          const text = line.getAttribute('data-text') || '';
          line.textContent = '';
          line.style.borderRight = '2px solid #64b5f6';
          
          let charIndex = 0;
          const typeChar = () => {
            if (charIndex < text.length) {
              line.textContent += text.charAt(charIndex);
              charIndex++;
              setTimeout(typeChar, 50);
            } else {
              line.style.borderRight = 'none';
              currentLine++;
              setTimeout(typeCode, 300);
            }
          };
          typeChar();
        }
      }
    };

    const timer = setTimeout(typeCode, 1000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const codeData = [
    "let developer = {",
    "ㅤㅤname: 'Artur Cagliari',",
    "ㅤㅤskills: ['CSS', 'JS']",
    "};"
  ];

  return (
    <div className="code-window" ref={containerRef}>
      <div className="window-header">
        <div className="window-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="window-content">
        <div className="code-lines">
          {codeData.map((line, index) => (
            <div key={index} className="code-line">
              <span className="line-number">{index + 1}</span>
              <span 
                className="code-text"
                data-text={line}
                ref={(el) => (codeLinesRef.current[index] = el)}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;



