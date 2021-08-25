import React, { Component, } from 'react';
//import { Doughnut } from 'react-chartjs-2';
//import Slider from "react-slick";
//import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap"
import { Line, Bar } from 'react-chartjs-2';
import { randomNumber } from '../../utils/random';

const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}



export class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.generateRandomData = this.generateRandomData.bind(this);

  }
  state = {
    time : new Date(),
    randomData: [100, 190, -120, 150, 270, 230, -100, 130, -300, 400],
    data: {
      labels: ["", "", "", "", "", "", "", ""],
      datasets: [{
        label: 'ADNOC 212',
        data: [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(111, 34, 64, 1)',
          'rgba(243, 34, 64, 1)',
        ],

        borderWidth: 1,
        fill: false
      }]
    }
  }
  componentDidMount() {
    let time = 5000 //5s
    setInterval(this.generateRandomData, time)
    console.log(this.state.data)
  }


  generateRandomData() {
    let arr = [];
    for (let index = 0; index < 10; index++) {
      arr.push(randomNumber(-300, 300))
    }
    this.setState({
      randomData: [...arr]
    });
  }

  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: "rgba(204, 204, 204,0.1)"
        }
      }],
      xAxes: [{
        gridLines: {
          color: "rgba(204, 204, 204,0.1)"
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }

  transactionHistoryData = {
    labels: ["Paypal", "Stripe", "Cash"],
    datasets: [{
      data: [55, 25, 20],
      backgroundColor: [
        "#111111", "#00d25b", "#ffab00"
      ]
    }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Alerts</h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">{randomNumber(40,100)}</h2>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+{(Math.random()*5).toFixed(2)}%</p>
                    </div>
                    <h6 className="text-muted font-weight-normal">{(Math.random()*18).toFixed(2)}% Since last month</h6>
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i className="icon-lg mdi mdi-alert text-danger ml-auto"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Men Overboard</h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">{randomNumber(10,888)}</h2>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+{(Math.random()*13).toFixed(2)}%</p>
                    </div>
                    <h6 className="text-muted font-weight-normal"> {(Math.random()*16).toFixed(2)}% Since last month</h6>
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i className="icon-lg mdi mdi-odnoklassniki text-primary ml-auto"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Slip or Fall</h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">{randomNumber(2,20)}</h2>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">-{(Math.random()*5).toFixed(2)}% </p>
                    </div>
                    <h6 className="text-muted font-weight-normal">{(Math.random()*5).toFixed(2)}% Since last month</h6>
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    {/* <i className="icon-lg mdi mdi-monitor text-danger ml-auto"></i> */}
                    <img alt="fall" width={80} height={90} src={require("../../assets/images/fall.png")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Helmet </h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">{randomNumber(3,19)}</h2>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">-{(Math.random()*7).toFixed(2)}% </p>
                    </div>
                    <h6 className="text-muted font-weight-normal">{(Math.random()*6).toFixed(2)}% Since last month</h6>
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">

                    <i className="icon-lg mdi mdi-football-helmet text-info ml-auto"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Dress Code</h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">11</h2>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                    </div>
                    <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i className="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="row">
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">153</h3>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success ">
                      <span className="mdi mdi mdi-run icon-item"></span>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Border Breaches</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">19</h3>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+11%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success">
                      <span className="mdi mdi mdi-tshirt-crew icon-item"></span>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Dress Code Mismatch</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">113</h3>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-danger">
                      <span className="mdi mdi mdi-football-helmet icon-item"></span>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Without Helmet</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">1345</h3>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">+13.5%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-danger ">
                      <span className="mdi mdi mdi-weather-windy icon-item"></span>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Extreme Current </h6>
              </div>
            </div>
          </div>
        </div>
     */}

        <div className="row">
          <div className="col-md-12 col-lg-7 col-xl-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body" >
                <h4 className="card-title">PPE Detections</h4>

                <div className="row">
                  <div style={{ fontWeight: 600 }} className="col-md-5 col-xl-5 grid-margin">
                    <p style={{ marginLeft: "20px" }}>Uniform</p>
                    <p style={{ marginLeft: "20px" }}>Life Jackets</p>
                    <button type="button" className="btn btn-outline-success" style={{ color: "#fff", marginLeft: "20px" }}>
                      Helmets
                    </button>
                    <div style={{ backgroundColor: "#4d4d4d", marginTop: "5vh", padding: "20px", display: "flex", borderRadius: "6px" }}>
                      <div style={{ width: "70%" }}>
                        <p style={{ fontSize: 20, color: "#d1d1d1" }}>Violations</p>
                        <p style={{ marginTop: "-2vh", color: "#d1d1d1" }}>Total</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 50 }}>{randomNumber(3,19)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-xl-4 grid-margin" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img alt="helmet" width={170} src={require("../../assets/images/helmet.png")} />
                  </div>
                  <div className="col-md-3 col-xl-3 grid-margin">
                    <h3 >Helmet Violations</h3> <br />
                    <h5 >Time</h5>
                    <p style={{ color: "#d3d3d3" }}>{this.state.time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                    <h5 >Date</h5>
                    <p style={{ color: "#d3d3d3" }}>{this.state.time.getDate() + "/"+ parseInt(this.state.time.getMonth()+1) +"/"+this.state.time.getFullYear()}</p>
                    <h5 >No of Violations</h5>
                    <h4 style={{ color: "#d3d3d3" }}>{randomNumber(1,6)}</h4>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 col-xl-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body" >
                <h4 className="card-title">Critical Swell Level Detections</h4>
                <div className="d-flex flex-row " >
                  <Bar data={
                    {
                      labels: ["", "", "", "", "", "", "", ""],
                      datasets: [{
                        label: 'ADNOC 212',
                        data: [randomNumber(-400,400), randomNumber(-400,400), randomNumber(-400,400), randomNumber(-400,400), randomNumber(-400,400), randomNumber(-400,400), randomNumber(-400,400), randomNumber(-400,400), randomNumber(-400,400)],
                        backgroundColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)',
                          'rgba(111, 34, 64, 1)',
                        ],

                        borderWidth: 1,
                        fill: false
                      }]
                    }
                  } options={this.options}
                  height={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div style={{ position: "relative", display: "flex" }}>
                  <h4 className="card-title">Highest Violations</h4>
                  <div style={{ position: "absolute", right: 0, display: "flex" }}>
                    <p style={{ margin: "0 10px", padding: "5px" }}>Today</p>
                    <p style={{ margin: "0 10px", padding: "5px" }}>Month</p>
                    <p style={{ margin: "0 10px", padding: "5px" }}>Year</p>
                    <p style={{ margin: "0 10px", backgroundColor: "whitesmoke", padding: "5px", color: "#000", borderRadius: "6px" }}>Today :Jul 24</p>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "4vh" }}>
                  <div className="col-md-1 col-xl-1 grid-margin stretch-card" style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="mdi mdi-arrow-left" style={{ fontSize: 40 }} ></i>
                  </div>
                  <div className="col-md-2 col-xl-2 grid-margin stretch-card" style={{ alignItems: "center", justifyContent: "center", alignContent: "center", paddingTop: "5vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "100%", backgroundColor: "#4d4d4d", borderRadius: "5px" }}>
                      <img alt="ship"
                        width={150} height={105} style={{ borderRadius: "48px", border: "3px solid #fff", position: "absolute", top: "-6%" }}
                        src={"https://www.wqis.com/wp-content/uploads/2020/07/Cargo-Shipping-Industry.jpg"} />

                      <h4 style={{ textAlign: "center", marginTop: "10vh" }}>ADH0C 323	</h4>
                      <h4 style={{ textAlign: "center", color: "#8d8d8d", paddingBottom: "2vh" }}>Total Violations: 12	</h4>

                    </div>
                  </div>
                  <div className="col-md-2 col-xl-2 grid-margin stretch-card" style={{ paddingTop: "5vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "100%", backgroundColor: "#4d4d4d", borderRadius: "5px" }}>
                      <img alt="ship"
                        width={150} height={105} style={{ borderRadius: "48px", border: "3px solid #fff", position: "absolute", top: "-6%" }}
                        src={"https://images.theconversation.com/files/392892/original/file-20210331-15-18mw6wt.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"} />

                      <h4 style={{ textAlign: "center", marginTop: "10vh" }}>ADH0C 323	</h4>
                      <h4 style={{ textAlign: "center", color: "#8d8d8d", paddingBottom: "2vh" }}>Total Violations: 12	</h4>

                    </div>
                  </div>
                  <div className="col-md-2 col-xl-2 grid-margin stretch-card" style={{ paddingTop: "5vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "100%", backgroundColor: "#4d4d4d", borderRadius: "5px" }}>
                      <img alt="ship"
                        width={150} height={105} style={{ borderRadius: "48px", border: "3px solid #fff", position: "absolute", top: "-6%" }}
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbWWW0L0mSjeggLBO5wQRpe-V9PWYxUCsPFi6m0HUi9NnjwxNb5u5sXO2psqXSfJlbIQ&usqp=CAU"} />
                      <h4 style={{ textAlign: "center", marginTop: "10vh" }}>ADNOC 336</h4>
                      <h4 style={{ textAlign: "center", color: "#8d8d8d", paddingBottom: "2vh" }}>Total Violations: 9	</h4>
                    </div>
                  </div>
                  <div className="col-md-2 col-xl-2 grid-margin stretch-card" style={{ paddingTop: "5vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "100%", backgroundColor: "#4d4d4d", borderRadius: "5px" }}>
                      <img alt="ship"
                        width={150} height={105} style={{ borderRadius: "48px", border: "3px solid #fff", position: "absolute", top: "-6%" }}
                        src={"https://media.istockphoto.com/photos/generic-cargo-container-ship-at-sea-picture-id591986620?k=6&m=591986620&s=612x612&w=0&h=tpGBHBC0sZmG_DMbPga2hgbII1B5iX9YfN3DDw3wrwE="} />
                      <h4 style={{ textAlign: "center", marginTop: "10vh" }}>ADNOC 133</h4>
                      <h4 style={{ textAlign: "center", color: "#8d8d8d", paddingBottom: "2vh" }}>Total Violations: 23	</h4>
                    </div>
                  </div>
                  <div className="col-md-2 col-xl-2 grid-margin stretch-card" style={{ paddingTop: "5vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "100%", backgroundColor: "#4d4d4d", borderRadius: "5px" }}>
                      <img alt="ship"
                        width={150} height={105} style={{ borderRadius: "48px", border: "3px solid #fff", position: "absolute", top: "-6%" }}
                        src={"https://images.theconversation.com/files/92281/original/image-20150818-12436-1y2qfys.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1050.0&fit=crop"} />
                      <h4 style={{ textAlign: "center", marginTop: "10vh" }}>ADNOC 002</h4>
                      <h4 style={{ textAlign: "center", color: "#8d8d8d", paddingBottom: "2vh" }}>Total Violations: 10	</h4>
                    </div>
                  </div>
                  <div className="col-md-1 col-xl-1 grid-margin stretch-card" style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="mdi mdi-arrow-right" style={{ fontSize: 40 }} ></i>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Line Crossing Details (Latest)</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          {/* <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div> */}
                        </th>
                        <th> Vessels Name </th>
                        <th> Detection Type </th>
                        <th> Image </th>
                        <th> Location </th>
                        <th> Date </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {/* <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div> */}
                        </td>
                        <td>
                          <div style={{ display: "flex" }}>
                            <div><img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"http://www.marineinsight.com/wp-content/uploads/2017/06/Maersk-Madrid-1.jpg"} /></div>
                            <div style={{ display: "flex", alignItems: "center", fontSize: 18, marginLeft: "10px" }}>ADNOC 242</div>
                          </div>

                        </td>
                        <td>
                          <div className="badge badge-danger">Man Overboard</div>
                        </td>
                        <td> <img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://theplanetd.com/images/travelling-by-cargo-ship-bow.jpg"} /> </td>
                        <td><i className="mdi mdi-camcorder"></i> &nbsp;Cam 2</td>
                        <td> <p>10:33 AM</p>
                          <p>13 Mar 2021</p>
                        </td>
                        <td>
                          <div className="badge badge-primary">View</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div> */}
                        </td>
                        <td>
                          <div style={{ display: "flex" }}>
                            <div><img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OjfwcQPIasYiisN-dEIIUiMwS2TXzWYfmg&usqp=CAU"} /></div>
                            <div style={{ display: "flex", alignItems: "center", fontSize: 18, marginLeft: "10px" }}>ADNOC 075</div>
                          </div>
                          {/* <div className="d-flex">
                            <img src={require('../../assets/images/faces/face2.jpg')} alt="face" />
                            <span className="pl-2">Estella Bryan</span>
                          </div> */}
                        </td>
                        <td>
                          <div className="badge badge-warning">Line Crossing</div>
                        </td>
                        <td> <img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://i0.wp.com/asiatimes.com/wp-content/uploads/2019/10/Sabiti-Iranian-tanker-e1570863718332.jpg?fit=1200%2C905&ssl=1"} /> </td>
                        <td><i className="mdi mdi-camcorder"></i> &nbsp;Cam 23</td>
                        <td> <p>10:33 AM</p>
                          <p>12 Mar 2021</p>
                        </td>
                        <td>
                          <div className="badge badge-primary">View</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div> */}
                        </td>
                        <td>
                          <div style={{ display: "flex" }}>
                            <div><img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://static7.depositphotos.com/1194815/682/i/600/depositphotos_6827071-stock-photo-container-ship.jpg"} /></div>
                            <div style={{ display: "flex", alignItems: "center", fontSize: 18, marginLeft: "10px" }}>ADNOC 125</div>
                          </div>
                          {/* <div className="d-flex">
                            <img src={require('../../assets/images/faces/face5.jpg')} alt="face" />
                            <span className="pl-2">Lucy Abbott</span>
                          </div> */}
                        </td>
                        <td>
                          <div className="badge badge-danger">PPE Violation</div>
                        </td>
                        <td> <img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://www.marineinsight.com/wp-content/uploads/2015/11/tanker.jpg"} /> </td>
                        <td><i className="mdi mdi-camcorder"></i> &nbsp;Cam 11</td>
                        <td> <p>1:13 AM</p>
                          <p>12 Mar 2021</p>
                        </td>
                        <td>
                          <div className="badge badge-primary">View</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div> */}
                        </td>
                        <td>
                          <div style={{ display: "flex" }}>
                            <div><img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOQZ1n_U2g_pnaxZPYcvAerZfuLipGWfBVQ&usqp=CAU"} /></div>
                            <div style={{ display: "flex", alignItems: "center", fontSize: 18, marginLeft: "10px" }}>ADNOC 099</div>
                          </div>2
                          {/* <div className="d-flex">
                            <img src={require('../../assets/images/faces/face3.jpg')} alt="face" />
                            <span className="pl-2">Peter Gill</span>
                          </div> */}
                        </td>
                        <td>
                          <div className="badge badge-danger">Slip or Fall</div>
                        </td>
                        <td> <img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://static01.nyt.com/images/2019/10/29/world/00seafarers-clip-promo/merlin_158889435_75be49ec-d41e-4f2c-93ce-4310f84575be-superJumbo.jpg"} /> </td>
                        <td><i className="mdi mdi-camcorder"></i>&nbsp; Cam 7</td>
                        <td> <p>5:33 AM</p>
                          <p>14 Mar 2021</p>
                        </td>
                        <td>
                          <div className="badge badge-primary">View</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div> */}
                        </td>
                        <td>
                          <div style={{ display: "flex" }}>
                            <div><img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtobwnHDBSYR1k2wollGTSmKTaHPsRY5yRNw&usqp=CAU"} /></div>
                            <div style={{ display: "flex", alignItems: "center", fontSize: 18, marginLeft: "10px" }}>ADNOC 037</div>
                          </div>
                          {/* <div className="d-flex">
                            <img src={require('../../assets/images/faces/face4.jpg')} alt="face" />
                            <span className="pl-2">Sallie Reyes</span>
                          </div> */}
                        </td>
                        <td>
                          <div className="badge badge-warning">Line Crossing</div>
                        </td>
                        <td> <img alt="camera 8" className="img-lg" style={{ width: "100px", height: "60px", borderRadius: "5%" }} width={"100px"} height={"100px"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawjmyO3VHMWpXmo2Rs1O8ZAe-z83fX203UA&usqp=CAU"} /> </td>
                        <td><i className="mdi mdi-camcorder"></i> &nbsp; Cam 8</td>
                        <td> <p>10:33 AM</p>
                          <p>04 Apr 2020</p>
                        </td>
                        <td>
                          <div className="badge badge-primary">View</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Transaction History</h4>
                <div className="aligner-wrapper">
                  <Doughnut data={this.transactionHistoryData} options={this.transactionHistoryOptions} />
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">1200</h5>
                    <p className="text-small text-muted text-center mb-0">Total</p>
                  </div>
                </div>  
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Transfer to Paypal</h6>
                    <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$236</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Tranfer to Stripe</h6>
                    <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$593</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
          {/* <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-1">Open Projects</h4>
                  <p className="text-muted mb-1">Your data status</p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="preview-list">
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-primary">
                            <i className="mdi mdi-file-document"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Admin dashboard design</h6>
                            <p className="text-muted mb-0">Broadcast web app mockup</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">15 minutes ago</p>
                            <p className="text-muted mb-0">30 tasks, 5 issues </p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-success">
                            <i className="mdi mdi-cloud-download"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Wordpress Development</h6>
                            <p className="text-muted mb-0">Upload new design</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">1 hour ago</p>
                            <p className="text-muted mb-0">23 tasks, 5 issues </p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-info">
                            <i className="mdi mdi-clock"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Project meeting</h6>
                            <p className="text-muted mb-0">New project discussion</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">35 minutes ago</p>
                            <p className="text-muted mb-0">15 tasks, 2 issues</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-danger">
                            <i className="mdi mdi-email-open"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Broadcast Mail</h6>
                            <p className="text-muted mb-0">Sent release details to team</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">55 minutes ago</p>
                            <p className="text-muted mb-0">35 tasks, 7 issues </p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-warning">
                            <i className="mdi mdi-chart-pie"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">UI Design</h6>
                            <p className="text-muted mb-0">New application planning</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">50 minutes ago</p>
                            <p className="text-muted mb-0">27 tasks, 4 issues </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        */}
        </div>



        {/* <div className="row">
          <div className="col-md-12 col-xl-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body" >
              <h4 className="card-title">Critical Swell Levels Detections</h4>
                <div className="d-flex flex-row " >
                <Line  data={this.data} options={this.options} height={40} />
                </div>
              </div>
            </div>
          </div>
          </div> */}

        <div className="row">
          <div className="col-md-6 col-xl-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body" >
                <h4 className="card-title">Monthly Total Alerts</h4>
                <div className="d-flex flex-row " >
                  <Bar data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                      label: '# of Votes',
                      data: [randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20)],
                      backgroundColor: [
                        'rgba(255, 99, 132,1)',
                        'rgba(54, 162, 235,1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 22, 64, 1)',
                        'rgba(255, 67, 22, 1)',
                        'rgba(255, 111, 22, 1)',
                        'rgba(255, 222, 22, 1)',
                        'rgba(34, 213, 22, 1)',
                        'rgba(34, 169, 22, 1)',
                      ],
                      borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1,
                      fill: false
                    }]
                  }} options={this.options} height={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body" >
                <h4 className="card-title">Monthly line crossing detections</h4>
                <div className="d-flex flex-row " >
                  <Line 
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                      label: '# of Votes',
                      data: [randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20), randomNumber(2, 20)],
                      backgroundColor: [
                        'rgba(255, 99, 132,1)',
                        'rgba(54, 162, 235,1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 22, 64, 1)',
                        'rgba(255, 67, 22, 1)',
                        'rgba(255, 111, 22, 1)',
                        'rgba(255, 222, 22, 1)',
                        'rgba(34, 213, 22, 1)',
                        'rgba(34, 169, 22, 1)',
                      ],
                      borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1,
                      fill: false
                    }]
                  }}
                  options={this.options} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <h4 className="card-title">Messages</h4>
                    <p className="text-muted mb-1 small">View all</p>
                  </div>
                  <div className="preview-list">
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <img src={require('../../assets/images/faces/face6.jpg')} alt="face" className="rounded-circle" />
                      </div>
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            <h6 className="preview-subject">Leonard</h6>
                            <p className="text-muted text-small">5 minutes ago</p>
                          </div>
                          <p className="text-muted">Well, it seems to be working now.</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <img src={require('../../assets/images/faces/face8.jpg')} alt="face" className="rounded-circle" />
                      </div>
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            <h6 className="preview-subject">Luella Mills</h6>
                            <p className="text-muted text-small">10 Minutes Ago</p>
                          </div>
                          <p className="text-muted">Well, it seems to be working now.</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <img src={require('../../assets/images/faces/face9.jpg')} alt="face" className="rounded-circle" />
                      </div>
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            <h6 className="preview-subject">Ethel Kelly</h6>
                            <p className="text-muted text-small">2 Hours Ago</p>
                          </div>
                          <p className="text-muted">Please review the tickets</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <img src={require('../../assets/images/faces/face11.jpg')} alt="face" className="rounded-circle" />
                      </div>
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            <h6 className="preview-subject">Herman May</h6>
                            <p className="text-muted text-small">4 Hours Ago</p>
                          </div>
                          <p className="text-muted">Thanks a lot. It was easy to fix it .</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Portfolio Slide</h4>
                  <Slider className="portfolio-slider" {...this.sliderSettings}>
                    <div className="item">
                      <img src={require('../../assets/images/dashboard/Rectangle.jpg')} alt="carousel-item" />
                    </div>
                    <div className="item">
                      <img src={require('../../assets/images/dashboard/Img_5.jpg')} alt="carousel-item" />
                    </div>
                    <div className="item">
                      <img src={require('../../assets/images/dashboard/img_6.jpg')} alt="carousel-item" />
                    </div>
                  </Slider>
                  <div className="d-flex py-4">
                    <div className="preview-list w-100">
                      <div className="preview-item p-0">
                        <div className="preview-thumbnail">
                          <img src={require('../../assets/images/faces/face12.jpg')} className="rounded-circle" alt="face" />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div className="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 className="preview-subject">CeeCee Bass</h6>
                              <p className="text-muted text-small">4 Hours Ago</p>
                            </div>
                            <p className="text-muted">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">Well, it seems to be working now. </p>
                  <div className="progress progress-md portfolio-progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">To do list</h4>
                  <TodoListComponent />
                </div>
              </div>
            </div>
          </div> */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Active vessels</h4>
                <div className="row">
                  <div className="col-md-5">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Range</th>
                            <th>Accuracy</th>
                          </tr>
                          <tr>
                            <td>
                              ADNOC 323
                            </td>
                            <td>USA</td>
                            <td className="text-right"> {randomNumber(200,1000)} </td>
                            <td className="text-right font-weight-medium"> {(Math.random()*88).toFixed(2)}% </td>
                          </tr>
                          <tr>
                            <td>
                              ADNOC 235
                            </td>
                            <td>Germany</td>
                            <td className="text-right"> {randomNumber(200,1000)}</td>
                            <td className="text-right font-weight-medium"> {(Math.random()*88).toFixed(2)}% </td>
                          </tr>
                          <tr>
                            <td>ADNOC 336
                            </td>
                            <td>Australia</td>
                            <td className="text-right"> {randomNumber(200,1000)}</td>
                            <td className="text-right font-weight-medium"> {(Math.random()*88).toFixed(2)}% </td>
                          </tr>
                          <tr>
                            <td>
                              ADNOC 002
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right"> {randomNumber(200,1000)}</td>
                            <td className="text-right font-weight-medium"> {(Math.random()*88).toFixed(2)}% </td>
                          </tr>
                          <tr>
                            <td>
                              ADNOC 133
                            </td>
                            <td>Romania</td>
                            <td className="text-right"> {randomNumber(200,1000)}</td>
                            <td className="text-right font-weight-medium"> {(Math.random()*88).toFixed(2)}% </td>
                          </tr>
                          <tr>
                            <td>
                              ADNOC 023
                            </td>
                            <td>Brasil</td>
                            <td className="text-right"> {randomNumber(200,1000)}</td>
                            <td className="text-right font-weight-medium"> {(Math.random()*88).toFixed(2)}% </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div id="audience-map" className="vector-map"></div>
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent" //change it to ocean blue: #0077be
                      panOnDrag={true}
                      containerClassName="dashboard-vector-map"
                      focusOn={{
                        x: 0.5,
                        y: 0.5,
                        scale: 1,
                        animate: true
                      }}
                      series={{
                        regions: [{
                          scale: ['#3d3c3c', '#f2f2f2'],
                          normalizeFunction: 'polynomial',
                          values: mapData
                        }]
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;