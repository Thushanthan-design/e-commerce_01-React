import React, { Component } from "react";

export class MainContent extends Component {
  state = {
    pageTitile: "eCommerce",
    customerCount: 5,
    customer: [
      {
        id: 1,
        name: "Scott",
        photo: "https://www.picsum.photos/id/1000/60",
        phone: "123-456",
        address: { city: "Batticaloa" },
      },
      {
        id: 2,
        name: "Jones",
        photo: "https://www.picsum.photos/id/1008/60",
        phone: "333-456",
        address: { city: "Kandy" },
      },
      {
        id: 3,
        name: "Allen",
        photo: "https://www.picsum.photos/id/1019/60",
        phone: null,
        address: { city: "Colombo" },
      },
      {
        id: 4,
        name: "John",
        photo: "https://www.picsum.photos/id/1011/60",
        phone: null,
        address: { city: "Jaffna" },
      },
      {
        id: 5,
        name: "Brown",
        photo: "https://www.picsum.photos/id/1003/60",
        phone: "111-456",
        address: { city: "Kurunakala" },
      },
    ],
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("J")) return { backgroundColor: "red" };
    else if (custName.startsWith("B")) return { backgroundColor: "green" };
    else return {};
  };

  CustomerCityStyle = (custCity) => {
    if (custCity.startsWith("J")) return "green-hightlight";
    else if (custCity.startsWith("B")) return "red-hightlight ";
    else return "blue-hightlight ";
  };
  render() {
    return (
      <React.Fragment>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitile}
          <span className="badge bg-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  // executes when user clicks on refresh button
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone No</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customer.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td style={this.customerNameStyle(cust.name)}>{cust.name}</td>
          <td>
            <img src={cust.photo} />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td className={this.CustomerCityStyle(cust.address.city)}>
            {cust.address.city}
          </td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    var custArr = this.state.customer;
    custArr[index].photo = "https://www.picsum.photos/id/1015/60";
    this.setState({ customer: custArr });
  };
}
