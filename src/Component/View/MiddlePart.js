import React,{Component} from 'react'
import {Carousel,Caption,Item} from 'react-bootstrap'
class MiddlePart extends Component{
    render(){
        return(
            <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.lovepik.com/photo/50129/0056.jpg_wh300.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/children-cheering-in-classroom-picture-id1148218795?s=612x612"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://t4.ftcdn.net/jpg/01/78/07/39/360_F_178073900_VRUsjCxP0Bt1bw4vlW3ib43ldXEP2sAN.jpg"
      alt="Third slide" />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
            </div>
        )
    }
}
export default MiddlePart;