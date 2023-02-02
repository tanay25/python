import React from 'react';
import ReactDOM from 'react-dom/client';

import Parent from './FunctionComponents/ContextAPI/Parent';
var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <h1>Contect API Example</h1>
        <Parent/>
    </>
)



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import Parent from './FunctionComponents/HooksExample/Parent';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <Parent/>
//     </>
// )

// import Parent from './ClassComponents/PureComponentExample/Parent';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <Parent/>
//     </>
// )


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './RoutingExample/App';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <App/>
//     </>
// )


// import MaterialExample from "./FunctionComponents/MaterialExample"
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <MaterialExample/>
//     </>
// )

// import BootstrapExampleF from './FunctionComponents/BootstrapExampleF';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <BootstrapExampleF/>
//     </>
// )

// import FormExampleF from './FunctionComponents/FormExampleF';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <FormExampleF/>
//     </>
// )


// //import InputExampleF from './FunctionComponents/InputExampleF';
// import InputExample from './ClassComponents/InputExample';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <InputExample/>
//         {/* <InputExampleF/> */}
//     </>
// )

// import StateExample from './ClassComponents/StateExample';
// import StateExamnpleF from './FunctionComponents/StateExamnpleF';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <StateExample/>
//         <StateExamnpleF/>
//     </>
// )


// import CSSExample from './FunctionComponents/CSSExample';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <CSSExample/>
//     </>
// )


// import LiftingStateUP from './ClassComponents/LiftingStateUP';
// import LiftingStateUPF from './FunctionComponents/LiftingStateUPF';
// function getData(data) {
//     alert("Hello : " + data)
// }
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <LiftingStateUP getData={getData} />
//         <LiftingStateUPF getData={getData} />
//     </>
// )



// import PropsExample from './ClassComponents/PropsExample';
// import PropsExampleF from './FunctionComponents/PropsExampleF';
// var root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <PropsExample name="Nitin Chauhan" salary={50000}/>
//         <hr/>
//         <PropsExampleF name="Mohit Kumar" salary={89000}/>
//     </>
// )

// import * as Data from './ClassComponents/ClassExportExample';
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <Data.default/>
//         <h2>{Data.arr.join(" ")}</h2>
//         <h3>{Data.name}</h3>
//         <h3>{Data.emp.id}</h3>
//         <h3>{Data.emp.name}</h3>
//         <h3>{Data.emp.dsg}</h3>
//         {Data.display()}
//     </>
// )

// import ClassExportExample,{name,arr,emp,display} from './ClassComponents/ClassExportExample';
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <>
//         <ClassExportExample/>
//         <h2>{arr.join(" ")}</h2>
//         <h3>{name}</h3>
//         <h3>{emp.id}</h3>
//         <h3>{emp.name}</h3>
//         <h3>{emp.dsg}</h3>
//         {display()}
//     </>
// )

// import App from "./ClassComponents/App"
// import Sample from './FunctionComponents/Sample';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <>
//             <App/>
//             <Sample/>
//         </>
// );




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <>
//             <h1>Hello World</h1>
//             <h1>This is First Example of React</h1>
//         </>
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <React.Fragment>
//             <h1>Hello World</h1>
//             <h1>This is First Example of React</h1>
//         </React.Fragment>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         [<h1>Hello World</h1>,
//         <h1>This is First Example of React</h1>]
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//         <h1>Hello World</h1>
//         <h1>This is First Example of React</h1>
//     </div>
// );


// old Style
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//         <>
//             <h1>Hello World</h1>
//             <h1>This is First Example of React</h1>
//         </>,
//         document.getElementById("root")
// );

