export default function Modal({ entry, display }) {
  //   const arrFixer = (arr) => {
  //     for (let i = 0; i < arr.length; i++) {
  //       arr[i] = arr[i] + ", ";
  //     }
  //     return arr;
  //   };

  console.log(entry.songs.join(", "));

  return (
    <div className="modal" onClick={display}>
      <img src={entry.img} className="modalImg"></img>
      <ul>
        <li>Artist: {entry.artist}</li>
        <li>Album: {entry.album}</li>
        <li>Year: {entry.artist}</li>
        <li>Songs: {entry.songs.join(", ")}</li>
        <li>Roles: {entry.roles.join(", ")}</li>
        <li>Record Label: {entry.recordLabel}</li>
        <li><a href={entry.link}>Listen</a></li>
      </ul>
    </div>
  );
}
