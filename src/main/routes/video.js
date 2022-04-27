const fs = require('fs');
const { resolve } = require('path');

module.exports = (router) => {
    router.get('/video/:video', async (req, res) => {
        const range = req.headers.range;
        if (!range) {
            res.status(400).send('Requires Range header');
        }

        const { video } = req.params;
        const videoPath = resolve(__dirname, '..', '..', '..', 'public');
        const videoSize = fs.statSync(`${videoPath}/${video}`).size;
        const CHUNK_SIZE = 10 ** 6;
        const start = Number(range.replace(/\D/g, ''));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength = end - start + 1;
        const headers = {
            'Content-Range': `bytes ${start}-${end}/${videoSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, headers);
        const videoStream = fs.createReadStream(`${videoPath}/${video}`, {
            start,
            end,
        });
        videoStream.pipe(res);
    });
};
