import Link from 'next/link'

export default () => (
  <div>
    <Link prefetch href="/"><a>Cyrus Goh</a></Link>
    <style jsx>
    {`
      a {
        color: white;
        font-weight: 500;
        text-decoration: none;
        text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 0px;
      }
    `}
    </style>
    <style jsx global>
      {`
        .main {
          padding: 25px 50px;
        }

        a {
          color: white;
          text-decoration: none;
        }

        @media (max-width: 500px) {
          .main {
            padding: 25px 15px;
          }
        }
      `}
      </style>
  </div>

)