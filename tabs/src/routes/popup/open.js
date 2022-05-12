import "./open.styles.css";

export default function Open({ children, trigger, handleClick }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          onClick={() => {
            handleClick(false);
          }}
          className="close-btn"
        >
          x
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
}
