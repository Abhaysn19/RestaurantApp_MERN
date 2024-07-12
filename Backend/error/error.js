//for handling the errors
class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

export const errorMiddleware = (err,req,res,next) => {
    err.message = err.message || "Internal Server Error";
    err.statuscode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}

export default ErrorHandler;