export const inputChangeHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};
