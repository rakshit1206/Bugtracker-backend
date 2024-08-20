import { NextFunction, Request, Response } from "express";
import {
  getAppDetails,
  getTopApps,
  searchApps,
  suggestApps,
} from "../services/googlePlay.service";
import ApiResponse from "../Response/ApiResponse";
import { BadRequest } from "../Errors/errors";
import userService from "../services/user.service";
import { AppDetails } from "../utils/types";

import { User } from "../entity/user.entity";


export const getAppInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { appId } = req.params;

  try {
    const appDetails: AppDetails = await getAppDetails(appId);
    if (!appDetails) throw new BadRequest("App not found", 404);

    return ApiResponse.successResponse(res, appDetails);
  } catch (error) {
    return next(error);
  }
};

export const searchAppInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { term } = req.query;

  if (!term) {
    throw new BadRequest("Search term is required", 400);
  }

  try {
    const results = await searchApps(term as string);
    return ApiResponse.successResponse(res, results);
  } catch (error) {
    return next(error);
  }
};

export const suggestAppInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { term } = req.query;

  if (!term) {
    throw new BadRequest("Search term is required", 400);
  }

  try {
    const results = await suggestApps(term as string);
    return ApiResponse.successResponse(res, results);
  } catch (error) {
    return next(error);
  }
};


export const topApp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const topApps = await getTopApps();
    return ApiResponse.successResponse(res, topApps);
  } catch (error) {
    return next(error);
  }
};

