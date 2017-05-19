var React = require('react');
var ReactDOM = require('react-dom');//因為我們有用jquery操作dom
var ReactDOMServer = require('react-dom/server');

let ErrorModal = React.createClass({
    getDefaultProps: function(){
        //預設的錯誤訊息標頭
        return {
           title: '找不到喔'
           
        };
    },
    propTypes: {
       title: React.PropTypes.string,
       message: React.PropTypes.string.isRequired
    },
   //生命循環在被render時render
    componentDidMount: function(){
       let {title, message} = this.props;
       //要先加進來在componentDidMount並且在開啟foundation和render之前，不然foundation會跟react衝突
       let modalMarkup = (
         <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p>{message}</p>
            <p>
              <button className="button hollow" data-close="">關閉訊息</button>
            </p>
         </div>
       ); 
       //以下是jquery selector所以用錢號開囉
       let $modal = $(ReactDOMServer.renderToString(modalMarkup));
       $(ReactDOM.findDOMNode(this)).html($modal);//這是一個尋找dom及component的method
       let modal = new Foundation.Reveal($('#error-modal'));//會pass foundation的jquery
       modal.open(); 
       
    },
   render: function(){
        //因為foundation操作了dom，會造成根react的衝突，因此我們要讓react render來從沒有dom開始
        return (
            <div>
            </div>
        );

       
    }
});

module.exports = ErrorModal;