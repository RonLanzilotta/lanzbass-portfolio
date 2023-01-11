import Entry from "./Entry";

export default function Modal({ entry, display }) {

  return (
    <div className="modal" onClick={display}>
        <img src={entry.img} className="modalImg"></img>
        <ul>
            <li>Artist: {entry.artist}</li>
            <li>Album: {entry.album}</li>
            <li>Year: {entry.artist}</li>
            <li>Songs: {entry.songs}</li>
            <li>Roles: {entry.artist}</li>
            <li>Record Label: {entry.artist}</li>
            <li>Link: {entry.artist}</li>
        </ul>
    </div>
  )
}
