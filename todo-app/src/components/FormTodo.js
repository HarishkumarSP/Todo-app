import React,{useState} from 'react';
import { Button,Form } from 'react-bootstrap';

const FormTodo = ({ addTodo }) => {
    const [value,setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value){
            alert('Please make your list then give submit');
            return;
        } 
        addTodo(value);
        setValue('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} 
                onChange={e => setValue(e.target.value)} placeholder="Add new Todo" />
            </Form.Group>
            <Button variant="primary mb-3 mt-2" type="submit">Submit</Button>
        </Form>
    );
}

export default FormTodo
