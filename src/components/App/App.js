import React from 'react';
import FirebaseService from '../../services/firebaseService';



pushData = (node, objToSubmit) => {
  const ref = firebaseDatabase.ref(node).push();
  const id = firebaseDatabase.ref(node).push().key;
  ref.set(objToSubmit);
  return id;
};

function componentDidMount() {
  FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
}


function App() {
  return ;
}

export default App;
