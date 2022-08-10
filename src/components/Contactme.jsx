import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

function Contactme() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_smvpfhk', 'template_5gk0kw5', e.target, 'BH4aS8vM7zKyYE1Kn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <Form style={{display:"flex",flexDirection: 'column',alignItems:"center"}} onSubmit={sendEmail}>
         <Form.Label style={{color:"white",fontSize:"35px"}}>Get in touch with me</Form.Label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:"white"}}>Name</Form.Label>
        <Form.Control type="text" name="name"  placeholder="Enter your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:"white"}}>Email address</Form.Label>
        <Form.Control type="email" name="email"  placeholder="Enter your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:"white"}}>Subject</Form.Label>
        <Form.Control type="text" name="Subject"  placeholder="Enter Subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{color:"white"}}>Your message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contactme;