import "bootstrap-icons/font/bootstrap-icons.css";

export default function Button({ setBg }) {
  const myStyle = {
    color: "black",
    backgroundColor: "#00bfff",
    height: "40px",
    width: "40px",
    padding: "0",
    fontSize: "30px",
    borderRadius: "50px",
  };
  return (
    <div>
      <button style={myStyle} onClick={() => setBg("black")}>
        <i class="bi bi-moon-fill"></i>
      </button>
    </div>
  );
}
