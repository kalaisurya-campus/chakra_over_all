

export default function Dot({ color }){
    const style = {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: color,
      margin: "0 20px",
      display: "inline-block",
    };
    return <span style={style}></span>;
  };