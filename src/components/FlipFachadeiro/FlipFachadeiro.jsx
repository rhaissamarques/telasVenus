import "./styleFlipFachadeiro.css";

export const FlipFachadeiro = ({ className, frameClassName }) => {
  return (
    <div className={`flip-fachadeiro ${className}`}>
      <div className={`frame ${frameClassName}`} />
    </div>
  );
};
