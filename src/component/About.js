// import React, {useState} from 'react'

export default function About(props) {
  //  const [myState, setMyState]= useState({
  //    color: 'black',
  //    backgroundColor: 'white'
//})
let myState = {
  color: props.mode === 'dark' ? 'white' : '#042743',
  backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  
}
// const [btnMode, setBtnMode]= useState('Enable Dark mode')
// const toggleStyle= ()=>{
//     if(myState.color === 'black'){
//         setMyState({
//          color: 'white',
//          backgroundColor: 'black',
//          border: '1px solid white'
//         })
//         setBtnMode('Enable Light Mode')
//     }
//     else {
//          setMyState({
//          color: 'black',
//          backgroundColor: 'white'
//         })
//          setBtnMode('Enable Dark Mode')
//     }
//   }
  return (
    <div classNameName="container">
      <h1 className="my-3" style={ { color: props.mode === 'dark' ? 'white' : '#042743' } }>About Us</h1>
      <div className="accordion" id="accordionExample" style={myState}>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myState} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myState}>
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
    </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myState} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myState}>
        Textutils is a free character counter tool that provides instant character count & word count
        statistics for a given text. Textutils reports the number of words and characters.Thus it is 
        suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myState} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myState}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer,
        Safari and Opera. I suits to count character in facebook, blog, books, excel document, pdf document, essays,etc.
      </div>
    </div>
  </div>
</div>
   {/* <div className="my-3">
    <button type="button" onClick={toggleStyle} class="btn btn-primary">{btnMode}</button>
    </div> */}
    </div>
  )
}
