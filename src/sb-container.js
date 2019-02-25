import React from 'react';
import SbPresenter from './components/sb-presenter';
import bg from './assets/bg.jpg';

export default class SbContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 3,
      allText: [
        { title: 'abc', text: 'ggg', pageNum: 10 },
        { title: 'abcd', text: 'fff', pageNum: 30 },
        { title: 'abce', text: 'hhh', pageNum: 5 }
      ]
    };
    this.incrementHandler = this.incrementHandler.bind(this);
  }
  
  incrementHandler(e) {
    const index = e.target.getAttribute('index');
    const newText = [ ...this.state.allText ];
    newText[index].pageNum ++;
    this.setState({
      ...this.state,
      allText: newText
    });
  }

  render() {
    return (
      <div id="container">
        <img src={bg} style={{ width: '100px' }}/>
        {this.state.allText.map((val, idx) => (
          <div key={idx}>
            <SbPresenter text={val.text} pageNum={val.pageNum} 
            title={val.title} onClick={this.incrementHandler}/>
            <button index={idx} onClick={this.incrementHandler}>+</button>
          </div>
        ))}
      </div>
    );
  }
};
