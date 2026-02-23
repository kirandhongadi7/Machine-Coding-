import { useEffect, useState } from "react";


function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(() => {
    const save = localStorage.getItem("todos");
    return save ? JSON.parse(save) : [];
  });

  const handleList = () => {
    if (input.trim() === "") return;

    const info = {
      id: Date.now(),
      text: input.trim(),
      checkbox: false,
    };
    setList((prev) => [...prev, info]);
    setInput("");
  };

  const handleDelet = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleCheckBox = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, checkbox: !item.checkbox } : item,
      ),
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => handleList()}>Add</button>
        </div>
        {list.map((l) => (
          <li key={l.id}>
            <input
              type="checkbox"
              checked={l.checkbox}
              onChange={() => handleCheckBox(l.id)}
            />
            <span
              style={{
                textDecoration: l.checkbox ? "line-through" : "none",
              }}
            >
              {l.text}
            </span>

            <button onClick={() => handleDelet(l.id)}>Delete</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
