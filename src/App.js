import React, { useState } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './App.css';
// import Draggable from 'react-draggable';
const list = [
  {
    id: '1',
    name: 'python',
    
  },
  {
    id: '2',
    name: 'java',
    
  },
  {
    id: '3',
    name: 'javascript',
    
  },
  {
    id: '4',
    name: '.net',
    
  },
  {
    id: '5',
    name: 'rubi',
    
  }
]
function App() {
  const [characters, updateCharacters] = useState(list);

  const handleOnDragEnd=(result)=> {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items)
    updateCharacters(items);
  }
  
  return (
   <div>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
      {(provided) => (
      <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
        {characters.map((item, index)=>{
          return (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                {item.name}
              </li>
              )}
            </Draggable>
          )
        })}
          {provided.placeholder}
      </ul>
      )}
      </Droppable>
    </DragDropContext>
   </div>
  );
}

export default App;
