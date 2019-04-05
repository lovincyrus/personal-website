export default () => (
    <div className="projects-container">
      <a href="http://cyrusgoh.com" target="_blank" rel="noopener noreferrer">
        <div className="projects-wrapper">
          <div className="project">
            <p className="name">name</p>
            <p className="description">description</p>
            <p className="tags">react</p>
          </div>
        </div>
      </a>
      <a href="http://cyrusgoh.com" target="_blank" rel="noopener noreferrer">
        <div className="projects-wrapper">
          <div className="project">
            <p className="name">name</p>
            <p className="description">description</p>
            <p className="tags">react</p>
          </div>
        </div>
      </a>
      <a href="http://cyrusgoh.com" target="_blank" rel="noopener noreferrer">
        <div className="projects-wrapper">
          <div className="project">
            <p className="name">name</p>
            <p className="description">description</p>
            <p className="tags">react</p>
          </div>
        </div>
      </a>
      <a href="http://cyrusgoh.com" target="_blank" rel="noopener noreferrer">
        <div className="projects-wrapper">
          <div className="project">
            <p className="name">name</p>
            <p className="description">description</p>
            <p className="tags">react</p>
          </div>
        </div>
      </a>
      
    <style jsx>
    {`
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
        transition: all 0.2s ease-out 0s;
      }

      .project {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 16px;
      }

      .name {
        font-size: 14px;
        color: rgb(92, 97, 102);
      }

      .description {
        font-size: 18px;
        color: rgb(0, 0, 0);
        font-weight: 600;
        margin-bottom: 8px;
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
  </div>
)