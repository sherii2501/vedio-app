import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// upload a vedio
export const uploadVedio = async(reqBody)=>{
    // call post http request to http://localhost:4000/vedios to add video in json server and return response to add component 
    return await commonAPI("POST",`${serverURL}/vedios`,reqBody)
}

// get all vedios from json server
export const getAllvedios=async()=>{
    // call post http request to http://localhost:4000/vedios to get video from json server and return response to view component 
    return await commonAPI("GET",`${serverURL}/vedios`,"")
}

// get a video from json server
export const getAVideo=async(id)=>{
    // call post http request to http://localhost:4000/vedios/id to get video from json server and return response to videoCard component 
    return await commonAPI("GET",`${serverURL}/vedios/${id}`,"")
}

// delete a video from json server
export const deleteAVideo=async(id)=>{
    // call post http request to http://localhost:4000/vedios/id to get video from json server and return response to videoCard component 
    return await commonAPI("DELETE",`${serverURL}/vedios/${id}`,{})
}

// store watching vedio history to json server
export const addToHistory = async(videoDetails)=>{
    // make post http request to http://localhost:4000/history to add video from json server and return response to videoCard component 
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}

// get all watching vedio history to json server
export const getAllHistory = async()=>{
    // make post http request to http://localhost:4000/history to get video from json server and return response to watch history component 
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete all watching vedio history to json server
export const deleteHistory = async(id)=>{
    // make post http request to http://localhost:4000/history to delete video from json server and return response to watch history component 
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// add a category from json server
export const addCategory = async(reqBody)=>{
    // make post http request to http://localhost:4000/categories to add category from json server and return response to category component 
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}

// get a category from json server
export const getAllCategory = async()=>{
    // call post http request to http://localhost:4000/categories to get all category from json server and return response to category component 
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

// remove a category from json server
export const deleteCategory = async(id)=>{
    // call post http request to http://localhost:4000/categories to delete particular category from json server and return response to category component 
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

// update a category from json server
export const updateCategory = async(id,body)=>{
    // call put http request to http://localhost:4000/categories to update particular category from json server and return response to category component 
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}







