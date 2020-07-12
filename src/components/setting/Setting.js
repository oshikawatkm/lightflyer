import React from 'react'
import Footer from '../layout/Footer';
import Spinner from '../common/Spinner';

const Setting = (props) => {

  return (
    <React.Fragment>
      <Spinner />
      <Footer wsname={props.match.params.id}/>
    </React.Fragment>
  )
}


export default Setting;