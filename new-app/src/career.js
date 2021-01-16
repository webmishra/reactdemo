import React from 'react';
import data from "./Jsondata/data";
import { Accordion, Card } from 'react-bootstrap'
const socialMediaList = data.SocialMedias;
const experiencesList = data.Experiences;
const Career = () => {
    return (

        <div>
            <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul> 
            {
                experiencesList.map((experience, i) => {
                    return (
                         
                        <Accordion defaultActiveKey={0}>
                            <card key={i}>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey={i+1}>
                                    {experience.companyName}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={i+1} className={"accord" + i}>
                                    <Card.Body>
                                        <div>
                                            <div>
                                                <a href={experience.url}>{experience.companyName}</a>
                                            </div>
                                            {experience.roles.map(function (role, i) {
                                                return <div key={i}>
                                                    <h5>{role.title}</h5>
                                                    <span>{role.startDate}</span>
                                                    <span>{role.location}</span>
                                                    <p>{role.description}</p>
                                                </div>
                                            })}
                                            {experience.skill.map(function (skills, i) {
                                                return <div key={i}>
                                                    <div>{skills.Area}</div>
                                                    <div>{skills.SkillSet.Name}</div>
                                                    <div>{skills.SkillSet.Hot}</div>
                                                </div>
                                            })}

                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                                
                            </card>

                        </Accordion>

                    );
                })
            }
        </div>
    );
}
export default Career;

