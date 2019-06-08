import data from "../config/projects";

export default function Projects() {
  const truncated = data.slice(0, 4);

  return (
    <React.Fragment>
      <div className="projects-container">
        {truncated.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className="projects-wrapper">
              <div className="project">
                <p className="name">{project.name}</p>
                <p className="description">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style jsx>
        {`
          .projects-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 104%;
            gap: 30px 30px;
            flex: 1 0 auto;
          }

          .projects-wrapper {
            position: relative;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
            background: #252525;
            border-radius: 8px;
            height: 166px;
          }

          .projects-wrapper:hover {
            -webkit-transform: translateY(-0.25rem);
            transform: translateY(-0.25rem);
            transition: all 0.4s ease;
          }

          .project {
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 16px;
          }

          .name {
            font-size: 18px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 8px;
          }

          .description {
            font-size: 16px;
            color: #858585;
            line-height: 1.4;
          }

          @media (max-width: 650px) {
            .projects-wrapper {
              height: 200px;
            }
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
