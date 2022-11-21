
/* class Welcome extends React.Component {
  constructor(props) { 
    super(props); 
  }
  render() {
    return (
        <h1>Meet The { this.props.name }</h1>
    );
  }
} */

/* const Welcome = (props) => {
  return (
    <h1>Meet The <i>{ props.name }</i></h1>
  );
} */
export default (props) => {
  return (
    <h1>Meet The <i>{ props.name }</i></h1>
  );
}