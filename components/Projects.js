import data from '../config/projects';

export default function Projects() {
  const truncated = data.slice(0, 4);

  return (
  <React.Fragment>
    <div className="projects-container">
      {truncated.map((project, index) => (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <div className="projects-wrapper">
            <div className="project" key={index}>
              <p className="name">{project.name}</p>
              <p className="description">{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
    {/* <div className="view-more">
      <button className="view-more-btn">View all projects</button>
    </div> */}
      
    <style jsx>
    {`
      .view-more {
        margin-top: 32px;
        width: 100%;
        -webkit-box-pack: center;
        justify-content: center;
        display: flex;
      }

      .view-more-btn {
        width: 100%;
        font-weight: 600;
        color: rgb(92, 97, 102);
        background: rgb(236, 237, 238);
        padding: 12px;
      }

      .projects-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 30px 30px;
        flex: 1 0 auto;
      }

      .projects-wrapper {
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
        background: rgb(255, 255, 255);
        border-radius: 8px;
        height: 150px;
      }

      .project {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 16px;
      }

      .name {
        font-size: 18px;
        color: rgb(0, 0, 0);
        font-weight: 600;
        margin-bottom: 8px;
      }

      .description {
        font-size: 16px;
        color: rgb(33, 35, 37);
        line-height: 1.4;
      }

      .tags {
        background: #303030;
        border: none;
        border-radius: 3px;
        color: #fefefe;
        font-size: 14px;
        font-weight: 700;
        padding: 10px 12px;
      }

      @media (max-width: 500px) {
        .projects-container {
          display: grid;
          grid-template-columns: none;
          width: 100%;
          gap: 30px 30px;
          flex: 1 0 auto;
        }
      }
    `}
    </style>
  </React.Fragment>
  );
}