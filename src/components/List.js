import React from 'react';
import ListItem from './ListItem';

class List extends React.Component{
    
    render(){
       const {todo,onDelete,onEdit} = this.props;
        return(
            <ul>
               {
                    todo.map((item,index)=>{
                        return <ListItem
                        item={item.todo}
                        key={index}
                        handleDelete={() =>{onDelete(index)}}
                        handleEdit = {onEdit}
                        id={index}
                        />
                    })
               }

            </ul>
        );
    };
}

export default List;