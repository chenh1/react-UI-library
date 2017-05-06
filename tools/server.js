import storybook from '@kadira/storybook/dist/server/middleware';
import express from 'express';
import open from 'open';

const port = 8080;
const app = express();
const configDir = './.storybook';

app.use(storybook(configDir));

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});