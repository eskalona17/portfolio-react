import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

class Resume extends React.Component {
    render(){
        return (
            <>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://i0.pngocean.com/files/556/742/534/avatar-youtube-8-ball-pool-user-avatar-thumb.jpg"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Fernando</h2>
                        <h4 style={{color: 'grey'}}>programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>texto de prueba y poner cosas</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>aqui poner mas cosas</p>
                        <h4>y mas cosas</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2002}
                            endYear={2006}
                            schoolName="my university"
                            SchoolDescription="una descripcion"
                        />
                        <Education 
                            startYear={2006}
                            endYear={2010}
                            schoolName="my 2university"
                            SchoolDescription="una descripcion"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2010}
                            endYear={2012}
                            jobName="eupraxia"
                            jobDescription="pues eso"
                        />
                         <h2>Skills</h2>
                        <Skills
                           skill="javascript"
                           progress={100}
                        />
                        <Skills
                           skill="react"
                           progress={80}
                        />
                        <Skills
                           skill="vue"
                           progress={55}
                        />
                        <Skills
                           skill="css"
                           progress={20}
                        />
                    </Cell>
                </Grid>
            </>
        )
    }
}

export default Resume