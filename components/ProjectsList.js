import data from '../config/projects';

export default () => (
  <div>
    <div className="tags-container">
      <div className="tags-wrapper">
        <ul className="project-tags">
          {data.map(proj => (
            <li><a href={proj.url} target="_blank" rel="noopener noreferrer" key={proj.name}>{proj.name}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)