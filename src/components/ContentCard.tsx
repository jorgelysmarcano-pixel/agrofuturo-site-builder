import { useState } from "react";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

const ContentCard = ({ children, className = "" }: ContentCardProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`content-card ${clicked ? "clicked" : ""} ${className}`}
      onClick={() => setClicked(!clicked)}
    >
      {children}
      {!clicked && (
        <p className="text-xs text-muted-foreground mt-4 opacity-60">
          👆 Clique para mudar a cor
        </p>
      )}
    </div>
  );
};

export default ContentCard;
