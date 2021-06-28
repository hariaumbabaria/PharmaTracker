import { Form, Button } from 'react-bootstrap';
import {BsUpload} from 'react-icons/bs';


const Upload = () => {
    return (
        <div style = {{display: 'flex', alignItems: 'center'}}>
            <div style={{ display: 'block', 
            width: '30%',
            margin: '200px auto',
            borderRadius: '5px',
            background: 'rgba(255,255,255, 0.15)',
            padding: 30,
            }}>
                <h4 style={{color: '#ffffff', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 30}}>
                    <BsUpload style={{color: '#ffffff', fontSize: 20}} className="mr-2"/>
                    Upload
                </h4>
                <Form>
                    <Form.Group controlId="formFileLg" className="my-3" style={{color:'#fff', marginLeft: '25%'}}>
                        <Form.Control type="file" size="lg" style={{color:'#fff'}} />
                    </Form.Group>
                    <Button size="lg" variant="success" type="submit" style={{marginLeft: '40%', marginTop: 20}}>
                        Upload
                    </Button>
                </Form>
            </div>
        </div>
    )
}


export default Upload;