export const GifItem = ({ title, url, id, onDelete }) => {
  return (
    <div className="card">
      <button className="delete-button" onClick={() => onDelete(id)}>
        X
      </button>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
