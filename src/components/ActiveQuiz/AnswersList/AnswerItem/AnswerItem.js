import React from 'react';
import './AnswerItem.css'

const AnswerItem = (props) => {

  const cls = ["AnswerItem"]

  //console.log('AnswerItem state: ', props.state)
  if (props.state) {
    cls.push(props.state)
  }
  //console.log('AnswerItem cls: ', cls.join(' '))
  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem
