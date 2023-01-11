import Entry from "./Entry";

export default function Modal({ entry, display }) {
  return (
    <div className="modal" onClick={display}>
        <p>HELLOOOOOOOOOOOO</p>
        <img src={entry.img}></img>
        <h3>Artist: {entry.artist}</h3>
    </div>
  )
}
