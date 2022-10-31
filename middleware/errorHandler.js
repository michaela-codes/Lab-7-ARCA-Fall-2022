const middleware = () => {
    return (err, req, res, next) => {
        console.error("ERROR");
        res.status(500).send('Sorry, something went wrong.');

    }
}

module.exports = middleware;