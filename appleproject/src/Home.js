import React, { Component } from 'react';



  class Home extends Component {

    constructor()
    {
      super();
      this.state={res:[],searching:''};


    }

    propagateToParentRest(e){
           this.setState({
      searching: 'Search Results',
    });

            fetch('http://localhost:9000/rests').then(response => response.json())
              .then(( json ) => this.setState({res:json}))
              .catch(error => console.log(error));



        this.props.setParentState({ results: this.state.res });
      }
      propagateToParentStreet(e){
        this.setState({searching:'Search Results'});
              fetch('http://localhost:9000/rests/getbystname/'+ search1.value).then(response => response.json())
                .then(( json ) => this.setState({res:json}))
                .catch(error => console.log(error));



          this.props.setParentState({ results: this.state.res });
        }

        propagateToParentTimings(e){
          this.setState({searching:'Search Results'});
                fetch('http://localhost:9000/rests/getbyTime').then(response => response.json())
                  .then(( json ) => this.setState({res:json}))
                  .catch(error => console.log(error));



            this.props.setParentState({ results: this.state.res });
          }
  render() {

  return(
  <div>
  <a name="top"></a>
  <div className="intro-header">
      <div className="container">

          <div className="row">
              <div className="col-lg-12">
                  <div className="intro-message">
                      <h2 className="top-title">Restaurant Finder</h2>
                      <h3>Best In City</h3>
                      <hr className="intro-divider"/>
                      <div className="input-group col-md-12">
                            <input id="search1" type="text" className="search-query form-control" placeholder="Search" />
                            <span className="input-group-btn">
                                 <div className="dropdown">
                                    <button  className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"  >
                                    <span className=" glyphicon glyphicon-search"></span>  <span className="caret"></span> </button>
                                    <ul className="dropdown-menu">
                                      <li><a href="#" onClick={this.propagateToParentRest.bind(this)}>Restaurant Name</a></li>
                                      <li><a href="#" onClick={this.propagateToParentStreet.bind(this)}>Street Name</a></li>
                                      <li><a href="#" onClick={this.propagateToParentTimings.bind(this)}>Timings</a></li>
                                    </ul>
                                  </div>
                            </span>
                        </div>
                  </div>
              </div>
          </div>

      </div>


  </div>
  <div  >
<h2>{this.state.searching}</h2>
{
    this.state.res.map((ele,i)=> {

      return <div className="card">

              <div key={i} className="container1" >

                         <h3>Restaurant Name: {ele.restName}</h3><br/>
                         <hr/>
                        <div className="row">
                         <div className="col-sm-4" >Street Name:</div>
                         <div className="col-sm-8"> {ele.streetName}</div><br/>
                         </div>
                         <div className="row">
                         <div className="col-sm-4" >Address:</div>
                         <div className="col-sm-8"> {ele.address}</div><br/>
                         </div>
                         <div className="row">
                         <div className="col-sm-4" >Phone:</div>
                         <div className="col-sm-8"> {ele.phone}</div><br/>
                         </div>
                         <div className="row">
                         <div className="col-sm-4" >Opening Time:</div>
                         <div className="col-sm-8">{ele.otime}</div><br/>
                         </div>
                         <div className="row">
                         <div className="col-sm-4" >Closing Time:</div>
                         <div className="col-sm-8">{ele.ctime}</div><br/>
                         </div>
                         <div className="row">
                         <div className="col-sm-4" >Home Page:</div>
                         <div className="col-sm-8">{ele.homePage}</div><br/>
                         </div>
                         <div className="row">
                         <div className="col-sm-4" >Facebook:</div>
                         <div className="col-sm-8">{ele.faceBook}</div><br/>
                         </div>
                         <div className="row">
                         <div className="col-sm-4" >Email:</div>
                         <div className="col-sm-8">{ele.email}</div><br/>
                         </div>


                        
                          <br/>


              </div>
            </div>
  } )}
 </div>

 </div>


  );
 }
}

export default Home;
