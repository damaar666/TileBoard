import { App } from './app';
import camera from './directives/camera';
import cameraStream from './directives/cameraStream';
import clock from './directives/clock';
import date from './directives/date';
import headerItem from './directives/headerItem';
import iframeTile from './directives/iframeTile';
import ngMax from './directives/ngMax';
import ngMin from './directives/ngMin';
import onScroll from './directives/onScroll';
import tile from './directives/tile';

App.directive('camera', camera);
App.directive('cameraStream', cameraStream);
App.directive('clock', clock);
App.directive('date', date);
App.directive('headerItem', headerItem);
App.directive('iframeTile', iframeTile);
App.directive('ngMax', ngMax);
App.directive('ngMin', ngMin);
App.directive('onScroll', onScroll);
App.directive('tile', tile);
