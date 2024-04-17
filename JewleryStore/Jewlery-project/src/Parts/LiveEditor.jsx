import Carousel from 'react-bootstrap/Carousel';


function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className={'ImageEditor'} style={{
    
      maxHeight: '100%',
      maxWidth: '100%'
    }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/gpic2.webp"
          alt="Second slide"
          style={{
            width: '50%',
            aspectRatio: '16/9',
          }}
        />
        {/* <Carousel.Caption className='editorText'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item style={{
        maxHeight: '100%',
      }}>
        <img
          className="d-block w-100"
          src="/2.jpg"
          alt="Third slide"
          style={{
            width: '80%',
            aspectRatio: '16/9',
          }}
        />

        
        
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{
        maxHeight: '100%',
      }}>
        <img
          className="d-block w-100"
          src="/gpic1.jpg"
          alt="Third slide"
          style={{
            width: '80%',
            aspectRatio: '16/9',
          }}
        />
        </Carousel.Item>
        <Carousel.Item style={{
        maxHeight: '100%',
      }}>
        <img
          className="d-block w-100"
          src="/pic-2.jpg"
          alt="Third slide"
          style={{
            width: '80%',
            aspectRatio: '16/9',
          }}
        />
        </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;