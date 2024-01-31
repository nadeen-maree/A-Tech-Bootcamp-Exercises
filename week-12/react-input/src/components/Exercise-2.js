
import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

   const handleSelectingFruit = (e) => {
    const selectedFruit = e.target.value;
        setFruit(selectedFruit);

        setTimeout(() => {
            console.log(`${name} selected ${selectedFruit}`);
        });
   }

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select name="fruits" id="select-input" onChange={handleSelectingFruit} value={fruit}>
                <option value="" disabled>Select a fruit</option>
                <option onClick={handleSelectingFruit} value="apple">apple</option>
                <option onClick={handleSelectingFruit} value="banana">banana</option>
            </select>
        </div>
    );
}
export default Exercise2;
