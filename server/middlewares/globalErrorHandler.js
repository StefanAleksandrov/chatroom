const globalErrorHandler = function(err, req, res, next) {
    if (err.errors) err.message = err.errors[Object.keys(err.errors)[0]].properties.message;
    else err.message || "Something went wrong!";
    
    err.status= err.status || 500;

    res.status(err.status).json({'error_message': err.message}).send();
    next();
}

module.exports = globalErrorHandler;