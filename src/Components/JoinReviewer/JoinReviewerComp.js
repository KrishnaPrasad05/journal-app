import React, { useContext, useState } from 'react';
import { Breadcrumb, Button, Container, Form, Modal, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import AdminHeader from '../Admin/Adminheader';
import FooterAdmin from '../Admin/FooterAdmin';
import TopButton from '../TopButton';

function JoinReviewerComp() {
    const [formData, setFormData] = useState({
        reviewerName: '',
        reviewerDesignation: '',
        reviewerCollege: '',
        reviewerCountry: '',
        reviewerPic: '',
        reviewerResume: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const { variableValue, setVariableValue } = useContext(AppContext);

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch(`${variableValue}/reviewers`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setFormData({
                        reviewerName: '',
                        reviewerDesignation: '',
                        reviewerCollege: '',
                        reviewerCountry: '',
                        reviewerPic: '',
                        reviewerResume: ''
                    });
                    setShowModal(true);
                } else {
                    console.error('Failed to submit form data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.reviewerName) errors.reviewerName = 'Name is required';
        if (!data.reviewerDesignation) errors.reviewerDesignation = 'Designation is required';
        if (!data.reviewerCollege) errors.reviewerCollege = 'College Name is required';
        if (!data.reviewerCountry) errors.reviewerCountry = 'Country is required';
        if (!data.reviewerPic) errors.reviewerPic = 'Profile Picture URL is required';
        if (!data.reviewerResume) errors.reviewerResume = 'Resume URL is required';
        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };

    const handleReset = () => {
        setFormData({
            reviewerName: '',
            reviewerDesignation: '',
            reviewerCollege: '',
            reviewerCountry: '',
            reviewerPic: '',
            reviewerResume: ''
        });
        setFormErrors({});
    };

    return (
        <div>
            <TopButton />
            <AdminHeader />
            <Breadcrumb style={{ backgroundColor: '#E8E7E7' }}>
                <Breadcrumb.Item style={{ marginLeft: '20px' }}><Link to="/admin-home">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Add Reviewer</Breadcrumb.Item>
            </Breadcrumb>
            <Container className='w-75'>
                <Row>
                    <h1 style={{ color: '#A01E1E', textAlign: 'center', marginBottom: '1rem' }}>Add reviewer</h1>
                    <Container style={{ backgroundColor: '#FBF3CB', padding: '20px', borderRadius: '10px', lineHeight: '3rem' }}>
                        <Row>
                            <Form.Group controlId="reviewerName">
                                <Form.Label style={{ fontWeight: 600 }}>Name<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                <Form.Control type="text" name='reviewerName' placeholder="Enter name" value={formData.reviewerName} onChange={handleInputChange} isInvalid={!!formErrors.reviewerName} />
                                <Form.Control.Feedback type="invalid">{formErrors.reviewerName}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="reviewerDesignation">
                                <Form.Label style={{ fontWeight: 600 }}>Designation<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                <Form.Control type="text" name='reviewerDesignation' placeholder="Enter designation" value={formData.reviewerDesignation} onChange={handleInputChange} isInvalid={!!formErrors.reviewerDesignation} />
                                <Form.Control.Feedback type="invalid">{formErrors.reviewerDesignation}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="reviewerCollege">
                                <Form.Label style={{ fontWeight: 600 }}>College Name<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                <Form.Control type="text" name='reviewerCollege' placeholder="Enter college name" value={formData.reviewerCollege} onChange={handleInputChange} isInvalid={!!formErrors.reviewerCollege} />
                                <Form.Control.Feedback type="invalid">{formErrors.reviewerCollege}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="reviewerCountry">
                                <Form.Label style={{ fontWeight: 600 }}>Country<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                <Form.Control type="text" name='reviewerCountry' placeholder="Enter country" value={formData.reviewerCountry} onChange={handleInputChange} isInvalid={!!formErrors.reviewerCountry} />
                                <Form.Control.Feedback type="invalid">{formErrors.reviewerCountry}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="reviewerPic">
                                <Form.Label style={{ fontWeight: 600 }}>Profile Picture<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                <Form.Control type="text" name='reviewerPic' placeholder="Enter URL for profile pic" value={formData.reviewerPic} onChange={handleInputChange} isInvalid={!!formErrors.reviewerPic} />
                                <Form.Control.Feedback type="invalid">{formErrors.reviewerPic}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="reviewerResume">
                                <Form.Label style={{ fontWeight: 600 }}>Resume<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                <Form.Control type="text" name='reviewerResume' placeholder="Enter URL for resume" value={formData.reviewerResume} onChange={handleInputChange} isInvalid={!!formErrors.reviewerResume} />
                                <Form.Control.Feedback type="invalid">{formErrors.reviewerResume}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col className='m-2'>
                                <Button type="button" className="btn btn-primary" style={{ backgroundColor: '#A01E1E', border: 0 }} onClick={handleSubmit}>Submit</Button>
                            </Col>
                            <Col className='m-2'>
                                <Button type="button" className="btn btn-primary" style={{ backgroundColor: '#E8E7E7', border: '1px solid black', color: 'black' }} onClick={handleReset}>Reset</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>

            {/* Success Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your form has been submitted successfully.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <FooterAdmin />
        </div>
    );
}

export default JoinReviewerComp;
