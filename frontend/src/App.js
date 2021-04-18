import './App.css';
import React, { useState } from "react";
import { Button, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
  const [results, setResults] = useState('');
  const [A, setA] = useState(true);
  const [B, setB] = useState(true);
  const [C, setC] = useState(true);
  const [D, setD] = useState(0);
  const [E, setE] = useState(0);
  const [F, setF] = useState(0);
  const [algorithm, setAlgorithm] = useState('base');


  const handleSubmit = (event) => {
    var endpoint = `http://localhost:3001/wilton/${algorithm}/?A=${A}&B=${B}&C=${C}&D=${D}&E=${E}&F=${F}`;
    axios.get(endpoint).then((res) => {
      const data = res.data;
      if (data.success) {
        setResults(`H: ${data.data.H} K: ${data.data.K}`);
      } else {
        setResults(data.msg);
      }
    });
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <Form>
          <h4>Wilton Cross Assignment</h4>
          <Form.Row className="align-items-center mb-2">
            <Col xs={4} className="text-right">
              <Form.Label>A: </Form.Label>
            </Col>
            <Col>
              <Form.Check inline label="true" name="A" type='switch' id="paramA" checked={A}
                          onChange={() => setA(!A)} />
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center mb-2">
            <Col xs={4} className="text-right">
              <Form.Label>B: </Form.Label>
            </Col>
            <Col>
              <Form.Check inline label="true" name="B" type='switch' id="paramB" checked={B}
                          onChange={() => setB(!B)} />
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center mb-2">
            <Col xs={4} className="text-right">
              <Form.Label>C: </Form.Label>
            </Col>
            <Col>
              <Form.Check inline label="true" name="C" type='switch' id="paramC" checked={C}
                          onChange={() => setC(!C)} />
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center mb-2">
            <Col xs={4} className="text-right">
              <Form.Label>D: </Form.Label>
            </Col>
            <Col>
              <Form.Control required type="float" id="D" name="D" value={D}
                            onChange={(e) => setD(e.target.value)} />
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center mb-2">
            <Col xs={4} className="text-right">
              <Form.Label>E: </Form.Label>
            </Col>
            <Col>
              <Form.Control required type="number" id="E" name="E" value={E}
                            onChange={(e) => setE(e.target.value)} />
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center mb-2">
            <Col xs={4} className="text-right">
              <Form.Label>F: </Form.Label>
            </Col>
            <Col>
              <Form.Control required type="number" id="F" name="F" value={F}
                            onChange={(e) => setF(e.target.value)} />
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center mb-2">
            <Col xs={4} className="text-right">
              <Form.Label>Algorithm: </Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" custom value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                <option value="base">Base</option>
                <option value="custom1">Custom1</option>
                <option value="custom2">Custom2</option>
              </Form.Control>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="text-right">
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>

        <h6>Result</h6>
        <Form.Control type="text" readOnly value={results} />
      </div>
    </div>
  );
}

export default App;
