import * as ButtonComponents from './ElementSamples/Buttons/ButtonComponents'
import * as ButtonComponentsCode from './ElementSamples/Buttons/ButtonComponentCodes'
import * as CardComponents from './ElementSamples/Cards/CardComponents'
import * as CardComponentsCode from './ElementSamples/Cards/CardComponentCodes'
import * as InputComponents from './ElementSamples/Inputs/InputComponents'
import * as InputComponentsCode from './ElementSamples/Inputs/InputComponentCodes'

export const Elements = [
  {
    name: "Animated Border Button",
    id : 1,
    component: ButtonComponents.ButtonOne,
    code : ButtonComponentsCode.code_ID1,
    category : ['button']
  },
  {
    name: "Slide Fill Button",
    id : 2,
    component: ButtonComponents.ButtonTwo,
    code : ButtonComponentsCode.code_ID2,
    category : ['button']
  },
  {
    name: "Gradient Button",
    id : 3,
    component: ButtonComponents.ButtonThree,
    code : ButtonComponentsCode.code_ID3,
    category : ['button']
  },
  {
    name: "Feature Card",
    id : 4,
    component: CardComponents.CardOne,
    code : CardComponentsCode.code_ID1,
    category : ['card']
  },
  {
    name: "Simple Input",
    id : 6,
    component: InputComponents.InputOne,
    code : InputComponentsCode.code_ID1,
    category : ['input']
  },
  {
    name: "Labeled Input",
    id : 7,
    component: InputComponents.InputTwo,
    code : InputComponentsCode.code_ID2,
    category : ['input']
  },
  {
    name:'Drop Down',
    id: 8,
    component: ButtonComponents.ButtonFour,
    code : ButtonComponentsCode.code_ID4,
    category : ['button']
  }
]
