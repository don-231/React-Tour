import React from "react"
import './App.css';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.savePrice = this.savePrice.bind(this)
    this.saveItem = this.saveItem.bind(this)
    this.state = {
      loading: true,
      array: [],
      price: 0
    }
  }
  saveItem = (e) => {
    this.setState({ input1:e.target.value })
  }
  savePrice = (e) => {
    this.setState({ input2:e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let { array,input1,input2 } = this.state
    let obj = [input1,input2]
    array.push(obj);
    this.setState({array:array})
    console.log(array);
  }
  render() {
    return (
      <div>
        <h1 className="text-4xl">Total:{this.state.array.length}</h1>
        <h1 className="text-4xl">Price Total: {`$${this.state.price}`}</h1>
        <h1 className="text-4xl">Item total: {this.state.array.length}</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="flex justify-center space-x-4">
          <input onChange={this.saveItem} className="bg-slate-200 p-5 rounded-lg focus:outline-none focus:outline-slate-500" placeholder="add item" type="text" />
          <input onChange={this.savePrice} className="bg-slate-200 p-5 rounded-lg focus:outline-none focus:outline-slate-500" placeholder="add price" type="number" />
          </div>
          <div className="flex justify-center mt-4">
          <button className="flex justify-center hover:bg-slate-400 focus:outline-none focus:ring focus:ring-slate-700 w-32 bg-slate-500 text-white p-2 rounded-lg">Add Stocks</button>
          </div>
        </form>
        <div className="flex justify-center mt-20">
          <table className="border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-600 bg-gray-800 text-white p-3 px-5 pr-20">Item</th>
                <th className="border border-slate-600 bg-gray-800 text-white p-3 px-5 pr-20">Price</th>
              </tr>
            </thead>
            {this.state.array.map((subItem, index) => (
                <tbody key={index}>
                  <tr>
                    <td className="border border-slate-700 p-3">{subItem[0]}</td>
                    <td className="border border-slate-700 p-3">${subItem[1]}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Page />
      </div>
    )
  }
}

export default App;
