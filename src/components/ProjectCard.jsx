export default function ProejctCard(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgLink} className="img"></img>
      </div>
      <div className="card-details">
        <h2 className="card-name">{props.name}</h2>
        <p className="tech">Tech</p>
        <p className="card-tech">{props.tech}</p>
        <div className="card-btns">
          <a href={props.link} className="card-btn-link" target="_blank">
            Live Link
          </a>
          <a href={props.link} className="card-btn-github" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
