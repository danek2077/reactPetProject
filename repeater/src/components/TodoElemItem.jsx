import React from 'react';
import { Link } from 'react-router-dom';
const TodoElemItem = ({elem,deletePost}) => {

    return (
      <div className="mr-20">
        <strong>{elem.id}</strong>
        <div className="flex">
          <strong className=" text-red-500">{elem.title}</strong>
          <div className="ml-1">{elem.body}</div>
        </div>
        <button onClick={() => deletePost(elem.id)}>delete</button>
      {!elem.checker ?
        <Link to={`/lists/${elem.id}`} className="block mt-2 mb-2">
          detail
        </Link> : ''
      }
        

      </div>
    );
};

export default TodoElemItem;