import React from 'react';
import Proptypes from 'prop-types';



export default function SbPresenter({ title, text, pageNum }) {
  return (
    <div className="sb-presenter" style={{border: 'solid 0.5px', marginTop: `24px`}}>
      <div>{title}</div>
      <div>{text}</div>
      <div>{pageNum}</div>
    </div>
  );
}

SbPresenter.Proptypes = {
  text: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  pageNum: Proptypes.number
};
