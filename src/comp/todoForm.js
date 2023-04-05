import React from 'react'

class TodoForm extends React.Component {
    state = {title: ''}
  
    handleChange = (event) => {
      this.setState({title: event.target.value})
    }
  
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
      }
    
      render() {
        return (
          <div style={{marginBottom: '32px'}}>
            <form onSubmit={(event) => {this.handleSubmit(event)}}>
              <input
                type='text'
                placeholder='Add your ToDo'
                style={{height: '66px', width: '40%', fontSize: '16px'}}
                onChange={(event) => {this.handleChange(event)}}
                value={this.state.title}
              />
          <button style={{height: '72px', fontSize: '16px'}}>
            Add ToDo
           </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;