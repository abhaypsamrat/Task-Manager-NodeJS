const notFound = (req, res) => res.status(404).send('Page does not exit')

module.exports = notFound;