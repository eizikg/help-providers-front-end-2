import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Header, Icon, Modal, Label} from 'semantic-ui-react'

class newGroup extends Component {



  state={
    modalOpen: false,
    name: "",
    descripton: ""
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


   createGroup = (e) => {
     console.log("create group")
     this.props.createGroup({name: this.state.name, descripton: this.state.description})
     // this.handleClose()
     this.setState({ modalOpen: false, name: "", descripton: "" })
  }


// render(){
//   console.log(this.props)
//   return (
//   <Form>
//     <Form.Field>
//       <label>Name</label>
//       <input placeholder='give your group a name' name='name' value={this.state.name} onChange={this.changeHandler}/>
//     </Form.Field>
//     <Form.Field>
//       <label>description</label>
//       <input placeholder='what is your focus?' name='description' value={this.state.description} onChange={this.changeHandler} />
//     </Form.Field>
//      <Button type='submit' onClick={(e) => this.createGroup()}>Submit</Button>
//   </Form>
// )
// }
// }

render(){
return (
  <Modal
  trigger={<Button className="big" color='teal' onClick={this.handleOpen}>Create a New Group</Button>}
  centered={true}
  open={this.state.modalOpen}
  onClose={this.handleClose}
  basic
  size='small'
  >
<Modal.Header>create a new group</Modal.Header>
<Modal.Content image>
  <Form>
    <h3>New Group</h3>
      <Form.Field>
        <label>Neighborehood</label>
        <input placeholder='city or neighborhood' name='name' value={this.state.name} onChange={(e) => this.changeHandler(e)}/>
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input placeholder='Description' name='descripton' value={this.state.description} onChange={(e) => this.changeHandler(e)}/>
      </Form.Field>
      <Label type='submit' onClick={this.handleClose}>Cancel</Label>
      <Button color='teal' btn btn-primary type='submit' onClick={this.createGroup}>Submit</Button>
  </Form>
  <Modal.Description>
      <Header>Default Profile Image</Header>
  </Modal.Description>
</Modal.Content>
</Modal>
)}
}

export default newGroup
