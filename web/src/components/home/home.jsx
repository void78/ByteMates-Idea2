import React from 'react'
import SideBar from '../SideBar';
import Header from './Header';
import Footer from './Footer';
import { Route, Router } from 'react-router-dom';
import Profile from './userProfile/Profile';
import Documents from '../documents/ViewDocuments';
import UploadDocuments from '../documents/UploadDocuments';
import SignDocument from '../documents/SignDocument';

const Home = props => {
    return (
        <div className="wrapper">
            <SideBar />
            <div className="main-panel">
          <Header />
          <Route path='/home/profile' component={Profile} />
          <Route path='/home/documents/view' component={Documents} />
          <Route path='/home/documents/upload' component={UploadDocuments} />
          <Route path='/home/documents/sign' component={SignDocument} />
          <Footer />
        </div>
        </div>)
}

export default Home;