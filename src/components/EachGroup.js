// import React, { Component } from 'react';
//
// const EachGroup = (props) =>{
//
//
//
//   console.log(props)
//
//   // return (
//   //
//   //
// 	//              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
// 	// 				            <div className="box-part text-center">
//   //                       <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
// 	//                        <div className="title">
//   //   							                <h4>{props.groupData.name}</h4>
// 	//                       </div>
// 	// 	              <div className="text">
// 	// 					         <span>{props.groupData.description}</span>
// 	//                </div>
// 	// 				       <button id={props.groupData.id} className="fbtn btn-primary btn-block" onClick={() => props.JoinGroup(props.groupData.id)} >Join Group</button>
//   // 					      </div>
//   // 				            </div>
//   //         )
//   //         }
//
// export default EachGroup
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const EachGroup = (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='http://www.austingalano.org/wp-content/uploads/2015/09/groups.jpg' />
        <Card.Header>{props.groupData.name}</Card.Header>
        <Card.Meta>{props.groupData.volounteers_count} Members</Card.Meta>
        <Card.Description>
          {props.groupData.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => props.JoinGroup(props.groupData.id)}>
            {props.owner ? "View": "Join"}
          </Button>
        </div>
      </Card.Content>
    </Card>
)}

export default EachGroup
