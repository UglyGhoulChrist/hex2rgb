import { useEffect, useState } from "react";
import "./App.css";
const INITIAL_BG_COLOR = [255, 255, 255];

function App() {
  const [inputHexColor, setInputHexColor] = useState("");
  const [resultRgbColor, setResultRgbColor] = useState(INITIAL_BG_COLOR);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setResultRgbColor(INITIAL_BG_COLOR);
    document.body.style.backgroundColor = `rgb(${INITIAL_BG_COLOR.join(", ")})`;

    if (inputHexColor.length === 7) {
      const rHex = inputHexColor.slice(1, 3);
      const gHex = inputHexColor.slice(3, 5);
      const bHex = inputHexColor.slice(5, 7);
      const rRgb = parseInt(rHex, 16);
      const gRgb = parseInt(gHex, 16);
      const bRgb = parseInt(bHex, 16);
      if (rRgb && gRgb && bRgb && inputHexColor[0] === "#") {
        setResultRgbColor([rRgb, gRgb, bRgb]);
        setError(false);
        document.body.style.backgroundColor = `rgb(${rRgb}, ${gRgb}, ${bRgb})`;
      } else {
        setError(true);
        document.body.style.backgroundColor = "red";
      }
    }

    if (inputHexColor.length > 7) {
      setError(true);
      document.body.style.backgroundColor = "red";
    }
  }, [inputHexColor]);

  return (
    <div className="App">
      <form className="form">
        <label>Введите цвет в HEX</label>
        <input
          placeholder="#444444"
          className="form__input"
          value={inputHexColor}
          onChange={(e) => setInputHexColor(e.target.value)}
          type="text"
        />
        <div className="form__result">
          {error ? "Error" : `rgb(${resultRgbColor.join(", ")})`}
        </div>
      </form>
    </div>
  );
}

export default App;
