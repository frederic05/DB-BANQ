import {
    Col,
    Card,
    Button,
    CardTitle,
    CardHeader,
    Modal, ModalHeader, ModalBody, ModalFooter
  } from 'reactstrap'
  import { UserPlus } from 'react-feather'
  import { Fragment, useState } from 'react'


const Addcompte = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => { setModal(!modal) }

    return (
        <>
        <Card>
                <CardHeader style={{backgroundColor: '#7367f0'}}>
                <Col lg='9' sm='6'>
                <CardTitle tag='h4' style={{color: '#FFFFFF'}}> <UserPlus />&nbsp;  Gestion des comptes utilisateurs</CardTitle>
                </Col>

                <Col lg='3' sm='6'>
                    <Button.Ripple color='warning' onClick={() => toggleModal()}>
                        <UserPlus size={14} />
                       
                        <span className='align-middle ms-25'>Ajoutez un utilisateur</span>
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
                  <p style={{color: '#FFFFFF', fontSize: '22px'}}> <UserPlus size={25} /> &nbsp;&nbsp;&nbsp; Ajoutez un nouvel utilisateur</p>
              </ModalHeader>
              <ModalBody>
                    <Fragment>
                            <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </p>
                            <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                            </p>     
                    </Fragment>
              </ModalBody>
              <ModalFooter>
                    <Button color='danger' onClick={() => toggleModal()} outline>
                    Fermer
                    </Button>

                    <Button color='primary' outline>
                    valider
                    </Button>               
              </ModalFooter>
        </Modal>

        </>
    )

}

export default  Addcompte