
import Modal from './Modal.jsx'
import { useState } from 'react'

export default function Entry({ entries }) {

    const [toggle, setToggle] = useState(false)
    const [displayItem, setDisplayItem] = useState({})

    const display = (entry) => {
        if (!toggle) return setToggle(true), setDisplayItem(entry);
        return setToggle(false);
      };

  return (
    <div className="app">
        {toggle && <Modal entry={displayItem} display={display} />}
        {entries.map((entry, index) => {
            if (entry.display) {
            return (
            <img 
                onClick={() => display(entry)}
                className="image" 
                src={entry.img} 
                key={index}
        />
)}})}
    </div>
  );
}