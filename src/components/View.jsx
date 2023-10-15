import React, { useEffect, useState } from 'react';
import VedioCard from '../components/VedioCard'
import { Col, Row } from 'react-bootstrap'
import { getAllvedios } from '../services/allAPI';
function View(uploadVedioServerResponse) {
  const[removeVedio,setRemoveVedio]=useState(false)
  
  const [allVideos, setAllVideos] = useState([])
  const getAllUploadedVideos = async () => {
    const { data } = await getAllvedios()
    setAllVideos(data)
  }
  useEffect(() => {
    getAllUploadedVideos()
    setRemoveVedio(false)
  }, [uploadVedioServerResponse,removeVedio])
  // console.log(allVideos);

  return (
    <>
      <Row>
        {
          allVideos.length>0?
          allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <VedioCard displayData={video} setRemoveVedio={setRemoveVedio} />
          </Col>
          ))
          :
          <p className='fw-bolder '></p>
        }
      </Row>
    </>

  )
}

export default View