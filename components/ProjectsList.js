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
    <style jsx>
      {`
      .tags-container {
        padding: 48px 5px;
      }

      .tags-wrapper {
        position: relative;
        padding-left: 16px;
        padding-right: 16px;
        margin-left: auto;
        margin-right: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        max-width: 900px;
      }

      .project-tags {
        margin: 0;
        padding: 0;
      }

      li {
        border-radius: 5px;
        background-color: #f9fafa;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 5px 10px;
        margin-right: 16px;
        margin-top: 16px;
      }

      a {
        font-size: 22px;
        font-weight: 600;
        color: #2e3333;
        text-decoration: none;
      }
      `}
      </style>
  </div>

)