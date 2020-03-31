import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchProducts} from './redux/fetch';
import {IProduct, IAppState} from './redux/types';
import {CardC} from './components_custom/cardC';
import CardDeck from 'react-bootstrap/CardDeck';
import Dropdown from 'react-bootstrap/Dropdown';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

interface IPropsFromState {
  error: Error | null;
  products: IProduct[];
  pending: boolean;
}

interface IPropsFromDispatch {
  fetchProducts: any;
}

interface IState {
  orderBy:
    | 'name'
    | 'group'
    | 'id'
    | 'type'
    | 'sensorID'
    | 'activeHours'
    | 'idleHours';
}

class App extends React.Component<
  IPropsFromState & IPropsFromDispatch,
  IState
> {
  constructor(props: IPropsFromState & IPropsFromDispatch) {
    super(props);

    this.state = {
      orderBy: 'name'
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
    setInterval(() => this.props.fetchProducts(), 300000);
  }

  select = (event: any) => {
    this.setState({
      orderBy: event?.target?.innerText
    });
  };

  render() {
    let {pending, products, error} = this.props;
    if (error && localStorage.getItem('products') != null) {
      console.log('error', error);
      products = localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products') as string)
        : products;
      console.log('local storage updated', products);
    }

    const sort = (
      field:
        | 'name'
        | 'group'
        | 'id'
        | 'type'
        | 'sensorID'
        | 'activeHours'
        | 'idleHours'
    ) =>
      products.sort((one, two) =>
        field === 'activeHours' || field === 'idleHours'
          ? one['activity'][field] > two['activity'][field]
            ? 1
            : -1
          : one[field] > two[field]
          ? 1
          : -1
      );

    sort(this.state.orderBy);

    const listItems = products.map(d => (
      <div>
        <CardC
          name={d.name}
          type={d.type}
          sensorID={d.sensorID}
          thumbURL={d.thumbURL}
          group={d.group}
          activeHours={d.activity.activeHours}
          idleHours={d.activity.idleHours}
          history={d?.history}
        />
      </div>
    ));

    return (
      <Container>
        <div className="App">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {'order by ' + this.state.orderBy}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.select}>name</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>type</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>group</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>sensorID</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>activeHours</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>idleHours</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p></p>
          {pending ? (
            <Spinner animation="border" />
          ) : (
            <CardDeck>{listItems}</CardDeck>
          )}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  error: state.machines.error,
  products: state.machines.products,
  pending: state.machines.pending
});

export default connect(mapStateToProps, {fetchProducts})(App);
