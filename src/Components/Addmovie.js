import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_todo } from '../Redux/Actions';
import { Button,Modal } from 'react-bootstrap';

const Addmovie = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[imgUrl,setTImgUrl]=useState("");
    const[rate,setRate]=useState("");
    
    const dispatch=useDispatch();
    const handleChange=()=>{
        dispatch(add_todo({id:Math.random(),title:title,imgUrl:imgUrl,description:description,rate:rate}));
        handleClose()
    }
    
  return (
    <div>
              <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label htmlFor='title'>title</label>
          <input type='text' value={title} placeholder='Enter the title here' onChange={(e)=>setTitle(e.target.value)}/>
          <label htmlFor='title'>description</label>
          <input type='text' value={description} placeholder='Enter the describtion here' onChange={(e)=>setDescription(e.target.value)}/>
          <label htmlFor='title'>imgUrl</label>
          <input type='text' value={imgUrl} placeholder='Enter the imgUrl here' onChange={(e)=>setTImgUrl(e.target.value)}/>
          <label htmlFor='title'>rate</label>
          <input type='text' value={rate} placeholder='Enter the rate here' onChange={(e)=>setRate(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addmovie