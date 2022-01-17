import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <Document>
      <Outlet />
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
    <Scripts />
    <Link to="/posts">Posts</Link>
    {process.env.NODE_ENV === "development" ?  <LiveReload /> : null}
  </body>
</html>
)
}