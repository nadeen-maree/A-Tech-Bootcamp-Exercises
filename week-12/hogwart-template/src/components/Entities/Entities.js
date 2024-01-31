import React from 'react';
import Entity from './Entity';
import './Entities.css';
import { useParams, Link } from 'react-router-dom';

const Entities = ({ getCategoryData }) => {
  const { category } = useParams();

  return (
    <div className="entity-list">
      {getCategoryData(category).map((entity, i) => (
        <Link key={i} to={`/wiki/${category}/${entity.name}`}>
          <Entity name={entity.name} img={entity.img} level={entity.level} />
        </Link>
      ))}
    </div>
  );
}

export default Entities;
