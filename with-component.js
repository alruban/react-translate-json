import { translate } from './index';

export const withComponent = (Component, framework) => (
  class Translate extends Component {
		constructor() {
			super();

			this.state = {
				text: ''
			};
		}

    componentDidMount(props) {
			// Requests the translate value, and the sets the state
      let {
        label,
        params
      } = props || this.props;

      return translate(label, params || null)
        .then(text => {
          this.setState({ text });
        });
    }

    render() {
      // If there's a render-prop
      if (this.props.render) {
        return this.props.render(this.state.text);
      }

      return framework.createElement('span', null, this.state.text);
    }

  }
);
