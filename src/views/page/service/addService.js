import {
    Col,
    Card,
    Button,
    CardTitle,
    CardHeader,
    Modal, ModalHeader, ModalBody, ModalFooter,
     CardBody, Row, Input, Form, Label 
  } from 'reactstrap'
  import { CornerRightUp } from 'react-feather'
  import { Fragment, useState } from 'react'


const AddService = () => {

    const [modal, setModal] = useState(false)
    const toggleModal       = () => { setModal(!modal) }

    return (
        <>
        <Card>
                <CardHeader style={{backgroundColor: '#7367f0'}}>
                        <Col lg='9' sm='6'>
                            <CardTitle tag='h4' style={{color: '#FFFFFF'}}> <CornerRightUp />&nbsp;  Gestion des services</CardTitle>
                        </Col>

                        <Col lg='3' sm='6'>
                            <Button.Ripple color='warning' onClick={() => toggleModal()}>
                                <CornerRightUp size={14} />                           
                                <span className='align-middle ms-25'>Ajoutez un service</span>
                            </Button.Ripple>
                        </Col>               
                </CardHeader>
        </Card>
             

        <Modal
              isOpen={modal}
              toggle={() => toggleModal()}
              className='modal-dialog-centered'
              size="lg"
            >
              <ModalHeader toggle={() => toggleModal()} style={{backgroundColor: '#7367f0', color: '#FFFFFF'}}>
                  <p style={{color: '#FFFFFF', fontSize: '18px'}}> <CornerRightUp size={25} /> &nbsp;&nbsp;&nbsp; Ajoutez un nouveau service</p>
              </ModalHeader>
              <ModalBody>
                    <Fragment>
                            <CardBody>
                                    <Form>
                                    <Row>
                                        <Col md='6' sm='12' className='mb-1'>
                                        <Label className='form-label' for='nameMulti'>
                                            Nom *
                                        </Label>
                                        <Input type='text' name='name' id='nameMulti' placeholder='First Name' />
                                        </Col>
                                        <Col md='6' sm='12' className='mb-1'>
                                        <Label className='form-label' for='lastNameMulti'>
                                            Prenoms *
                                        </Label>
                                        <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' />
                                        </Col>
                                        <Col md='6' sm='12' className='mb-1'>
                                        <Label className='form-label' for='cityMulti'>
                                            Ville *
                                        </Label>
                                        <Input type='text' name='city' id='cityMulti' placeholder='City' />
                                        </Col>
                                        <Col md='6' sm='12' className='mb-1'>
                                        <Label className='form-label' for='CountryMulti'>
                                            pays *
                                        </Label>
                                        <Input type='text' name='country' id='CountryMulti' placeholder='Country' />
                                        </Col>
                                        <Col md='6' sm='12' className='mb-1'>
                                        <Label className='form-label' for='CompanyMulti'>
                                            Commune
                                        </Label>
                                        <Input type='text' name='company' id='CompanyMulti' placeholder='Company' />
                                        </Col>
                                        <Col md='6' sm='12' className='mb-1'>
                                        <Label className='form-label' for='EmailMulti'>
                                            Email
                                        </Label>
                                        <Input type='email' name='Email' id='EmailMulti' placeholder='Email' />
                                        </Col>
                                        <Col sm='12'>
                                        <div className='d-flex flex-row-reverse'>
                                            <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()} style={{marginLeft : '10px'}}>
                                            Soumettre
                                            </Button>
                                            <Button outline color='secondary' type='reset'>
                                            Réinitialiser
                                            </Button>
                                        </div>
                                        </Col>
                                    </Row>
                                    </Form>
                            </CardBody>     
                    </Fragment>
              </ModalBody>
              <ModalFooter>
                    <Button color='danger' onClick={() => toggleModal()} outline>
                    Fermer
                    </Button>            
              </ModalFooter>
        </Modal>

        </>
    )

}

export default  AddService