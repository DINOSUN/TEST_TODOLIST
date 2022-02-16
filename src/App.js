import React from 'react';
import Form from './components/Form';
import List from './components/List';

class App extends React.Component{
  state = {
    data : [{todo:"C++"}]

 };

 handleRemove = index =>{
   const {data} = this.state;
   this.setState({
     data: data.filter((item,i) =>{
       return i !== index
     })
   })
 };


 handleOnEdit = (editVal ,index)=>{
   const {data} = this.state;
   data.forEach((item,i)=>{
     if(i === index){
       item.todo = editVal;
     }
   });
   this.setState({data: data});
 }

handleSubmit = (newVal) =>{
 this.setState({data: [...this.state.data, newVal]})
}

//localstorage
componentDidUpdate(){
  localStorage.setItem('dataStroe',JSON.stringify(this.state.data));
}

componentDidMount(){
  const dataStroe = JSON.parse(localStorage.getItem('dataStore'));
  if(dataStroe !== null){
    this.setState({data: dataStroe});
  }
}

  render(){
    const {data} = this.state;
    return(
      <div className="app">
        <Form onSubmit={this.handleSubmit} />
        <h1>To Do List</h1>  
        <List todo={data}
        onDelete = {this.handleRemove}
        onEdit = {this.handleOnEdit}
         />
        </div>
    );
  };
}

export default App;
