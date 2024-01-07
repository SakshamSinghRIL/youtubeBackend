class ApiResponse {
    constructor(statusCode,data,messgae = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.messgae = messgae
        this.statusCode = statusCode < 400
    }
}

export {ApiResponse}