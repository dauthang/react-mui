import "./App.css";
import AutoComplete from "./components/auto-complete/auto-complete";
import ButtonApp from "./components/button/button";
import CheckBox from "./components/check-box/check-box";
import FloatActionButton from "./components/float-action-button/float-action-button";
import RadioButton from "./components/radio-button/radio-button";
import RatingApp from "./components/rating/rating";
import SelectApp from "./components/select/select";
import SwitchApp from "./components/switch/switch";
import TextInput from "./components/text-input/text-input";
import PaginationApp from "./components/pagination/pagination";

function App() {
  return (
    <div className="App">
      <AutoComplete></AutoComplete>
      <ButtonApp></ButtonApp>
      <CheckBox></CheckBox>
      <FloatActionButton></FloatActionButton>
      <RadioButton></RadioButton>
      <RatingApp></RatingApp>
      <SelectApp></SelectApp>
      <SwitchApp></SwitchApp>
      <TextInput></TextInput>
      <PaginationApp></PaginationApp>
    </div>
  );
}

export default App;
