import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

// user registration
export const registerAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/user/register`, user, "");
};

// user login
export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/user/login`, user, "");
};

// add project
export const addProjectAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${BASE_URL}/project/add`, reqBody, reqHeader);
};

// get home projects
export const homeProjectsAPI = async () => {
  return await commonAPI("GET", `${BASE_URL}/projects/home-projects`, "", "");
};

// all projects with query parameter(searchkey)
export const allProjectsAPI = async (searchKey, reqHeader) => {
  return await commonAPI(
    "GET",
    `${BASE_URL}/projects/all?search=${searchKey}`,
    "",
    reqHeader
  );
};

// user projects
export const userProjectsAPI = async (reqHeader) => {
  return await commonAPI("GET", `${BASE_URL}/user/all-projects`, "", reqHeader);
};

// edit project
export const editProjectAPI = async (projectId, reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${BASE_URL}/projects/edit/${projectId}`,
    reqBody,
    reqHeader
  );
};

// delete project use reqbody as {} instead of "" for delete only
export const deletePojectAPI = async (projectId, reqHeader) => {
  return await commonAPI(
    "DELETE",
    `${BASE_URL}/projects/remove/${projectId}`,
    {},
    reqHeader
  );
};

// update/edit user
export const editUserAPI = async (reqBody, reqHeader) => {
  return await commonAPI("PUT", `${BASE_URL}/user/edit/`, reqBody, reqHeader);
};
