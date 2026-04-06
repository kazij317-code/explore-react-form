// // -------------------------------Start: 38_1 ---------------------------------------
// // (1) st Clear inside content
// import './App.css'
// import SimpleForm from './components/SimpleForm/SimpleForm'

// function App() {
  

//   return (
//     <>
//           <h1>Explore React Form</h1>
//           {/* (3) <SimpleForm+enter. then in SimpleForm.jsx file*/}
//           <SimpleForm></SimpleForm>
//     </>
//   )
// }

// export default App
// // (1) en Clear inside content. then create SimpleForm.jsx file creating SimpleForm folder creating components folder
// // -----------------------
// // Practice:
// // import './App.css'

// // function App() {
  

// //   return (
// //     <>
// //           <h1>Get started</h1>
// //           <SimpleForm></SimpleForm>
// //     </>
// //   )
// // }

// // export default App

// // -------------------------------End:38_1-(1) to () --------------------------------
// -------------------------------Start: 38_2 ---------------------------------------

import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FormAction from './components/FormAction/FormAction'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  

  return (
    <>
          {/* <h1>Explore React Form</h1> */}
          {/* <SimpleForm></SimpleForm> */}
          {/* (2) commit <SimpleForm and <FormAction+enter */}
          {/* <FormAction></FormAction> */}
          {/* (2)en then in FormAction.jsc file */}
          {/* (12)st commit <FormAction and <ControlledFiled+enter */}
          {/* <ControlledField></ControlledField> */}
          {/* (12)en then in ControlledField.jsx file */}

          {/* extra from me */}
          <h1>Explore React Form</h1>
          <h2>Simple Form</h2>
          <SimpleForm></SimpleForm>
          <br />
          <h2>Form Action</h2>
          <FormAction></FormAction>
          <br />
          <h2>Controlled Field</h2>
          <ControlledField></ControlledField>
           {/* extra from me */}

    </>
  )
}

export default App

// -----------------------
// Practice:
// import './App.css'

// function App() {
  

//   return (
//     <>
//           <h1>Get started</h1>
//           {/* <SimpleForm></SimpleForm> */}
//           {/* <FormAction></FormAction> */}
//           <ControlledField></ControlledField>
//     </>
//   )
// }

// export default App

// -------------------------------End:38_2-(1) to () --------------------------------