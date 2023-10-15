import React from 'react'
import { Col, Row ,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={4}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta quae odio vero, quaerat distinctio. In, iure commodi. Repudiandae, sequi vel voluptatibus nam soluta excepturi quis illo officia recusandae sapiente.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get started <i class="fa-solid fa-arrow-right fa-beat"></i></button>
      </Col>
      <Col></Col>
      <Col lg={6}>
        <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
      </Col>
    </Row>
    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.gifer.com/Up2T.gif" />
      <Card.Body>
        <Card.Title>Managing vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86bf2795-ac3e-40f2-9851-6e141bb451c7/d2jqh9i-5beb8725-9f23-47b5-b16f-665482e63321.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2YmYyNzk1LWFjM2UtNDBmMi05ODUxLTZlMTQxYmI0NTFjN1wvZDJqcWg5aS01YmViODcyNS05ZjIzLTQ3YjUtYjE2Zi02NjU0ODJlNjMzMjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dw9z2QPh7_HF1IRHVZ_NQOWw5ZMMCSTOgnY6IthPNU0" />
      <Card.Body>
        <Card.Title>WatchHistory</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-between flex-column">
      <div className='container border rounded p-5 border-secondary mt-5 d-flex align-item-center justify-content-between w-100 mb-5'>
        <div className='col-lg-5'>
          <h3 className='mb-5 text-warning'>Simple,fast and poweful</h3>
          <h6 className='mb-3'> <span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis minima facilis animi cupiditate id, dolores suscipit labore, eum delectus nihil quis laudantium praesentium et. Tempore molestiae nulla possimus culpa? </h6>

          <h3 className='mb-5 text-warning'>Simple,fast and poweful</h3>
          <h6 className='mb-3'> <span className='fs-5 fw-bolder'>Categories vedio</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis minima facilis animi cupiditate id, dolores suscipit labore, eum delectus nihil quis laudantium praesentium et. Tempore molestiae nulla possimus culpa? </h6>

          <h3 className='mb-5 text-warning'>Simple,fast and poweful</h3>
          <h6 className='mb-3'> <span className='fs-5 fw-bolder'>Managing History </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis minima facilis animi cupiditate id, dolores suscipit labore, eum delectus nihil quis laudantium praesentium et. Tempore molestiae nulla possimus culpa? </h6>
        </div>
       <div className='vedio col-lg-6'> 
       <iframe width="550" height="615" src="https://www.youtube.com/embed/qN3wfuPYTI4" title="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>

      
      </div>
      </div>
    </>
  )
}

export default LandingPage