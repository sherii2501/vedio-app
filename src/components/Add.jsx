import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { uploadVedio } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVedioServerResponse}) {
  const [video,setVideo] =useState({
    id:"",caption:"",url:"",embedLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedLink =(e)=>{
    const {value}=e.target
    if(value){
      const link =`https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})  
    }else{
      setVideo({...video,embedLink:""})
    }
  }
  const handleUpload = async()=>{
    const{id,caption,url,embedLink}=video
    if(!id || !caption || !url || !embedLink){
      toast.warning("please fill the form completely!!!")
    }else{
      const response = await uploadVedio(video)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`'${response.data.caption}'vedio uploaded successfully`)
        setUploadVedioServerResponse(response.data)
        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })
        // hide modal
        handleClose()
      }else{
        // console.log(response);
        toast.error("cannot perform the action... please try after some time ")
      }
    }
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'> <i className='fa-solid fa-circle-plus fs-5'></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following Details !!!</p>

          <Form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Vedio Link" onChange={getEmbedLink}  />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload}  className="">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
       />
    </>
  )
}

export default Add

// https://www.youtube.com/embed/_CY1OVG3cHI