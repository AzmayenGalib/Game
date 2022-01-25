export default function Block({ mark, changemark, position }) {
  return (
    <div
      className={`Block mark${mark}`}
      onClick={(e) => changemark(position)}
    ></div>
  );
}
