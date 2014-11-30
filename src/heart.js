/**
* @jsx React.DOM
*/

var React = require('react')

var Heart = module.exports = React.createClass({
    getInitialState: function(){
      return { made: 'made', heart: 'heart'}
    }
  , render: function(){
    var author

    if(this.props.author){
      author = <Author link={this.props.author.link}>{this.props.author.name}</Author>
    }

    return (
      <p className="hrt">
        <Word>{this.props.made}</Word>
          with
        <Icon animation={this.props.animation}>{this.props.heart}</Icon>
        {author}
      </p>
    )
  }
  ,
})

var Word = React.createClass({
  render: function(){
    return (
      <span className="hrt_made">{this.props.children}</span>
    )
  }
})

var Icon = React.createClass({
  render: function(){
    var _class = "hrt_heart"

    _class = this.props.animation == 'hrt-beating' ?
       _class + " hrt_heart--beating" : _class + " " + this.props.animation

    return (
      <span className={_class}>{this.props.children}</span>
    )
  }
})

var Author = React.createClass({
  render: function(){
    return (
      <span className="hrt_author">by
        <a href={this.props.link}>
          {this.props.children}
        </a>
      </span>
    )
  }
})
