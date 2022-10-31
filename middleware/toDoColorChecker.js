const middleware = () => {
    return (req, res, next) => {
        if (req.body && req.body.color) {
        if (req.body.color === 'red') {
                req.body.hexColor = '#ff0000';
            } else if (req.body.color === 'blue') {
                req.body.hexColor = "#0000ff";
            } else if (req.body.color === 'green') {
                req.body.hexColor = '#00ff00';
            };

        };

        next();
    };
};

module.exports = middleware;
