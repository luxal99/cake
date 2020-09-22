import React from "react";
import ReactDOM from "react-dom";
import "./admin.css";
import axios from 'axios'
class Admin extends React.Component {

  category = {
    title: ''
  }

  categoryTitleOnChanget = event => {
    this.category.title = event.target.value;
  }

  saveCategory = async event => {
    event.preventDefault();

    let resp = await axios.post('/category', this.category)
  }


  render() {
    return (
      <div className="container admin-container">
        <div className="row">
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a
                className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                Home
              </a>
              <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                Profile
              </a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <button type="button" className="open-category-dialog-btn" data-toggle="modal" data-target="#exampleModal">
                  Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-div">
                            <input type="text" placeholder="Naziv kateorije" onChange={this.categoryTitleOnChanget} className="category-input" />
                          </div>

                          <div className="btn-div">
                            <div className="text-center">
                              <button className="login-btn" onClick={this.saveCategory}>
                                dodaj
                            </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" >
                Marko
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
