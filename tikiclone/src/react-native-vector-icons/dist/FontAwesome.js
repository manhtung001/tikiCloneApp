var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.getImageSourceSync=exports.getImageSource=exports.TabBarItemIOS=exports.TabBarItem=exports.Button=exports.default=void 0;var _createIconSet=_interopRequireDefault(require("./lib/create-icon-set"));var _FontAwesome=_interopRequireDefault(require("./glyphmaps/FontAwesome.json"));var iconSet=(0,_createIconSet.default)(_FontAwesome.default,'FontAwesome','FontAwesome.ttf');var _default=iconSet;exports.default=_default;var Button=iconSet.Button,TabBarItem=iconSet.TabBarItem,TabBarItemIOS=iconSet.TabBarItemIOS,getImageSource=iconSet.getImageSource,getImageSourceSync=iconSet.getImageSourceSync;exports.getImageSourceSync=getImageSourceSync;exports.getImageSource=getImageSource;exports.TabBarItemIOS=TabBarItemIOS;exports.TabBarItem=TabBarItem;exports.Button=Button;