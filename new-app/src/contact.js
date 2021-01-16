import React from 'react';
import contact from "./Jsondata/contact";
import { Accordion, Card} from 'react-bootstrap'
const Contact = () => {
    return (
        <div className="row">
            {
                contact.map((contact, i) => {
                    return (
                        <div key={i} className="col-xs-12 col-sm-12">
                            
                            <Accordion className={"card_" + i}>
                                <card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey={i+1}>
                                        {contact.name}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={i+1}>
                                        <Card.Body>
                                            <div>User Name: {contact.username}</div>
                                            <div>Email: <a href={"mailto:" + contact.email}>{contact.email}</a></div>
                                            <div>Address: {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</div>
                                            <div>Geo Location: Leg{contact.address.geo.lat} Lang {contact.address.geo.lng}</div>
                                            <div>{contact.phone}</div>
                                            <div>website: <a href={"//www." + contact.website}>{contact.website}</a></div>
                                            <div>Company: {contact.company.name}</div>
                                            <div>{contact.company.catchPhrase}</div>
                                            <div>{contact.company.bs}</div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </card>
                            </Accordion>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Contact;