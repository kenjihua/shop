
import React from "react";
import TKCls from "./__tk.css";

export default class Paging extends React.Component {
    constructor(props) {
        super(props);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    componentWillMount(){
        console.log("paging componentWillMount");
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.options);
    }

    componentDidMount(){
        console.log("paging componentDidMount");
        console.log("*****************tableKill end work*****************");
    }

    render() {
        console.log("paging render function");
        var that = this;
        var count = this.props.options.count;
        var index = this.props.options.index;
        var total = this.props.options.total;
        return (
            <div className={TKCls.paging + " text-right"}>
                <span>共<em>{count}</em>条</span>
                <input type="button" title="上一页" onClick={this.prev} value="<" />
                <input type="button" title="下一页" onClick={this.next} value=">" />
                <span>当前第<em>{index}</em>/<em>{total}</em>页</span>
                <span>到 <input type="text" ref="__pIndex"/> 页</span>
                <input type="button" value="确定" onClick={that.goIndex.bind(this)}/>
            </div>
        );
    }
    goIndex(){
        this.props.goIndex(this.refs['__pIndex'].value);
    }
    prev(){
        this.props.goPrev();
    }
    next(){
        this.props.goNext();
    }
}