import { Response } from "express";

class ApiResponse {
  successResponse = (res: Response, data: any) => {
    return res.json({
      success: true,
      data,
    });
  };

  unAuthorizedResponse = (res: Response, data: any) => {
    res.statusCode = 401;
    return res.json({ code: 401, success: false, data });
  };

  badRequest = (res: Response, data?: any) => {
    res.statusCode = 400;
    return res.json({
      code: 400,
      success: false,
      data,
    });
  };

  conflictRequest = (res: Response, data?: any) => {
    return res.json({
      code: 409,
      success: false,
      data,
    });
  };

  internalServerError = (res: Response, data: any) => {
    console.log(data);

    res.statusCode = 500;
    return res.json({
      code: 500,
      success: false,
      message: data.message,
      stack: data.stack,
    });
  };
}

export default new ApiResponse();
