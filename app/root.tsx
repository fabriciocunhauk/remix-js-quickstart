import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import globalStylesUrl from '~/styles/global.css'

export const meta: MetaFunction = () => {
const title: string = "New Remix App"
const description: string = "Blog built with remix"
const keywords: string = 'remix, react, typescript'

  return { 
    title,
    description,
    keywords,
  };
};

export const links = (url: string) => [{rel: 'stylesheet', href: globalStylesUrl}];

export default function App() {
  return (
    <Document>
      <Layout>
      <Outlet />
      </Layout>
    </Document>
  );
}

function  Document({children, title}: any) {
return (
  <html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <Meta />
    <Links />
  </head>
  <body>
    {children}
    <ScrollRestoration />
    {process.env.NODE_ENV === "development" ?  <LiveReload /> : null}
  </body>
</html>
)
}

function Layout({ children }: any) {
  return (
    <>
    <nav className="navbar">
      <Link to='/' className="logo">Remix</Link>

      <ul>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
      </ul>
      </nav>
      
      <div className="container">
        {children}
      </div>
      </>
  )
}