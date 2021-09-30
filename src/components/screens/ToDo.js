import React from "react";

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            input: "",
        };
    }
    removeItem = (id) => {
        let new_items = this.state.items.filter((item) => item.id !== id);
        this.setState({items: new_items});
    }

    renderItems = () => {
        return this.state.items.map((item) => (
            <li  key={item.id}>
                {item.title}<button onClick={() => this.removeItem(item.id)}>Delete</button>
            </li>
            ));
    };

    updateItem = () => {
        let new_item = {
            id: this.state.items.length,
            title: this.state.input,
        };
        if (this.state.input){

            this.setState({
                items: [...this.state.items,new_item],
                input: "",
            })
        }
    }
    render () {
        return (
            <>
                <h1>My To Do List</h1>
                <ul>{this.renderItems()}</ul>
                <input placeholder="New Item" value={this.state.input} onChange={(e) => {this.setState({input: e.target.value})}} />
                <button onClick={this.updateItem}>Add New</button>
            </>
        );
    }
}

export default ToDo;