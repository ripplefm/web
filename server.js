const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/static/*', app.serveStatic);
    server.get('/stations/:slug', (req, res) => {
      const actualPage = '/stations';
      const queryParams = { slug: req.params.slug };
      return app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => app.handleRequest(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('listening...');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
