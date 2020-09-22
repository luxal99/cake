import React from 'react';
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/cake-food-logo-9A487CF7AA-seeklogo.com.png'
import cake from '../../assets/img/cake.png'
import lava from '../../assets/img/lava.png'
import cheff from '../../assets/img/poslasticar.jpg'
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {

    routingFunction = (param) => {
        this.props.history.push({
            pathname: `/`,
            state: param
        });
    }

    render(){
        return (

            <div className="header">
                     <div className="row">
                <div className="col-sm">
                  <img src={logo} alt="" width="100px" className="img-fluid" />
                </div>
                <div className="col-sm">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm icon-col text-right">
        
                  <i className="fa fa-instagram"></i>
        
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-phone-alt"></i>
                </div>
              </div>
        
        
              <div className="header-container text-center">
                <h4>Lorem ipsum dolor nunc</h4>
                <h1>Cakee shop tasty</h1>
                <div className="row">
                  <div className="col-sm"></div>
                  <div className="col-sm">
                    <img src={cake} alt="" width="700px" className="img-fluid" />
                  </div>
                  <div className="col-sm">
                  </div>
                </div>
              </div>
        
              <div className="facts-div cont">
                <h1>Cakee shop tasty</h1>
                <div className="divider"></div>
                  <div className="row facts-row">
                    <div className="col-sm-4">
                      <div className="row" style={{paddingTop:"5em"}}>
                        <div className="col-sm facts-col">
                          <i className="fa fa-birthday-cake"></i>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-sm facts-col">
                          <i className="fa fa-birthday-cake"></i>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                      </div>
                      <div className="row" style={{paddingTop:"5em"}}>
                        <div className="col-sm facts-col">
                          <i className="fa fa-birthday-cake"></i>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-sm facts-col">
        
                          <i className="fa fa-birthday-cake"></i>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="row">
                      <div className="col-sm-7">
                          <img src={lava} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-sm quote-col">
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
                        </div>
                        
                      </div>
                    </div>
        
        
                  </div>
                </div>
        
                <div className="cont">
                  <div className="row">
                    <div className="col-sm about-col">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                    </div>
                    <div className="col-sm">
                      <img src={cheff} alt="" className="img-fluid img-round"/>
                    </div>
                  </div>
                </div>
        
        
              </div>
        
              
        
        
          );
    }

}

export default Home;