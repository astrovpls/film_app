
interface Html {
  children: string
  jsFiles: Array<string>
  cssFiles: Array<string>
  state: string
}

export function Html({
  children,
  jsFiles,
  cssFiles,
  state
}: Html) {
  return (
    `<html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        ${cssFiles.map((cssFiles) => (
          `<link rel="stylesheet" href="${cssFiles}"></link>`
        )).join('')}
        <script>
          window.__INITIAL_STATE__ = ${state}
        </script>
        <title>aaa</title>
      </head>
      <body>
        <div id="root">${children}</div>
        ${jsFiles.map((jsFile) => (
          '<script src="' + jsFile + '"></script>'
        )).join('')}
      </body>
    </html>`
  )
}
