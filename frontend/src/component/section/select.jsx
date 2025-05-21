import useState from 'react';

export default function Select() {
  const selectList = ['apple', 'banana', 'grape', 'orange'];
  const [Selected, setSelected] = useState('');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <h1>Select in React</h1>
      <div>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <hr />
        <p>
          Selected: <b>{Selected}</b>
        </p>
      </div>
    </>
  );
}
