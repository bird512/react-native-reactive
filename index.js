import React from 'react';
import {
  Actions,
  ActionConst,
  DefaultRenderer,
  Modal,
  NavBar,
  Reducer,
  Router as OriginalRouter,
  Scene,
  Switch,
  TabBar,
  TabbedView,
  getInitialState,
  Util,
} from 'react-native-router-flux';
import {fromClass} from "kefir.react.native"

function Router(props){
  return <OriginalRouter wrapBy={fromClass} {...props}/>
}
export {
  Actions,
  ActionConst,
  DefaultRenderer,
  Modal,
  NavBar,
  Reducer,
  Router,
  Scene,
  Switch,
  TabBar,
  TabbedView,
  getInitialState,
  Util,
};
