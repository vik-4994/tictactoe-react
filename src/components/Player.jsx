import {useState} from 'react';

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ newName, setNewName ] = useState(name);

    return (
            <li>
                <span className={"player"}>
                    {isEditing ? <input type="text" defaultValue={newName} value={newName} onChange={(e) => setNewName(e.target.value)}/> :
                        <span className={!isEditing ? "player-name" : ""}>{newName}</span>}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={() => {
                    setIsEditing(wasEditing => !wasEditing);
                }}>{isEditing ? "Save" : "Edit"}</button>
            </li>
    );
}