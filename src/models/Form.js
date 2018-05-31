import validatorjs from "validatorjs";
import MobxReactForm from "mobx-react-form";

const plugins = { dvr: validatorjs };

export default class Form extends MobxReactForm {

  plugins() {
    return plugins;
  }

  options() {
    return {
      defaultGenericError: "Invalid Data",
      autoParseNumbers: true
    };
  }
}
