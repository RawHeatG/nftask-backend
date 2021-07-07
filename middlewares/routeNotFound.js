function routeNotFound(req, res) {
    res.status(404).json({ success: false, message: "Error 404, page doesn't exist"})
}

module.exports = { routeNotFound };