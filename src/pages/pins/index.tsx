import React from "react";

interface Props {

}

interface State {

}

export default class Pins extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount(): void {
      console.log('mount');
      
  }
  render() {
    return (
      <div>pins</div>
    )
  }
}