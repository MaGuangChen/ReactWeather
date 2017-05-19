var React = require('react');

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
       let modal = new Foundation.Reveal($('#error-modal'));//會pass foundation的jquery
       modal.open();  
    },
   render: function(){
       let {title, message} = this.props;
       return (
         <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p>{message}</p>
            <p>
              <button className="button hollow" data-close="">關閉訊息</button>
            </p>
         </div>
       );
   }
});

module.exports = ErrorModal;