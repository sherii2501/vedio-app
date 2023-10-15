import React,{useState} from 'react'
import {Card,Modal} from 'react-bootstrap';
import { addToHistory, deleteAVideo } from '../services/allAPI';

function VedioCard({displayData,setRemoveVedio,insideCategory}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const{caption,embedLink}=displayData
    let today=new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let VideoDetails={
      caption,embedLink,timeStamp
    }
    await addToHistory(VideoDetails)
  }

  const deleteVedio = async(id)=>{
    // api call 
    const response = await deleteAVideo(id)
    setRemoveVedio(true)
  }
  const dragStarted=(e,id)=>{
    console.log("drag started...  video Id: "+id);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
    <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img variant="top" height={'180px'} onClick={handleShow} src={displayData.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          {
          insideCategory?"" :<button onClick={()=>deleteVedio(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
         }
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vedio caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height="360" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default VedioCard